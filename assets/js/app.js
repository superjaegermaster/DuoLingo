(() => {
  "use strict";

  const STORAGE_KEY = "minilingo-progress-v1";
  const PROFILES = [
    { id: "eva", name: "Eva", avatar: "E", color: "pink", icon: "heart", role: "Étoiles et paillettes", animations: ["stars", "wands", "sparkles", "hearts", "rainbow"] },
    { id: "clement", name: "Clément", avatar: "C", color: "blue", icon: "zap", role: "Muscles et puissance", animations: ["muscles", "dumbbells", "lightning"] }
  ];
  const data = window.MINILINGO_DATA;
  const lessons = data.lessons;
  const allWords = lessons.flatMap((lesson) => lesson.words);
  const wordById = new Map(allWords.map((word) => [word.id, word]));
  const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
  const main = document.getElementById("main-content");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  const confettiLayer = document.getElementById("confetti-layer");

  let storageOK = true;
  const profileStore = loadProfileStore();
  let state = profileStore.profiles[profileStore.activeProfileId];
  let view = "learn";
  let session = null;
  let toastTimer = null;
  let confettiTimer = null;
  let modalReturnFocus = null;
  let pendingImport = null;
  let pendingNavigation = "learn";

  function icon(name, className = "") {
    return `<svg class="icon ${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    })[character]);
  }

  function profileConfig() {
    return PROFILES.find((profile) => profile.id === profileStore.activeProfileId) || PROFILES[0];
  }

  function personalize(value) {
    if (typeof value !== "string") return value;
    return value.replaceAll("{name}", state.learnerName || profileConfig().name);
  }

  function hydrateStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach((element) => {
      if (!element.querySelector("svg")) {
        element.innerHTML = icon(element.dataset.icon);
      }
    });
  }

  function defaultState(learnerName = "") {
    return {
      version: 1,
      learnerName,
      xp: 0,
      streak: 0,
      lastActiveDate: "",
      activeDates: [],
      dailyXp: {},
      lessonProgress: {},
      learnedWords: [],
      wordStats: {},
      perfectLessons: 0,
      settings: {
        dailyGoal: 20,
        reduceMotion: false
      },
      updatedAt: null
    };
  }

  function safeNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? Math.floor(number) : fallback;
  }

  function normalizeState(raw) {
    const clean = defaultState();
    if (!raw || typeof raw !== "object") return clean;

    clean.learnerName = typeof raw.learnerName === "string" ? raw.learnerName.trim().slice(0, 24) : "";
    clean.xp = safeNumber(raw.xp);
    clean.streak = safeNumber(raw.streak);
    clean.lastActiveDate = typeof raw.lastActiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.lastActiveDate) ? raw.lastActiveDate : "";
    clean.activeDates = Array.isArray(raw.activeDates)
      ? [...new Set(raw.activeDates.filter((date) => typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)))].slice(-120)
      : [];
    clean.perfectLessons = safeNumber(raw.perfectLessons);
    clean.updatedAt = typeof raw.updatedAt === "string" ? raw.updatedAt : null;

    if (raw.dailyXp && typeof raw.dailyXp === "object") {
      Object.entries(raw.dailyXp).forEach(([date, xp]) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) clean.dailyXp[date] = safeNumber(xp);
      });
    }

    if (raw.settings && typeof raw.settings === "object") {
      clean.settings.dailyGoal = [10, 20, 30, 40].includes(Number(raw.settings.dailyGoal)) ? Number(raw.settings.dailyGoal) : 20;
      clean.settings.reduceMotion = Boolean(raw.settings.reduceMotion);
    }

    if (Array.isArray(raw.learnedWords)) {
      clean.learnedWords = [...new Set(raw.learnedWords.filter((id) => wordById.has(id)))];
    }

    if (raw.wordStats && typeof raw.wordStats === "object") {
      Object.entries(raw.wordStats).forEach(([id, stats]) => {
        if (wordById.has(id) && stats && typeof stats === "object") {
          clean.wordStats[id] = {
            correct: safeNumber(stats.correct),
            wrong: safeNumber(stats.wrong),
            learning: safeNumber(stats.learning)
          };
        }
      });
    }

    if (raw.lessonProgress && typeof raw.lessonProgress === "object") {
      lessons.forEach((lesson) => {
        const progress = raw.lessonProgress[lesson.id];
        if (!progress || typeof progress !== "object") return;
        const completed = Array.isArray(progress.completed)
          ? [...new Set(progress.completed.map(Number).filter((index) => Number.isInteger(index) && index >= 0 && index < lesson.exercises.length))]
          : [];
        const helped = Array.isArray(progress.helped)
          ? [...new Set(progress.helped.map(Number).filter((index) => Number.isInteger(index) && index >= 0 && index < lesson.exercises.length))]
          : [];
        const wrong = Array.isArray(progress.wrong)
          ? [...new Set(progress.wrong.map(Number).filter((index) => Number.isInteger(index) && index >= 0 && index < lesson.exercises.length))]
          : [];
        clean.lessonProgress[lesson.id] = {
          completed,
          helped,
          wrong,
          cursor: Math.min(safeNumber(progress.cursor), lesson.exercises.length),
          finished: Boolean(progress.finished) || completed.length === lesson.exercises.length
        };
      });
    }

    return clean;
  }

  function loadProfileStore() {
    const clean = {
      version: 2,
      activeProfileId: PROFILES[0].id,
      needsChoice: false,
      profiles: Object.fromEntries(PROFILES.map((profile) => [profile.id, defaultState(profile.name)]))
    };
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!raw) {
        clean.needsChoice = true;
        return clean;
      }
      if (raw.profiles && typeof raw.profiles === "object") {
        PROFILES.forEach((profile) => {
          const saved = raw.profiles[profile.id];
          clean.profiles[profile.id] = normalizeState(saved ? { ...saved, learnerName: saved.learnerName || profile.name } : { learnerName: profile.name });
        });
        clean.activeProfileId = PROFILES.some((profile) => profile.id === raw.activeProfileId) ? raw.activeProfileId : PROFILES[0].id;
        clean.needsChoice = Boolean(raw.needsChoice);
        return clean;
      }
      clean.profiles.eva = normalizeState({ ...raw, learnerName: raw.learnerName || PROFILES[0].name });
      return clean;
    } catch (error) {
      storageOK = false;
      clean.needsChoice = true;
      return clean;
    }
  }

  function saveState() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileStore));
      if (!storageOK) {
        storageOK = true;
        showToast("La sauvegarde est de nouveau disponible.");
      }
    } catch (error) {
      if (storageOK) showToast("La sauvegarde automatique est indisponible dans ce navigateur.");
      storageOK = false;
    }
    updateSaveNote();
  }

  function dateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function yesterdayKey() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return dateKey(date);
  }

  function refreshStreak() {
    if (state.lastActiveDate && state.lastActiveDate < yesterdayKey()) {
      state.streak = 0;
      saveState();
    }
  }

  function registerActivity() {
    const today = dateKey();
    if (state.lastActiveDate !== today) {
      state.streak = state.lastActiveDate === yesterdayKey() ? state.streak + 1 : 1;
      state.lastActiveDate = today;
    }
    if (!state.activeDates.includes(today)) {
      state.activeDates = [...state.activeDates, today].slice(-120);
    }
  }

  function addXP(amount) {
    registerActivity();
    state.xp += amount;
    const today = dateKey();
    state.dailyXp[today] = (state.dailyXp[today] || 0) + amount;
  }

  function todayXP() {
    return state.dailyXp[dateKey()] || 0;
  }

  function getProgress(lesson, create = false) {
    if (!state.lessonProgress[lesson.id] && create) {
      state.lessonProgress[lesson.id] = {
        completed: [],
        helped: [],
        wrong: [],
        cursor: 0,
        finished: false
      };
    }
    return state.lessonProgress[lesson.id];
  }

  function completedLessonCount() {
    return lessons.filter((lesson) => getProgress(lesson)?.finished).length;
  }

  function lessonUnlocked(index) {
    return index === 0 || Boolean(getProgress(lessons[index - 1])?.finished);
  }

  function nextLesson() {
    return lessons.find((lesson) => !getProgress(lesson)?.finished) || lessons[0];
  }

  function firstIncompleteIndex(lesson, progress) {
    if (!progress) return 0;
    const index = lesson.exercises.findIndex((exercise, exerciseIndex) => !progress.completed.includes(exerciseIndex));
    return index === -1 ? lesson.exercises.length : index;
  }

  function getLearnedWords(lesson = null) {
    const learned = new Set(state.learnedWords);
    return allWords.filter((word) => learned.has(word.id) && (!lesson || lesson.words.some((lessonWord) => lessonWord.id === word.id)));
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toastText.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function updateSaveNote() {
    const note = document.getElementById("lesson-save-note");
    if (!note) return;
    note.innerHTML = storageOK
      ? `${icon("shield")}<span>Progression enregistrée automatiquement</span>`
      : `${icon("shield")}<span>Sauvegarde indisponible : exporte ta progression dans l’espace parents</span>`;
  }

  function updateChrome() {
    const profile = profileConfig();
    document.getElementById("top-streak").textContent = state.streak;
    document.getElementById("top-xp").textContent = state.xp;
    document.getElementById("top-name").textContent = state.learnerName || profile.name;
    document.getElementById("top-profile-role").textContent = profile.role;
    document.getElementById("top-avatar").textContent = (state.learnerName || profile.avatar).charAt(0).toUpperCase();
    document.getElementById("top-avatar").className = `avatar profile-${profile.id}`;
    document.body.dataset.profile = profile.id;

    const daily = todayXP();
    const goal = state.settings.dailyGoal;
    const percent = Math.min(100, Math.round((daily / goal) * 100));
    document.getElementById("sidebar-goal-fill").style.width = `${percent}%`;
    document.getElementById("sidebar-goal-text").textContent = `${daily} / ${goal} XP`;
    document.getElementById("sidebar-goal-percent").textContent = `${percent} %`;
    document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
  }

  function updateNavigation() {
    document.querySelectorAll("[data-nav]").forEach((button) => {
      button.classList.toggle("active", button.dataset.nav === view);
    });
  }

  function navigate(nextView, options = {}) {
    if (!["learn", "review", "badges"].includes(nextView)) return;
    clearAutoAdvance();
    session = null;
    view = nextView;
    if (modal.open) closeModal();
    updateNavigation();
    renderView();
    window.scrollTo({ top: 0, behavior: state.settings.reduceMotion ? "auto" : "smooth" });
    if (options.focus !== false) main.focus({ preventScroll: true });
  }

  function renderView() {
    if (session) {
      renderLesson(true);
      return;
    }
    main.classList.remove("lesson-main");
    if (view === "review") renderReview();
    else if (view === "badges") renderBadges();
    else renderHome();
    updateChrome();
  }

  function foxScene() {
    return `
      <svg class="fox-scene" viewBox="0 0 340 285" role="img" aria-label="Un petit renard qui lit un livre">
        <path d="M49 178c-24-48 4-111 65-127 56-15 123 3 151 45 31 47 13 117-37 143-52 27-147 20-179-61Z" fill="#d5efbf"/>
        <circle cx="278" cy="62" r="34" fill="#f7dc83" opacity=".55"/>
        <g class="float-letter">
          <rect x="231" y="27" width="48" height="43" rx="14" fill="white" transform="rotate(8 255 48)"/>
          <text x="255" y="55" text-anchor="middle" fill="#7c62ae" font-size="23" font-weight="900" font-family="Trebuchet MS, sans-serif">A</text>
        </g>
        <g class="float-letter">
          <rect x="39" y="47" width="42" height="39" rx="13" fill="white" transform="rotate(-9 60 66)"/>
          <text x="60" y="73" text-anchor="middle" fill="#4a90e2" font-size="21" font-weight="900" font-family="Trebuchet MS, sans-serif">B</text>
        </g>
        <g class="sparkle" fill="#f4bd3f"><path d="m299 129 4 9 9 4-9 4-4 9-4-9-9-4 9-4Z"/></g>
        <g class="sparkle" fill="#fff"><path d="m74 132 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/></g>
        <path d="M238 176c47-15 75 3 68 32-5 23-35 38-60 24-15-9-20-41-8-56Z" fill="#ed9845"/>
        <path d="M286 183c18 1 29 11 25 25-3 12-14 19-25 17 10-11 12-26 0-42Z" fill="#fff2d9"/>
        <ellipse cx="190" cy="205" rx="67" ry="65" fill="#f2a34e"/>
        <ellipse cx="190" cy="215" rx="40" ry="45" fill="#fff0d4"/>
        <path d="m129 110-6-61 48 39m55 22 9-61-50 39" fill="#ed9845"/>
        <path d="m135 91-2-26 23 20m62 6 4-26-23 20" fill="#9d5a45"/>
        <path d="M126 117c0-45 30-70 65-70s66 25 66 70c0 46-28 76-66 76s-65-30-65-76Z" fill="#f5ab55"/>
        <path d="M130 119c8-10 23-10 35 3 9-16 27-16 37 0 12-12 27-13 39-3-1 42-24 68-56 68s-53-27-55-68Z" fill="#fff2dc"/>
        <ellipse cx="161" cy="122" rx="6" ry="8" fill="#3d3b42"/>
        <ellipse cx="219" cy="122" rx="6" ry="8" fill="#3d3b42"/>
        <circle cx="163" cy="119" r="2" fill="white"/>
        <circle cx="221" cy="119" r="2" fill="white"/>
        <path d="M183 145c0-5 14-5 14 0 0 5-5 9-7 9s-7-4-7-9Z" fill="#5c4644"/>
        <path d="M190 153v7m0 0c-5 5-11 4-14 0m14 0c5 5 11 4 14 0" fill="none" stroke="#8a6253" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="147" cy="145" rx="10" ry="5" fill="#f39a83" opacity=".55"/>
        <ellipse cx="233" cy="145" rx="10" ry="5" fill="#f39a83" opacity=".55"/>
        <path d="M151 188c-25 0-39 15-34 30 5 14 23 8 38-4" fill="#f2a34e"/>
        <path d="M229 188c25 0 39 15 34 30-5 14-23 8-38-4" fill="#f2a34e"/>
        <path d="m139 203 82-4 81 4-16 54-65-12-66 12Z" fill="#4d78ba"/>
        <path d="M139 203c25-8 54-5 82 7 28-12 57-15 81-7l-16 54c-26-7-49-2-65 8-16-10-39-15-66-8Z" fill="#678fd3"/>
        <path d="M221 210v49" fill="none" stroke="#345f9c" stroke-width="4"/>
        <path d="M155 220c15-3 30-2 43 2m-42 11c12-2 23-1 33 2m64-13c12-3 24-3 36-1m-34 12c10-2 20-2 29 0" fill="none" stroke="#d9e6fa" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="167" cy="269" rx="31" ry="9" fill="#c0dca7"/>
        <ellipse cx="227" cy="269" rx="31" ry="9" fill="#c0dca7"/>
      </svg>`;
  }

  function renderHome() {
    document.title = "Minilingo — L’anglais en s’animant";
    const lesson = nextLesson();
    const started = completedLessonCount() > 0 || Object.keys(state.lessonProgress).length > 0;
    const allFinished = completedLessonCount() === lessons.length;
    const name = escapeHTML(state.learnerName || profileConfig().name);
    const buttonLabel = allFinished ? "Réviser mes mots" : started ? "Continuer mon parcours" : "Commencer ma première leçon";
    const buttonAction = allFinished ? "start-review" : "start-next";

    const lessonRow = (item) => {
      const index = lessons.findIndex((lessonItem) => lessonItem.id === item.id);
      const progress = getProgress(item);
      const unlocked = lessonUnlocked(index);
      const completed = progress?.completed.length || 0;
      const status = progress?.finished ? "completed" : unlocked ? "active" : "locked";
      const label = progress?.finished
        ? "Revoir la leçon"
        : completed > 0
          ? "Reprendre la leçon"
          : unlocked
            ? "Commencer la leçon"
            : "Termine la leçon précédente";
      const actionIcon = progress?.finished ? "repeat" : unlocked ? "arrow-right" : "lock";
      const nodeIcon = progress?.finished ? "check" : unlocked ? item.icon : "lock";
      return `
        <div class="lesson-row ${status} color-${item.color}">
          <div class="lesson-node" aria-hidden="true">${icon(nodeIcon)}</div>
          <button class="lesson-card" data-lesson-id="${item.id}" ${unlocked ? "" : "disabled"} aria-label="${escapeHTML(label)} : ${escapeHTML(item.title)}">
            <span class="lesson-card-copy">
              <span class="lesson-card-label">Leçon ${item.number} · ${progress?.finished ? "Terminée" : completed > 0 ? `${completed}/${item.exercises.length} exercices` : unlocked ? "Prête pour toi" : "À débloquer"}</span>
              <h3>${escapeHTML(item.title)}</h3>
              <p>${escapeHTML(item.description)}</p>
              <span class="lesson-meta"><span>${icon("clock")}${item.minutes} min</span><span>${icon("zap")}+${item.xp} XP</span></span>
            </span>
            <span class="lesson-action" aria-hidden="true">${icon(actionIcon)}</span>
          </button>
        </div>`;
    };

    const unitSections = data.units.map((unit) => {
      const unitLessons = lessons.filter((item) => (item.unit || "essentials") === unit.id);
      const completed = unitLessons.filter((item) => getProgress(item)?.finished).length;
      const percent = Math.round((completed / unitLessons.length) * 100);
      const stages = data.stages.map((stage) => {
        const stageLessons = unitLessons.filter((item) => (item.stage || "vocabulary") === stage.id);
        if (!stageLessons.length) return "";
        return `
          <section class="stage-block stage-${stage.id}" aria-labelledby="stage-${unit.id}-${stage.id}">
            <div class="stage-heading"><span class="stage-number">${stage.number}</span><div><h4 id="stage-${unit.id}-${stage.id}">${escapeHTML(stage.title)}</h4><p>${escapeHTML(stage.description)}</p></div><small>${stageLessons.length} leçons</small></div>
            <div class="lesson-path">${stageLessons.map(lessonRow).join("")}</div>
          </section>`;
      }).join("");
      return `
        <section class="unit-block color-${unit.color}" aria-labelledby="unit-${unit.id}">
          <article class="unit-card">
            <div class="unit-illustration" aria-hidden="true">${icon(unit.icon)}</div>
            <div class="unit-copy"><small>Unité ${unit.number} · ${unitLessons.length} leçons</small><h3 id="unit-${unit.id}">${escapeHTML(unit.title)}</h3><p>${escapeHTML(unit.description)}</p></div>
            <div class="unit-progress"><p>${completed} / ${unitLessons.length} leçons</p><div class="progress-track"><span style="width: ${percent}%"></span></div></div>
          </article>
          <div class="unit-stages">${stages}</div>
        </section>`;
    }).join("");

    const weekDates = getWeekDates();
    const weekDays = weekDates.map((date) => {
      const key = dateKey(date);
      const done = state.activeDates.includes(key);
      const today = key === dateKey();
      return `<div class="week-day ${done ? "done" : ""} ${today ? "today" : ""}"><small>${["L", "M", "M", "J", "V", "S", "D"][(date.getDay() + 6) % 7]}</small><span>${done ? icon("check") : date.getDate()}</span></div>`;
    }).join("");

    const daily = todayXP();
    const goalPercent = Math.min(100, Math.round((daily / state.settings.dailyGoal) * 100));
    const word = allWords[Math.floor(Date.now() / 86400000) % allWords.length];
    const unitPercent = Math.round((completedLessonCount() / lessons.length) * 100);

    main.innerHTML = `
      <section class="hero-grid" aria-labelledby="welcome-title">
        <article class="hero-card">
          <div class="hero-copy">
            <p class="eyebrow">Bonjour, ${name} !</p>
            <h1 id="welcome-title">${allFinished ? "Tu as terminé ton aventure,<br><span>quelle fierté !</span>" : "Un petit pas aujourd’hui,<br><span>un grand progrès demain.</span>"}</h1>
            <p>${allFinished ? "Tous les mots sont à toi. Un petit mélange pour les garder bien en tête ?" : "Des leçons courtes, des jeux et de gentilles corrections pour progresser à ton rythme."}</p>
            <button class="button button-primary" data-action="${buttonAction}">${buttonLabel}${icon("arrow-right")}</button>
          </div>
          <div class="hero-art">${foxScene()}</div>
        </article>

        <article class="daily-card" aria-labelledby="daily-title">
          <div class="daily-heading"><h2 id="daily-title">Ton objectif du jour</h2>${icon("target")}</div>
          <div class="goal-ring-wrap">
            <div class="goal-ring" style="--goal-angle: ${goalPercent * 3.6}deg"><div class="goal-ring-content"><strong>${daily}</strong><small>XP</small></div></div>
            <div class="goal-copy"><strong>${daily >= state.settings.dailyGoal ? "Objectif atteint !" : "Tu peux le faire !"}</strong><p>${daily >= state.settings.dailyGoal ? "Bravo, tu as fait ta part aujourd’hui." : `Encore ${state.settings.dailyGoal - daily} XP pour atteindre ton objectif.`}</p></div>
          </div>
          <div class="week-days" aria-label="Activité de la semaine">${weekDays}</div>
        </article>
      </section>

      <div class="section-heading">
        <div><h2>Ton parcours</h2><p>${lessons.length} leçons, ${allWords.length} mots et ${lessons.reduce((total, item) => total + item.exercises.length, 0)} exercices. Des mots, puis des phrases, puis des conversations.</p></div>
        <span class="section-kicker">${icon("flag")}${unitPercent} % du parcours</span>
      </div>

      <div class="course-layout">
        <section class="course-path" aria-label="Parcours complet">${unitSections}</section>

        <aside class="side-stack" aria-label="Informations utiles">
          <article class="info-card word-card">
            <div class="info-card-heading"><h3>Mot du jour</h3>${icon("sparkles")}</div>
            <div class="word-main"><strong>${escapeHTML(personalize(word.en))}</strong><button class="sound-button" data-action="speak" data-say="${escapeHTML(personalize(word.en))}" aria-label="Écouter ${escapeHTML(personalize(word.en))}">${icon("volume")}</button></div>
            <p class="word-translation">${escapeHTML(personalize(word.fr))}</p>
            <p class="word-example">${escapeHTML(personalize(word.example))}</p>
          </article>

          <article class="info-card">
            <div class="info-card-heading"><h3>Ta semaine</h3>${icon("flame")}</div>
            <p style="color: var(--muted); font-size: 11px; font-weight: 600; line-height: 1.65;">${state.streak > 0 ? `<strong style="color: var(--orange);">${state.streak} jour${state.streak > 1 ? "s" : ""} d’affilée !</strong> Continue pour faire grandir ta série.` : "Termine un exercice aujourd’hui pour lancer ta série."}</p>
          </article>

          <article class="info-card tip-card">
            <div class="info-card-heading"><h3>Le petit conseil</h3>${icon("sun")}</div>
            <p><strong>3 minutes, c’est suffisant.</strong> Tu peux t’arrêter quand tu veux : chaque réponse est enregistrée automatiquement.</p>
          </article>
        </aside>
      </div>

      <p class="home-footer">${icon("heart")}Pensé pour apprendre avec le sourire, à ton rythme.</p>`;
  }

  function getWeekDates() {
    const now = new Date();
    const mondayOffset = (now.getDay() + 6) % 7;
    const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
    return Array.from({ length: 7 }, (_, index) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + index));
  }

  function renderReview() {
    document.title = "Réviser — Minilingo";
    const learnedWords = getLearnedWords();
    const reviewCards = lessons.map((lesson) => {
      const count = getLearnedWords(lesson).length;
      return `
        <button class="review-card color-${lesson.color}" data-action="review-lesson" data-lesson-id="${lesson.id}" ${count === 0 ? "disabled" : ""}>
          <span class="review-card-icon">${icon(count > 0 ? lesson.icon : "lock")}</span>
          <h3>${escapeHTML(lesson.title)}</h3>
          <p>${count > 0 ? `Un mélange de ${Math.min(5, count)} questions avec les mots déjà rencontrés.` : "Termine la leçon pour débloquer la révision."}</p>
          <span class="review-card-footer"><span>${count} / ${lesson.words.length} mots appris</span>${icon("arrow-right")}</span>
        </button>`;
    }).join("");

    const vocabulary = learnedWords.length > 0
      ? `<div class="vocab-grid">${learnedWords.map((word) => `
          <article class="vocab-card">
            <div class="vocab-card-copy"><strong>${escapeHTML(personalize(word.en))}</strong><span>${escapeHTML(personalize(word.fr))}</span></div>
            <button class="sound-button" data-action="speak" data-say="${escapeHTML(personalize(word.en))}" aria-label="Écouter ${escapeHTML(personalize(word.en))}">${icon("volume")}</button>
          </article>`).join("")}</div>`
      : `<div class="empty-state"><div class="empty-state-icon">${icon("book")}</div><h2>Ta boîte à mots attend tes premiers mots</h2><p>Commence la leçon « Bonjour ! ». Les mots que tu découvres apparaîtront ici pour que tu puisses les réécouter et les revoir.</p><button class="button button-primary" data-action="start-next">Commencer ma première leçon${icon("arrow-right")}</button></div>`;

    main.innerHTML = `
      <div class="page-heading">
        <div><h1>Un peu de révision ?</h1><p>Les tout petits révisions font les grandes réussites.</p></div>
        <span class="section-kicker">${icon("book")}${learnedWords.length} mot${learnedWords.length > 1 ? "s" : ""} appris</span>
      </div>

      <section class="review-hero">
        <div class="review-hero-copy"><h2>Le mélange express</h2><p>Des mots choisis dans tout ton parcours, pour vérifier ce que tu as vraiment retenu.</p></div>
        <button class="button" data-action="start-review" ${learnedWords.length === 0 ? "disabled" : ""}>${icon("repeat")}Lancer ${Math.min(5, learnedWords.length)} question${Math.min(5, learnedWords.length) > 1 ? "s" : ""}</button>
      </section>

      <div class="section-heading"><div><h2>Réviser par thème</h2><p>Choisis une leçon que tu connais déjà.</p></div></div>
      <section class="review-grid" aria-label="Révisions par leçon">${reviewCards}</section>

      <section class="vocab-section">
        <div class="section-heading"><div><h2>Ta boîte à mots</h2><p>Touche le haut-parleur pour entendre la prononciation.</p></div></div>
        ${vocabulary}
      </section>`;
  }

  function renderBadges() {
    document.title = "Mes badges — Minilingo";
    const metrics = {
      lessons: completedLessonCount(),
      words: state.learnedWords.length,
      phrases: lessons.filter((lesson) => lesson.stage === "phrases" && getProgress(lesson)?.finished).length,
      conversations: lessons.filter((lesson) => lesson.stage === "conversation" && getProgress(lesson)?.finished).length,
      perfectLessons: state.perfectLessons,
      streak: state.streak,
      xp: state.xp
    };
    const unlocked = data.badges.filter((badge) => metrics[badge.metric] >= badge.target).length;
    const badges = data.badges.map((badge) => {
      const value = metrics[badge.metric];
      const isUnlocked = value >= badge.target;
      const percent = Math.min(100, Math.round((value / badge.target) * 100));
      return `
        <article class="badge-card color-${badge.color} ${isUnlocked ? "unlocked" : "locked"}">
          <div class="badge-medal">${icon(badge.icon)}</div>
          <h3>${escapeHTML(badge.title)}</h3>
          <p>${escapeHTML(badge.description)}</p>
          <span class="badge-status">${icon(isUnlocked ? "check" : "lock")}${isUnlocked ? "Débloqué" : `Encore ${badge.target - value}`}</span>
          <div class="badge-progress" aria-label="${percent} % du badge"><span style="width: ${percent}%"></span></div>
        </article>`;
    }).join("");

    main.innerHTML = `
      <div class="page-heading">
        <div><h1>Tes petits exploits</h1><p>Chaque badge raconte un pas de plus dans ton aventure.</p></div>
        <span class="badge-summary">${icon("award")}${unlocked} / ${data.badges.length} débloqués</span>
      </div>
      <section class="badges-grid" aria-label="Collection de badges">${badges}</section>`;
  }

  function buildReviewExercises(words, sourceLesson = null) {
    const pool = sourceLesson ? sourceLesson.words : allWords;
    return shuffle(words).slice(0, 5).map((word, index) => {
      const distractors = shuffle(pool.filter((item) => item.id !== word.id)).slice(0, 3);
      if (index % 3 === 0) {
        return {
          id: `review-${word.id}-en-${index}`,
          type: "choice",
          skill: "Vocabulaire",
          prompt: `Comment dit-on « ${word.fr} » en anglais ?`,
          helper: "Choisis le bon mot.",
          wordId: word.id,
          wordIds: [word.id],
          options: shuffle([word, ...distractors]).map((item) => item.en),
          answer: word.en
        };
      }
      if (index % 3 === 1) {
        return {
          id: `review-${word.id}-listen-${index}`,
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quel mot viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: word.en,
          wordId: word.id,
          wordIds: [word.id],
          options: shuffle([word, ...distractors]).map((item) => item.en),
          answer: word.en
        };
      }
      return {
        id: `review-${word.id}-fr-${index}`,
        type: "choice",
        skill: "Comprendre",
        prompt: `Que veut dire « ${word.en} » ?`,
        helper: "Choisis la bonne traduction.",
        wordId: word.id,
        wordIds: [word.id],
        options: shuffle([word, ...distractors]).map((item) => item.fr),
        answer: word.fr
      };
    });
  }

  function openReview(words, sourceLesson = null) {
    if (!words.length) {
      showToast("Découvre d’abord quelques mots dans une leçon.");
      return;
    }
    const exercises = buildReviewExercises(words, sourceLesson);
    const lesson = sourceLesson
      ? { ...sourceLesson, title: `Révision · ${sourceLesson.title}` }
      : { id: "mixed-review", title: "Révision express", subtitle: "Mélange de mots", icon: "repeat", color: "purple", words, xp: 10 };
    createSession(lesson, exercises, "review");
  }

  function createSession(lesson, exercises, mode) {
    const progress = mode === "lesson" ? getProgress(lesson, true) : null;
    let startIndex = 0;
    if (progress && !progress.finished) {
      startIndex = Math.min(firstIncompleteIndex(lesson, progress), exercises.length - 1);
    }
    session = {
      lesson,
      exercises,
      mode,
      index: startIndex,
      replay: Boolean(progress?.finished),
      attempts: 0,
      status: "answering",
      selected: null,
      lastWrong: null,
      typeValue: "",
      selectedTokenIds: [],
      matchSelected: null,
      matched: [],
      matchWrong: null,
      matchRight: [],
      completedCurrent: false,
      earnedXp: 0,
      lastXp: 0,
      bonusXp: 0,
      correctFirstTry: 0,
      autoAdvanceTimer: null,
      completionShown: false
    };
    resetExercise();
    if (progress) {
      progress.cursor = startIndex;
      saveState();
    }
    renderLesson(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function openLesson(id) {
    const lesson = lessonById.get(id);
    if (!lesson) return;
    const index = lessons.findIndex((item) => item.id === id);
    if (!lessonUnlocked(index)) {
      showToast("Termine la leçon précédente pour débloquer celle-ci.");
      return;
    }
    createSession(lesson, lesson.exercises, "lesson");
  }

  function resetExercise() {
    if (!session) return;
    const exercise = session.exercises[session.index];
    session.attempts = 0;
    session.status = "answering";
    session.selected = null;
    session.lastWrong = null;
    session.typeValue = "";
    session.selectedTokenIds = [];
    session.matchSelected = null;
    session.matched = [];
    session.matchWrong = null;
    session.matchRight = exercise.type === "match" ? shuffle(exercise.pairs) : [];
    session.completedCurrent = false;
    session.lastXp = 0;
  }

  function renderLesson(focusHeading = false) {
    if (!session) return;
    main.classList.add("lesson-main");
    document.title = `${session.lesson.title} — Minilingo`;
    updateNavigation();
    const doneCount = session.index + (session.status === "correct" || session.status === "wrong" ? 1 : 0);
    const percent = Math.round((doneCount / session.exercises.length) * 100);
    main.innerHTML = `
      <div class="lesson-header">
        <button class="quit-button" data-action="quit-lesson" aria-label="Quitter la leçon">${icon("x")}</button>
        <div class="lesson-progress">
          <div class="lesson-progress-copy"><strong>${escapeHTML(session.lesson.title)}</strong><span>${doneCount} / ${session.exercises.length}</span></div>
          <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}" aria-label="Progression de la leçon"><span style="width: ${percent}%"></span></div>
        </div>
      </div>
      <div id="exercise-root"></div>`;
    renderExercise();
    updateChrome();
    updateSaveNote();
    if (focusHeading) {
      requestAnimationFrame(() => {
        const heading = document.querySelector(".exercise-shell h1");
        if (heading) heading.focus({ preventScroll: true });
      });
    }
  }

  function renderExercise() {
    if (!session) return;
    const root = document.getElementById("exercise-root");
    if (!root) return;
    const exercise = session.exercises[session.index];
    root.innerHTML = `
      <section class="exercise-shell color-${session.lesson.color}" aria-labelledby="exercise-title">
        <div class="exercise-meta"><span class="skill-pill">${icon("pencil")}${escapeHTML(exercise.skill)}</span><span class="exercise-count">Exercice ${session.index + 1} sur ${session.exercises.length}</span></div>
        <h1 id="exercise-title" tabindex="-1">${escapeHTML(personalize(exercise.prompt))}</h1>
        <p class="exercise-helper">${escapeHTML(personalize(exercise.helper))} Ensuite, la question suivante arrive toute seule.</p>
        <div class="exercise-card">${renderExerciseBody(exercise)}</div>
        <div class="feedback-area">${renderFeedback(exercise)}</div>
        <p class="lesson-save-note" id="lesson-save-note"></p>
      </section>`;
    updateSaveNote();
  }

  function renderExerciseBody(exercise) {
    if (exercise.type === "choice" || exercise.type === "listen") {
      const locked = session.status === "correct" || session.status === "wrong";
      const expected = personalize(exercise.answer);
      const options = exercise.options.map((option, index) => {
        const label = personalize(option);
        const isCorrect = locked && label === expected;
        const isWrong = session.status === "wrong" && session.lastWrong === label;
        const selected = session.selected === label;
        const classes = [isCorrect ? "correct" : "", isWrong ? "wrong" : "", selected && !isCorrect && !isWrong ? "selected" : ""].filter(Boolean).join(" ");
        return `<button class="choice-button ${classes}" data-choice="${escapeHTML(label)}" aria-pressed="${selected}" ${locked ? "disabled" : ""}><span class="choice-key">${index + 1}</span><span>${escapeHTML(label)}</span>${isCorrect || isWrong ? `<span class="choice-state">${icon(isCorrect ? "check" : "x")}</span>` : ""}</button>`;
      }).join("");
      const listening = exercise.type === "listen"
        ? `<div class="listen-stage"><button class="listen-button ${speakingText === personalize(exercise.audio) ? "speaking" : ""}" data-action="speak" data-say="${escapeHTML(personalize(exercise.audio))}" aria-label="Écouter le mot anglais">${icon("volume")}</button><p>Appuie pour écouter</p></div>`
        : "";
      return `${listening}<div class="choice-grid">${options}</div>`;
    }

    if (exercise.type === "dialogue") {
      const locked = session.status === "correct" || session.status === "wrong";
      const expected = personalize(exercise.answer);
      const history = (exercise.history || []).map((line) => `
        <div class="chat-bubble ${line.learner ? "learner" : "partner"}"><small>${escapeHTML(line.learner ? state.learnerName || profileConfig().name : line.speaker)}</small><p>${escapeHTML(personalize(line.en))}</p></div>`).join("");
      const options = exercise.options.map((option, index) => {
        const label = personalize(option);
        const isCorrect = locked && label === expected;
        const isWrong = session.status === "wrong" && session.lastWrong === label;
        const selected = session.selected === label;
        const classes = [isCorrect ? "correct" : "", isWrong ? "wrong" : "", selected && !isCorrect && !isWrong ? "selected" : ""].filter(Boolean).join(" ");
        return `<button class="choice-button ${classes}" data-choice="${escapeHTML(label)}" aria-pressed="${selected}" ${locked ? "disabled" : ""}><span class="choice-key">${index + 1}</span><span>${escapeHTML(label)}</span>${isCorrect || isWrong ? `<span class="choice-state">${icon(isCorrect ? "check" : "x")}</span>` : ""}</button>`;
      }).join("");
      return `
        <div class="dialogue-card">
          <div class="chat-context">${icon("message")}${escapeHTML(personalize(exercise.context))}</div>
          <div class="chat-history">${history}</div>
          <div class="chat-bubble partner current"><small>${escapeHTML(exercise.speaker)}</small><p>${escapeHTML(personalize(exercise.text))}</p><button class="chat-audio-button ${speakingText === personalize(exercise.text) ? "speaking" : ""}" data-action="speak" data-say="${escapeHTML(personalize(exercise.text))}" aria-label="Écouter le message">${icon("volume")}</button></div>
          <details class="chat-translation"><summary>Un indice en français</summary><p>${escapeHTML(personalize(exercise.translation))}</p></details>
          <div class="choice-grid dialogue-options">${options}</div>
        </div>`;
    }

    if (exercise.type === "repeat") {
      const locked = session.status === "correct" || session.status === "wrong";
      return `
        <div class="repeat-card">
          <button class="listen-button ${speakingText === personalize(exercise.audio) ? "speaking" : ""}" data-action="speak" data-say="${escapeHTML(personalize(exercise.audio))}" aria-label="Écouter la phrase anglaise">${icon("volume")}</button>
          <strong>${escapeHTML(personalize(exercise.text))}</strong>
          <p>${escapeHTML(personalize(exercise.translation))}</p>
          <button class="button button-primary" data-action="finish-repeat" ${locked ? "disabled" : ""}>J’ai répété à voix haute${icon("check")}</button>
        </div>`;
    }

    if (exercise.type === "type") {
      const locked = session.status === "correct" || session.status === "wrong";
      const stateClass = session.status === "correct" ? "correct" : session.status === "wrong" ? "wrong" : "";
      return `
        <form class="type-form" id="type-form">
          <label class="field-label" for="english-answer">Ta réponse en anglais</label>
          <input class="text-answer ${stateClass}" id="english-answer" name="answer" type="text" value="${escapeHTML(session.typeValue)}" placeholder="Écris le mot ici…" autocomplete="off" autocapitalize="off" spellcheck="false" ${locked ? "disabled" : ""} aria-describedby="type-help">
          <span id="type-help" class="settings-note">Les majuscules ne sont pas obligatoires.</span>
          ${locked ? "" : `<button class="button button-primary" type="submit">VALIDER${icon("arrow-right")}</button>`}
        </form>`;
    }

    if (exercise.type === "build") {
      const locked = session.status === "correct" || session.status === "wrong";
      const selectedTokens = session.selectedTokenIds.map((id) => personalize(exercise.tokens[id]));
      const selectedButtons = selectedTokens.length > 0
        ? selectedTokens.map((token, index) => `<button class="word-token selected ${session.status === "correct" ? "correct" : session.status === "wrong" ? "wrong" : ""}" data-action="remove-word" data-token-index="${session.selectedTokenIds[index]}" ${locked ? "disabled" : ""} aria-label="Retirer ${escapeHTML(token)}">${escapeHTML(token)}</button>`).join("")
        : `<span class="sentence-placeholder">Les mots de ta phrase apparaîtront ici</span>`;
      const bank = exercise.tokens.map((token, index) => {
        const used = session.selectedTokenIds.includes(index);
        return `<button class="word-token ${used ? "used" : ""}" data-action="select-word" data-token-index="${index}" ${used || locked ? "disabled" : ""}>${escapeHTML(personalize(token))}</button>`;
      }).join("");
      return `
        <div class="sentence-dropzone" aria-label="Ta phrase">${selectedButtons}</div>
        <div class="word-bank" aria-label="Mots disponibles">${bank}</div>
        <div class="build-tools"><button class="text-button" data-action="undo-word" ${!session.selectedTokenIds.length || locked ? "disabled" : ""}>${icon("arrow-left")}Annuler</button><button class="text-button" data-action="clear-words" ${!session.selectedTokenIds.length || locked ? "disabled" : ""}>${icon("x")}Effacer</button></div>`;
    }

    if (exercise.type === "match") {
      const locked = session.status === "correct" || session.status === "wrong";
      const left = exercise.pairs.map((id) => {
        const matched = session.matched.includes(id);
        return `<button class="match-button ${matched ? "matched" : ""} ${session.matchSelected === id ? "selected" : ""} ${session.matchWrong?.includes(id) ? "match-wrong" : ""}" data-action="select-match-left" data-word-id="${id}" ${matched || locked ? "disabled" : ""}>${escapeHTML(personalize(wordById.get(id).en))}</button>`;
      }).join("");
      const right = session.matchRight.map((id) => {
        const matched = session.matched.includes(id);
        return `<button class="match-button ${matched ? "matched" : ""} ${session.matchWrong?.includes(id) ? "match-wrong" : ""}" data-action="select-match-right" data-word-id="${id}" ${matched || locked ? "disabled" : ""}>${escapeHTML(personalize(wordById.get(id).fr))}</button>`;
      }).join("");
      return `<div class="match-grid"><div class="match-column" aria-label="Mots anglais">${left}</div><div class="match-column" aria-label="Traductions françaises">${right}</div></div>`;
    }

    return "";
  }

  function successCelebration(exercise) {
    const profile = profileConfig();
    let hash = 0;
    for (const character of exercise.id) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    const variant = profile.animations[(hash + session.correctFirstTry) % profile.animations.length];
    const positions = [
      [-54, -34], [-30, -58], [4, -66], [42, -52], [62, -22], [54, 22], [-58, 18], [-38, 48]
    ];
    const pieces = positions.map(([x, y], index) => `<span class="success-piece" style="--x:${x}px;--y:${y}px;--r:${index * 47}deg;--d:${index * 35}ms"></span>`).join("");
    return `<div class="success-celebration ${variant}" aria-hidden="true">${pieces}</div>`;
  }

  function successCharacter() {
    const profile = profileConfig();
    const drawing = profile.id === "clement"
      ? `<svg viewBox="0 0 120 120" focusable="false">
          <ellipse cx="60" cy="110" rx="29" ry="5" fill="#2f6fae" opacity=".16"/>
          <g class="strong-body">
            <path d="M49 80 45 103" stroke="#f3b58f" stroke-width="12" stroke-linecap="round"/>
            <path d="M71 80 75 103" stroke="#f3b58f" stroke-width="12" stroke-linecap="round"/>
            <path d="M36 104h15v7H36zM69 104h15v7H69z" fill="#214d79"/>
            <g class="flex-arm flex-arm-left">
              <path d="m44 54-16-9M28 45 23 29" fill="none" stroke="#f3b58f" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
              <circle class="bicep" cx="29" cy="44" r="9" fill="#f3b58f"/>
              <circle cx="23" cy="26" r="7" fill="#f3b58f"/>
              <path d="m19 23-5-7m9 5-1-9m4 11 4-7" stroke="#f3b58f" stroke-width="5" stroke-linecap="round"/>
            </g>
            <g class="flex-arm flex-arm-right">
              <path d="m76 54 16-9M92 45l5-16" fill="none" stroke="#f3b58f" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
              <circle class="bicep" cx="91" cy="44" r="9" fill="#f3b58f"/>
              <circle cx="97" cy="26" r="7" fill="#f3b58f"/>
              <path d="m101 23 5-7m-9 5 1-9m-4 11-4-7" stroke="#f3b58f" stroke-width="5" stroke-linecap="round"/>
            </g>
            <path d="M43 51q17-9 34 0l-5 31q-12 7-24 0Z" fill="#4a90e2"/>
            <path d="M49 52q11 9 22 0" fill="none" stroke="#dceeff" stroke-width="4"/>
            <path d="m47 79 26 1-2 15H49Z" fill="#24517d"/>
            <path d="M47 94h10m6 0h10" stroke="#dceeff" stroke-width="3" stroke-linecap="round"/>
            <circle cx="60" cy="28" r="15" fill="#f3b58f"/>
            <path d="M45 27q0-17 16-17 15 1 15 15-8-6-13-10-5 7-18 12Z" fill="#44342d"/>
            <path d="M50 30h5m10 0h5" stroke="#44342d" stroke-width="3" stroke-linecap="round"/>
            <circle cx="53" cy="32" r="1.8" fill="#263445"/><circle cx="67" cy="32" r="1.8" fill="#263445"/>
            <path d="M55 38q5 5 10 0" fill="none" stroke="#9c543e" stroke-width="2.5" stroke-linecap="round"/>
          </g>
        </svg>`
      : `<svg viewBox="0 0 120 120" focusable="false">
          <ellipse cx="60" cy="110" rx="30" ry="5" fill="#b94f7b" opacity=".16"/>
          <g class="princess-body">
            <path d="M53 94v11m14-11v11" stroke="#f3c5ad" stroke-width="7" stroke-linecap="round"/>
            <path d="M48 105h12m0 0h12" stroke="#a94c7d" stroke-width="5" stroke-linecap="round"/>
            <g class="princess-skirt">
              <path d="M48 50h24l17 47q-29 12-58 0Z" fill="#e978a5"/>
              <path d="M45 77q15 9 30 0l10 20q-25 10-50 0Z" fill="#f7b7d1"/>
              <path d="m49 54-11 42m33-42 11 42" stroke="#fff0f6" stroke-width="3" opacity=".65"/>
            </g>
            <path d="M48 44q12-8 24 0l-2 17q-10 7-20 0Z" fill="#f7b7d1"/>
            <path d="M47 46 35 64m38-18 12 18" fill="none" stroke="#f3c5ad" stroke-width="8" stroke-linecap="round"/>
            <circle cx="34" cy="66" r="5" fill="#f3c5ad"/><circle cx="86" cy="66" r="5" fill="#f3c5ad"/>
            <circle cx="60" cy="26" r="16" fill="#f3c5ad"/>
            <path d="M43 30q-3-20 17-21 21 0 18 22l-6-10q-12 7-29 3Z" fill="#7d4b36"/>
            <path d="m45 21 5-13 10 9 10-9 5 13Z" fill="#ffd968" stroke="#dca82d" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="60" cy="13" r="3" fill="#e978a5"/>
            <circle cx="53" cy="28" r="1.8" fill="#47322f"/><circle cx="67" cy="28" r="1.8" fill="#47322f"/>
            <path d="M55 34q5 5 10 0" fill="none" stroke="#b45f73" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="47" cy="33" r="3" fill="#f3a5b6" opacity=".65"/><circle cx="73" cy="33" r="3" fill="#f3a5b6" opacity=".65"/>
            <path d="m60 43 3 5-3 5-3-5Z" fill="#fff4ba"/>
          </g>
        </svg>`;
    return `<div class="success-character ${profile.id}-character" aria-hidden="true">${drawing}</div>`;
  }

function renderFeedback(exercise) {
    if (session.status === "answering") return "";
    if (session.status === "wrong") {
      return `<div class="feedback-panel wrong" role="status"><span class="feedback-icon">${icon("x")}</span><div class="feedback-copy"><strong>Pas tout à fait !</strong><div class="answer-reveal">La bonne réponse : <span>${escapeHTML(personalize(correctAnswerText(exercise)))}</span></div><span class="auto-next-note">${icon("clock")}Suite dans 2 s</span></div></div>`;
    }
    const encouragement = ["Bravo !", "Excellent !", "Bien joué !"][Math.floor(Math.random() * 3)];
    return `<div class="feedback-panel correct" role="status">${successCharacter()}${successCelebration(exercise)}<span class="feedback-icon">${icon("check")}</span><div class="feedback-copy"><strong>${encouragement}${session.lastXp > 0 ? ` +${session.lastXp} XP` : ""}</strong><p>Ta réponse est enregistrée.</p><span class="auto-next-note">${icon("clock")}Suite dans 2 s</span></div></div>`;
  }

  function correctAnswerText(exercise) {
    if (Array.isArray(exercise.answer)) return exercise.answer.map(personalize).join(" ");
    if (exercise.type === "match") return exercise.pairs.map((id) => `${personalize(wordById.get(id).en)} = ${personalize(wordById.get(id).fr)}`).join(" · ");
    return personalize(exercise.answer);
  }

  function selectChoice(choice) {
    if (!session || session.status !== "answering") return;
    session.selected = choice;
    checkAnswer();
  }

  function recordWordResult(wordIds, result) {
    wordIds.forEach((id) => {
      if (!wordById.has(id)) return;
      if (!state.wordStats[id]) state.wordStats[id] = { correct: 0, wrong: 0, learning: 0 };
      if (result === "correct") state.wordStats[id].correct += 1;
      if (result === "wrong") state.wordStats[id].wrong += 1;
      if (result === "learning") state.wordStats[id].learning += 1;
    });
  }

  function markWrongExercise() {
    if (session.mode !== "lesson") return;
    const progress = getProgress(session.lesson);
    if (!progress.wrong.includes(session.index)) progress.wrong.push(session.index);
  }

  function completeCurrentExercise(result) {
    if (!session || session.completedCurrent) return;
    const exercise = session.exercises[session.index];
    session.completedCurrent = true;

    let xp = 0;
    if (session.mode === "review") {
      xp = result === "correct" ? 2 : 0;
    } else {
      const progress = getProgress(session.lesson);
      const isNew = !progress.completed.includes(session.index);
      if (isNew) xp = result === "correct" ? 4 : 0;
      if (!progress.completed.includes(session.index)) progress.completed.push(session.index);
      progress.cursor = Math.min(session.index + 1, session.exercises.length);
      exercise.wordIds.forEach((id) => {
        if (!state.learnedWords.includes(id)) state.learnedWords.push(id);
      });
    }

    if (result === "correct") {
      recordWordResult(exercise.wordIds, "correct");
      session.correctFirstTry += 1;
    }

    session.lastXp = xp;
    session.earnedXp += xp;
    addXP(xp);

    if (session.mode === "lesson" && session.index === session.exercises.length - 1) finishLessonRecord();
    saveState();
    updateChrome();
    scheduleAutoAdvance();
  }

  function finishLessonRecord() {
    const progress = getProgress(session.lesson);
    if (progress.finished) return;
    progress.finished = true;
    progress.cursor = 0;
    const perfect = progress.wrong.length === 0 && progress.helped.length === 0;
    if (perfect) state.perfectLessons += 1;
    session.bonusXp = 20;
    session.earnedXp += session.bonusXp;
    addXP(session.bonusXp);
  }

  function handleWrongAttempt() {
    session.attempts += 1;
    recordWordResult(session.exercises[session.index].wordIds, "wrong");
    markWrongExercise();
    session.status = "wrong";
    completeCurrentExercise("wrong");
  }

  function checkAnswer() {
    if (!session || session.status !== "answering") return;
    const exercise = session.exercises[session.index];
    if (exercise.type === "choice" || exercise.type === "listen" || exercise.type === "dialogue") {
      if (session.selected === personalize(exercise.answer)) {
        session.status = "correct";
        session.lastWrong = null;
        completeCurrentExercise("correct");
      } else {
        session.lastWrong = session.selected;
        handleWrongAttempt();
      }
      renderExercise();
      return;
    }

    if (exercise.type === "build") {
      const answer = session.selectedTokenIds.map((index) => personalize(exercise.tokens[index]));
      if (answer.length === exercise.answer.length && answer.every((token, index) => token === personalize(exercise.answer[index]))) {
        session.status = "correct";
        completeCurrentExercise("correct");
      } else {
        handleWrongAttempt();
      }
      renderExercise();
    }
  }

  function normalizeAnswer(value) {
    return String(value).trim().toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ");
  }

  function checkTypedAnswer() {
    if (!session || session.status !== "answering") return;
    const exercise = session.exercises[session.index];
    const value = session.typeValue.trim();
    if (!value) {
      showToast("Écris ta réponse avant de vérifier.");
      return;
    }
    const accepted = [exercise.answer, ...(exercise.acceptedAnswers || [])].map(personalize).map(normalizeAnswer);
    if (accepted.includes(normalizeAnswer(value))) {
      session.status = "correct";
      completeCurrentExercise("correct");
    } else {
      handleWrongAttempt();
    }
    renderExercise();
  }

  function finishRepeat() {
    if (!session || session.status !== "answering" || session.exercises[session.index].type !== "repeat") return;
    session.status = "correct";
    completeCurrentExercise("correct");
    renderExercise();
  }

  function selectWord(index) {
    if (!session || session.status !== "answering") return;
    const exercise = session.exercises[session.index];
    if (!exercise.tokens[index] || session.selectedTokenIds.includes(index)) return;
    session.selectedTokenIds.push(index);
    if (session.selectedTokenIds.length === exercise.answer.length) checkAnswer();
    else renderExercise();
  }

  function removeWord(index) {
    if (!session || session.status !== "answering") return;
    session.selectedTokenIds = session.selectedTokenIds.filter((tokenIndex) => tokenIndex !== index);
    renderExercise();
  }

  function selectMatchLeft(id) {
    if (!session || session.status !== "answering") return;
    session.matchSelected = id;
    session.matchWrong = null;
    renderExercise();
  }

  function selectMatchRight(id) {
    if (!session || session.status !== "answering") return;
    if (!session.matchSelected) {
      showToast("Choisis d’abord un mot anglais à gauche.");
      return;
    }
    if (session.matchSelected === id) {
      if (!session.matched.includes(id)) session.matched.push(id);
      session.matchSelected = null;
      session.matchWrong = null;
      if (session.matched.length === session.exercises[session.index].pairs.length) {
        session.status = "correct";
        completeCurrentExercise("correct");
      }
      renderExercise();
      return;
    }
    session.matchWrong = [session.matchSelected, id];
    session.matchSelected = null;
    handleWrongAttempt();
    renderExercise();
  }

  function clearAutoAdvance() {
    if (!session?.autoAdvanceTimer) return;
    clearTimeout(session.autoAdvanceTimer);
    session.autoAdvanceTimer = null;
  }

  function scheduleAutoAdvance() {
    clearAutoAdvance();
    if (!session || session.completionShown || !["correct", "wrong"].includes(session.status)) return;
    session.autoAdvanceTimer = setTimeout(() => {
      session.autoAdvanceTimer = null;
      if (session && ["correct", "wrong"].includes(session.status)) nextExercise();
    }, 2000);
  }

  function nextExercise() {
    if (!session || !["correct", "wrong"].includes(session.status)) return;
    clearAutoAdvance();
    if (session.index >= session.exercises.length - 1) {
      showCompletion();
      return;
    }
    session.index += 1;
    resetExercise();
    if (session.mode === "lesson") {
      const progress = getProgress(session.lesson);
      progress.cursor = session.index;
      saveState();
    }
    renderLesson(true);
    window.scrollTo({ top: 0, behavior: state.settings.reduceMotion ? "auto" : "smooth" });
  }

  let speakingText = null;

  function speak(text) {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showToast("La lecture audio n’est pas disponible dans ce navigateur.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.82;
    utterance.pitch = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find((voice) => voice.lang === "en-US") || voices.find((voice) => voice.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;
    speakingText = text;
    utterance.onend = () => {
      speakingText = null;
      document.querySelectorAll(".listen-button, .chat-audio-button").forEach((button) => button.classList.remove("speaking"));
    };
    utterance.onerror = () => {
      speakingText = null;
      document.querySelectorAll(".listen-button, .chat-audio-button").forEach((button) => button.classList.remove("speaking"));
    };
    document.querySelectorAll(".listen-button, .chat-audio-button").forEach((button) => button.classList.toggle("speaking", button.dataset.say === text));
    window.speechSynthesis.speak(utterance);
  }

  function showCompletion() {
    if (!session) return;
    clearAutoAdvance();
    session.completionShown = true;
    const review = session.mode === "review";
    const progress = review ? null : getProgress(session.lesson);
    const perfect = !review && progress.wrong.length === 0 && progress.helped.length === 0;
    const subtitle = review
      ? "Tu viens de faire travailler ta mémoire. Continue comme ça !"
      : perfect
        ? "Une leçon entière sans erreur. Bravo, c’est une belle réussite !"
        : "Chaque exercice te fait progresser. Tu peux revoir la leçon quand tu veux.";

    showModal(`
      <div class="completion">
        <div class="completion-art">${icon(review ? "repeat" : "trophy")}</div>
        <p class="modal-eyebrow">${review ? "Révision express" : `Leçon ${session.lesson.number}`}</p>
        <h2 id="modal-title">${review ? "Révision terminée !" : "Leçon terminée !"}</h2>
        <p>${subtitle}</p>
        <div class="completion-stats">
          <div class="completion-stat"><strong>+${session.earnedXp}</strong><span>XP GAGNÉS</span></div>
          <div class="completion-stat"><strong>${session.correctFirstTry}/${session.exercises.length}</strong><span>DU PREMIER COUP</span></div>
          <div class="completion-stat"><strong>${state.streak}</strong><span>JOUR${state.streak > 1 ? "S" : ""} DE SÉRIE</span></div>
        </div>
        <div class="modal-footer"><button class="button button-secondary" data-action="completion-review">${icon("repeat")}Réviser mes mots</button><button class="button button-primary" data-action="completion-home">Retour au parcours${icon("arrow-right")}</button></div>
      </div>`);
    launchConfetti();
  }

  function launchConfetti() {
    clearTimeout(confettiTimer);
    const colors = ["#58c83f", "#ffc84a", "#9568dc", "#4a90e2", "#e978a5", "#f3a044"];
    confettiLayer.innerHTML = Array.from({ length: 55 }, () => {
      const left = Math.random() * 100;
      const size = 6 + Math.random() * 8;
      const duration = 2.4 + Math.random() * 1.6;
      const delay = Math.random() * 0.7;
      const drift = -90 + Math.random() * 180;
      const rotation = 240 + Math.random() * 720;
      const color = colors[Math.floor(Math.random() * colors.length)];
      return `<span class="confetti-piece" style="--left:${left}%;--size:${size}px;--duration:${duration}s;--delay:${delay}s;--drift:${drift}px;--rotation:${rotation}deg;--color:${color}"></span>`;
    }).join("");
    confettiTimer = setTimeout(() => { confettiLayer.innerHTML = ""; }, 4800);
  }

  function showModal(content) {
    if (session && !session.completionShown) clearAutoAdvance();
    if (!modal.open) modalReturnFocus = document.activeElement;
    modalContent.innerHTML = content;
    if (!modal.open) modal.showModal();
  }

  function closeModal() {
    if (modal.open) modal.close();
    if (session?.completionShown) {
      navigate("learn");
      return;
    }
    if (session && ["correct", "wrong"].includes(session.status)) scheduleAutoAdvance();
  }

  function openProfilePicker(initial = false) {
    const cards = PROFILES.map((profile) => {
      const progress = profileStore.profiles[profile.id];
      const finished = completedLessonCountFor(progress);
      const active = profile.id === profileStore.activeProfileId;
      return `
        <button class="profile-choice profile-${profile.id} ${active ? "selected" : ""}" data-action="select-profile" data-profile-id="${profile.id}" aria-pressed="${active}">
          <span class="profile-choice-avatar">${profile.avatar}</span>
          <span class="profile-choice-copy"><strong>${profile.name}</strong><small>${profile.role}</small><span>${finished} leçon${finished > 1 ? "s" : ""} · ${progress.xp} XP</span></span>
          ${icon(active ? "check" : "arrow-right")}
        </button>`;
    }).join("");
    showModal(`
      <p class="modal-eyebrow">${icon("users")}Deux aventures séparées</p>
      <h2 id="modal-title">${initial ? "Qui apprend aujourd’hui ?" : "Choisis ton profil"}</h2>
      <p class="modal-intro">Eva et Clément ont chacun leurs leçons, leurs XP et leurs badges. Leur progression reste séparée.</p>
      <div class="profile-picker">${cards}</div>`);
  }

  function switchProfile(id) {
    const profile = PROFILES.find((item) => item.id === id);
    if (!profile) return;
    clearAutoAdvance();
    session = null;
    view = "learn";
    profileStore.activeProfileId = id;
    profileStore.needsChoice = false;
    state = profileStore.profiles[id];
    saveState();
    closeModal();
    updateChrome();
    renderView();
    showToast(`Aventure de ${state.learnerName || profile.name} ouverte.`);
  }

  function openSettings() {
    const goals = [10, 20, 30, 40].map((goal) => `<button type="button" class="goal-option ${state.settings.dailyGoal === goal ? "selected" : ""}" data-action="choose-goal" data-value="${goal}" aria-pressed="${state.settings.dailyGoal === goal}">${goal} XP</button>`).join("");
    showModal(`
      <p class="modal-eyebrow">${icon("settings")}Espace parents</p>
      <h2 id="modal-title">Les réglages de l’aventure</h2>
      <p class="modal-intro">La progression reste dans ce navigateur. Tu peux aussi l’exporter pour la conserver ou la transférer.</p>
      <form id="settings-form">
        <section class="settings-section">
          <h3>Le petit profil</h3>
          <label class="field-label" for="learner-name">Prénom de l’enfant</label>
          <input class="settings-input" id="learner-name" name="learnerName" type="text" maxlength="24" value="${escapeHTML(state.learnerName)}" placeholder="Ex. Camille" autocomplete="off">
          <button type="button" class="text-button profile-switch-link" data-action="switch-profile">${icon("users")}Changer entre Eva et Clément</button>
        </section>
        <section class="settings-section">
          <h3>Objectif quotidien</h3>
          <p class="settings-note" style="margin: 0 0 12px;">Un objectif modeste aide à apprendre régulièrement.</p>
          <div class="goal-options">${goals}</div>
          <input type="hidden" id="daily-goal-input" name="dailyGoal" value="${state.settings.dailyGoal}">
        </section>
        <section class="settings-section">
          <div class="setting-row"><div><strong>Réduire les animations</strong><p>Pour une expérience plus calme.</p></div><label class="switch"><input type="checkbox" name="reduceMotion" ${state.settings.reduceMotion ? "checked" : ""} aria-label="Réduire les animations"><span class="switch-track"></span></label></div>
        </section>
        <section class="settings-section">
          <h3>Sauvegarder la progression</h3>
          <div class="settings-actions"><button type="button" class="button button-secondary button-small" data-action="export-progress">${icon("download")}Exporter</button><button type="button" class="button button-secondary button-small" data-action="import-progress">${icon("upload")}Importer</button></div>
          <input id="import-file" type="file" accept=".json,application/json" hidden>
          <p class="settings-note">Le fichier exporté contient la progression du profil ouvert : prénom, XP et leçons terminées. Aucune donnée n’est envoyée à un serveur.</p>
        </section>
        <section class="settings-section danger-zone"><div><strong>Recommencer à zéro</strong><p>Le prénom et les réglages seront conservés.</p></div><button type="button" class="button button-danger button-small" data-action="reset-progress">${icon("trash")}Effacer</button></section>
        <div class="modal-footer"><button type="button" class="button button-secondary" data-action="close-modal">Annuler</button><button type="submit" class="button button-primary">Enregistrer${icon("check")}</button></div>
      </form>`);
  }

  function saveSettings(form) {
    const formData = new FormData(form);
    state.learnerName = String(formData.get("learnerName") || "").trim().slice(0, 24) || profileConfig().name;
    state.settings.dailyGoal = [10, 20, 30, 40].includes(Number(formData.get("dailyGoal"))) ? Number(formData.get("dailyGoal")) : 20;
    state.settings.reduceMotion = formData.get("reduceMotion") === "on";
    saveState();
    closeModal();
    renderView();
    showToast("Les réglages sont enregistrés.");
  }

  function exportProgress() {
    const payload = {
      app: "Minilingo",
      version: 2,
      profileId: profileStore.activeProfileId,
      exportedAt: new Date().toISOString(),
      progress: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `minilingo-progression-${dateKey()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Ta progression a été exportée.");
  }

  async function importProgress(file) {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      showToast("Ce fichier est trop volumineux pour être une progression Minilingo.");
      return;
    }
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || parsed.app !== "Minilingo" || !parsed.progress) throw new Error("Format invalide");
      pendingImport = {
        profileId: PROFILES.some((profile) => profile.id === parsed.profileId) ? parsed.profileId : profileStore.activeProfileId,
        state: normalizeState(parsed.progress)
      };
      const finished = completedLessonCountFor(pendingImport.state);
      const profileName = PROFILES.find((profile) => profile.id === pendingImport.profileId)?.name || state.learnerName;
      showModal(`
        <div class="confirm-box">
          <div class="confirm-icon">${icon("upload")}</div>
          <h2 id="modal-title">Importer cette progression ?</h2>
          <p>Le fichier contient ${pendingImport.state.xp} XP et ${finished} leçon${finished > 1 ? "s" : ""} terminée${finished > 1 ? "s" : ""} pour ${escapeHTML(profileName)}. Elle remplacera ce profil dans ce navigateur.</p>
          <div class="modal-footer"><button class="button button-secondary" data-action="close-modal">Annuler</button><button class="button button-primary" data-action="confirm-import">${icon("upload")}Importer</button></div>
        </div>`);
    } catch (error) {
      showToast("Ce fichier n’est pas une sauvegarde Minilingo valide.");
    }
  }

  function completedLessonCountFor(progressState) {
    return lessons.filter((lesson) => progressState.lessonProgress[lesson.id]?.finished).length;
  }

  function confirmImport() {
    if (!pendingImport) return;
    profileStore.activeProfileId = pendingImport.profileId;
    profileStore.profiles[pendingImport.profileId] = pendingImport.state;
    state = pendingImport.state;
    pendingImport = null;
    saveState();
    closeModal();
    navigate("learn");
    showToast("Ta progression a bien été importée.");
  }

  function confirmReset() {
    showModal(`
      <div class="confirm-box">
        <div class="confirm-icon">${icon("trash")}</div>
        <h2 id="modal-title">Tout recommencer ?</h2>
        <p>Les XP, les badges et les leçons terminées seront effacés. Cette action est définitive, sauf si tu as exporté une sauvegarde.</p>
        <div class="modal-footer"><button class="button button-secondary" data-action="settings">Annuler</button><button class="button button-danger" data-action="confirm-reset">${icon("trash")}Effacer la progression</button></div>
      </div>`);
  }

  function resetProgress() {
    const learnerName = state.learnerName;
    const settings = { ...state.settings };
    state = { ...defaultState(), learnerName, settings };
    profileStore.profiles[profileStore.activeProfileId] = state;
    saveState();
    closeModal();
    navigate("learn");
    showToast("Une nouvelle aventure peut commencer !");
  }

  function openQuitConfirmation(nextView = "learn") {
    pendingNavigation = nextView;
    const progress = session?.mode === "lesson" ? getProgress(session.lesson) : null;
    const message = progress && progress.completed.length > 0
      ? "Les exercices déjà terminés sont enregistrés. Tu reprendras au prochain exercice quand tu reviendras."
      : "Tu peux reprendre cette leçon plus tard, depuis ton parcours.";
    showModal(`
      <div class="confirm-box">
        <div class="confirm-icon" style="color: var(--blue); background: var(--blue-soft);">${icon("book")}</div>
        <h2 id="modal-title">Faire une petite pause ?</h2>
        <p>${message}</p>
        <div class="modal-footer"><button class="button button-primary" data-action="close-modal">Rester${icon("arrow-right")}</button><button class="button button-secondary" data-action="confirm-quit">Quitter et sauvegarder</button></div>
      </div>`);
  }

  function handleAction(action, element) {
    switch (action) {
      case "settings":
        openSettings();
        break;
      case "switch-profile":
        openProfilePicker();
        break;
      case "select-profile":
        switchProfile(element.dataset.profileId);
        break;
      case "close-modal":
        closeModal();
        break;
      case "start-next":
        if (completedLessonCount() === lessons.length) openReview(getLearnedWords());
        else openLesson(nextLesson().id);
        break;
      case "start-review":
        openReview(getLearnedWords());
        break;
      case "review-lesson": {
        const lesson = lessonById.get(element.dataset.lessonId);
        if (lesson) openReview(getLearnedWords(lesson), lesson);
        break;
      }
      case "quit-lesson":
        openQuitConfirmation("learn");
        break;
      case "confirm-quit":
        closeModal();
        navigate(pendingNavigation);
        break;
      case "speak":
        speak(element.dataset.say);
        break;
      case "finish-repeat":
        finishRepeat();
        break;
      case "select-word":
        selectWord(Number(element.dataset.tokenIndex));
        break;
      case "remove-word":
        removeWord(Number(element.dataset.tokenIndex));
        break;
      case "undo-word":
        if (session?.status !== "answering") return;
        if (session.selectedTokenIds.length) session.selectedTokenIds.pop();
        renderExercise();
        break;
      case "clear-words":
        if (session?.status !== "answering") return;
        session.selectedTokenIds = [];
        renderExercise();
        break;
      case "select-match-left":
        selectMatchLeft(element.dataset.wordId);
        break;
      case "select-match-right":
        selectMatchRight(element.dataset.wordId);
        break;
      case "next-exercise":
        nextExercise();
        break;
      case "completion-home":
        navigate("learn");
        break;
      case "completion-review":
        navigate("review");
        break;
      case "choose-goal": {
        const goal = Number(element.dataset.value);
        document.querySelectorAll(".goal-option").forEach((button) => {
          const selected = Number(button.dataset.value) === goal;
          button.classList.toggle("selected", selected);
          button.setAttribute("aria-pressed", String(selected));
        });
        document.getElementById("daily-goal-input").value = goal;
        break;
      }
      case "export-progress":
        exportProgress();
        break;
      case "import-progress":
        document.getElementById("import-file")?.click();
        break;
      case "reset-progress":
        confirmReset();
        break;
      case "confirm-reset":
        resetProgress();
        break;
      case "confirm-import":
        confirmImport();
        break;
      default:
        break;
    }
  }

  document.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      handleAction(actionElement.dataset.action, actionElement);
      return;
    }

    const navElement = event.target.closest("[data-nav]");
    if (navElement) {
      if (session) openQuitConfirmation(navElement.dataset.nav);
      else navigate(navElement.dataset.nav);
      return;
    }

    const lessonElement = event.target.closest("[data-lesson-id]");
    if (lessonElement && !lessonElement.disabled && !lessonElement.dataset.action) {
      openLesson(lessonElement.dataset.lessonId);
      return;
    }

    const choiceElement = event.target.closest("[data-choice]");
    if (choiceElement && !choiceElement.disabled) selectChoice(choiceElement.dataset.choice);
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "type-form") {
      event.preventDefault();
      checkTypedAnswer();
    }
    if (event.target.id === "settings-form") {
      event.preventDefault();
      saveSettings(event.target);
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.classList.contains("text-answer") && session) {
      session.typeValue = event.target.value;
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "import-file") {
      const file = event.target.files[0];
      event.target.value = "";
      importProgress(file);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.open || !session || event.target.matches("input, textarea, select")) return;
    if (["correct", "wrong"].includes(session.status) && event.key === "Enter") {
      event.preventDefault();
      nextExercise();
      return;
    }
    const exercise = session.exercises[session.index];
    if (["choice", "listen", "dialogue"].includes(exercise.type) && /^[1-4]$/.test(event.key)) {
      event.preventDefault();
      selectChoice(personalize(exercise.options[Number(event.key) - 1]));
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener("close", () => {
    if (modalReturnFocus?.isConnected) modalReturnFocus.focus({ preventScroll: true });
    modalReturnFocus = null;
  });

  hydrateStaticIcons();
  refreshStreak();
  updateNavigation();
  renderView();
  if (profileStore.needsChoice) openProfilePicker(true);
  if (!storageOK) {
    setTimeout(() => showToast("La sauvegarde automatique n’est pas disponible. Pense à exporter ta progression."), 500);
  }
})();
