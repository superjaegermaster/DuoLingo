window.MINILINGO_DATA = {
  lessons: [
    {
      id: "greetings",
      number: 1,
      title: "Bonjour !",
      subtitle: "Les salutations",
      description: "Dis bonjour, merci et au revoir en anglais.",
      icon: "message",
      color: "green",
      minutes: 3,
      xp: 40,
      words: [
        { id: "hello", en: "Hello", fr: "Bonjour", example: "Hello, my friend!", exampleFr: "Bonjour, mon ami !" },
        { id: "goodbye", en: "Goodbye", fr: "Au revoir", example: "Goodbye, see you tomorrow!", exampleFr: "Au revoir, à demain !" },
        { id: "please", en: "Please", fr: "S’il te plaît", example: "Water, please.", exampleFr: "De l’eau, s’il te plaît." },
        { id: "thank-you", en: "Thank you", fr: "Merci", example: "Thank you very much!", exampleFr: "Merci beaucoup !" }
      ],
      exercises: [
        {
          id: "greetings-choice",
          type: "choice",
          skill: "Vocabulaire",
          prompt: "Comment dit-on « Bonjour » en anglais ?",
          helper: "Choisis le bon mot.",
          wordId: "hello",
          wordIds: ["hello"],
          options: ["Hello", "Goodbye", "Please", "Thank you"],
          answer: "Hello"
        },
        {
          id: "greetings-listen",
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quel mot viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: "Goodbye",
          wordId: "goodbye",
          wordIds: ["goodbye"],
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          answer: "Goodbye"
        },
        {
          id: "greetings-build",
          type: "build",
          skill: "Construire une phrase",
          prompt: "Forme la phrase « Merci beaucoup ».",
          helper: "Touche les mots dans le bon ordre.",
          wordIds: ["thank-you"],
          tokens: ["very", "Thank", "much", "you"],
          answer: ["Thank", "you", "very", "much"]
        },
        {
          id: "greetings-match",
          type: "match",
          skill: "Relier les mots",
          prompt: "Relie chaque mot anglais à sa traduction.",
          helper: "Choisis un mot à gauche, puis sa traduction à droite.",
          wordIds: ["hello", "goodbye", "please", "thank-you"],
          pairs: ["hello", "goodbye", "please", "thank-you"],
          answer: "all"
        },
        {
          id: "greetings-type",
          type: "type",
          skill: "À toi d’écrire",
          prompt: "Écris « S’il te plaît » en anglais.",
          helper: "Tape le mot, puis valide ta réponse.",
          wordId: "please",
          wordIds: ["please"],
          answer: "Please",
          acceptedAnswers: ["please"]
        }
      ]
    },
    {
      id: "family",
      number: 2,
      title: "Ma famille",
      subtitle: "Les personnes de la famille",
      description: "Présente les membres de ta famille.",
      icon: "users",
      color: "purple",
      minutes: 3,
      xp: 40,
      words: [
        { id: "mother", en: "Mother", fr: "Maman", example: "This is my mother.", exampleFr: "Voici ma maman." },
        { id: "father", en: "Father", fr: "Papa", example: "My father is kind.", exampleFr: "Mon papa est gentil." },
        { id: "sister", en: "Sister", fr: "Sœur", example: "I have a sister.", exampleFr: "J’ai une sœur." },
        { id: "brother", en: "Brother", fr: "Frère", example: "My brother is nine.", exampleFr: "Mon frère a neuf ans." }
      ],
      exercises: [
        {
          id: "family-choice",
          type: "choice",
          skill: "Vocabulaire",
          prompt: "Comment dit-on « Maman » en anglais ?",
          helper: "Choisis le bon mot.",
          wordId: "mother",
          wordIds: ["mother"],
          options: ["Sister", "Mother", "Father", "Brother"],
          answer: "Mother"
        },
        {
          id: "family-type",
          type: "type",
          skill: "À toi d’écrire",
          prompt: "Écris « Papa » en anglais.",
          helper: "Tape le mot, puis valide ta réponse.",
          wordId: "father",
          wordIds: ["father"],
          answer: "Father",
          acceptedAnswers: ["father", "dad", "daddy"]
        },
        {
          id: "family-build",
          type: "build",
          skill: "Construire une phrase",
          prompt: "Forme la phrase « J’ai une sœur ».",
          helper: "Touche les mots dans le bon ordre.",
          wordIds: ["sister"],
          tokens: ["sister", "I", "a", "have"],
          answer: ["I", "have", "a", "sister"]
        },
        {
          id: "family-listen",
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quel mot viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: "Brother",
          wordId: "brother",
          wordIds: ["brother"],
          options: ["Mother", "Sister", "Brother", "Father"],
          answer: "Brother"
        },
        {
          id: "family-reverse",
          type: "choice",
          skill: "Comprendre",
          prompt: "Que veut dire « Mother » ?",
          helper: "Choisis la bonne traduction.",
          wordId: "mother",
          wordIds: ["mother"],
          options: ["Papa", "Sœur", "Frère", "Maman"],
          answer: "Maman"
        }
      ]
    },
    {
      id: "school",
      number: 3,
      title: "À l’école",
      subtitle: "La classe et les fournitures",
      description: "Parle de ta classe et de tes affaires.",
      icon: "pencil",
      color: "blue",
      minutes: 3,
      xp: 40,
      words: [
        { id: "book", en: "Book", fr: "Livre", example: "I read a book.", exampleFr: "Je lis un livre." },
        { id: "pencil", en: "Pencil", fr: "Crayon", example: "This is my pencil.", exampleFr: "C’est mon crayon." },
        { id: "teacher", en: "Teacher", fr: "Professeur", example: "My teacher is nice.", exampleFr: "Mon professeur est sympa." },
        { id: "school", en: "School", fr: "École", example: "I go to school.", exampleFr: "Je vais à l’école." }
      ],
      exercises: [
        {
          id: "school-choice",
          type: "choice",
          skill: "Vocabulaire",
          prompt: "Comment dit-on « Livre » en anglais ?",
          helper: "Choisis le bon mot.",
          wordId: "book",
          wordIds: ["book"],
          options: ["Pencil", "School", "Book", "Teacher"],
          answer: "Book"
        },
        {
          id: "school-listen",
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quel mot viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: "School",
          wordId: "school",
          wordIds: ["school"],
          options: ["Book", "School", "Teacher", "Pencil"],
          answer: "School"
        },
        {
          id: "school-build",
          type: "build",
          skill: "Construire une phrase",
          prompt: "Forme la phrase « J’ai un crayon ».",
          helper: "Touche les mots dans le bon ordre.",
          wordIds: ["pencil"],
          tokens: ["pencil", "have", "I", "a"],
          answer: ["I", "have", "a", "pencil"]
        },
        {
          id: "school-match",
          type: "match",
          skill: "Relier les mots",
          prompt: "Relie chaque mot anglais à sa traduction.",
          helper: "Choisis un mot à gauche, puis sa traduction à droite.",
          wordIds: ["book", "pencil", "teacher", "school"],
          pairs: ["book", "pencil", "teacher", "school"],
          answer: "all"
        },
        {
          id: "school-type",
          type: "type",
          skill: "À toi d’écrire",
          prompt: "Écris « Professeur » en anglais.",
          helper: "Tape le mot, puis valide ta réponse.",
          wordId: "teacher",
          wordIds: ["teacher"],
          answer: "Teacher",
          acceptedAnswers: ["teacher", "professor", "prof"]
        }
      ]
    },
    {
      id: "animals",
      number: 4,
      title: "Mes animaux",
      subtitle: "Les animaux familiers",
      description: "Découvre le nom des animaux en anglais.",
      icon: "paw",
      color: "orange",
      minutes: 3,
      xp: 40,
      words: [
        { id: "cat", en: "Cat", fr: "Chat", example: "The cat is small.", exampleFr: "Le chat est petit." },
        { id: "dog", en: "Dog", fr: "Chien", example: "I like my dog.", exampleFr: "J’aime mon chien." },
        { id: "bird", en: "Bird", fr: "Oiseau", example: "The bird can sing.", exampleFr: "L’oiseau peut chanter." },
        { id: "fish", en: "Fish", fr: "Poisson", example: "The fish swims.", exampleFr: "Le poisson nage." }
      ],
      exercises: [
        {
          id: "animals-choice",
          type: "choice",
          skill: "Vocabulaire",
          prompt: "Comment dit-on « Chien » en anglais ?",
          helper: "Choisis le bon mot.",
          wordId: "dog",
          wordIds: ["dog"],
          options: ["Cat", "Bird", "Dog", "Fish"],
          answer: "Dog"
        },
        {
          id: "animals-type",
          type: "type",
          skill: "À toi d’écrire",
          prompt: "Écris « Chat » en anglais.",
          helper: "Tape le mot, puis valide ta réponse.",
          wordId: "cat",
          wordIds: ["cat"],
          answer: "Cat",
          acceptedAnswers: ["cat", "kitty"]
        },
        {
          id: "animals-build",
          type: "build",
          skill: "Construire une phrase",
          prompt: "Forme la phrase « L’oiseau est bleu ».",
          helper: "Touche les mots dans le bon ordre.",
          wordIds: ["bird"],
          tokens: ["blue", "The", "is", "bird"],
          answer: ["The", "bird", "is", "blue"]
        },
        {
          id: "animals-listen",
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quel mot viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: "Fish",
          wordId: "fish",
          wordIds: ["fish"],
          options: ["Dog", "Cat", "Bird", "Fish"],
          answer: "Fish"
        },
        {
          id: "animals-match",
          type: "match",
          skill: "Relier les mots",
          prompt: "Relie chaque mot anglais à sa traduction.",
          helper: "Choisis un mot à gauche, puis sa traduction à droite.",
          wordIds: ["cat", "dog", "bird", "fish"],
          pairs: ["cat", "dog", "bird", "fish"],
          answer: "all"
        }
      ]
    },
    {
      id: "colors",
      number: 5,
      title: "Les couleurs",
      subtitle: "Un monde de couleurs",
      description: "Nomme tes couleurs préférées en anglais.",
      icon: "palette",
      color: "pink",
      minutes: 3,
      xp: 40,
      words: [
        { id: "red", en: "Red", fr: "Rouge", example: "The apple is red.", exampleFr: "La pomme est rouge." },
        { id: "blue", en: "Blue", fr: "Bleu", example: "I like the blue sky.", exampleFr: "J’aime le ciel bleu." },
        { id: "green", en: "Green", fr: "Vert", example: "The grass is green.", exampleFr: "L’herbe est verte." },
        { id: "yellow", en: "Yellow", fr: "Jaune", example: "The sun is yellow.", exampleFr: "Le soleil est jaune." }
      ],
      exercises: [
        {
          id: "colors-choice",
          type: "choice",
          skill: "Vocabulaire",
          prompt: "Comment dit-on « Rouge » en anglais ?",
          helper: "Choisis le bon mot.",
          wordId: "red",
          wordIds: ["red"],
          options: ["Blue", "Green", "Red", "Yellow"],
          answer: "Red"
        },
        {
          id: "colors-listen",
          type: "listen",
          skill: "À l’oreille",
          prompt: "Quelle couleur viens-tu d’entendre ?",
          helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
          audio: "Yellow",
          wordId: "yellow",
          wordIds: ["yellow"],
          options: ["Green", "Yellow", "Red", "Blue"],
          answer: "Yellow"
        },
        {
          id: "colors-build",
          type: "build",
          skill: "Construire une phrase",
          prompt: "Forme la phrase « J’aime le vert ».",
          helper: "Touche les mots dans le bon ordre.",
          wordIds: ["green"],
          tokens: ["green", "I", "like", "the"],
          answer: ["I", "like", "green"]
        },
        {
          id: "colors-match",
          type: "match",
          skill: "Relier les mots",
          prompt: "Relie chaque couleur à sa traduction.",
          helper: "Choisis une couleur à gauche, puis sa traduction à droite.",
          wordIds: ["red", "blue", "green", "yellow"],
          pairs: ["red", "blue", "green", "yellow"],
          answer: "all"
        },
        {
          id: "colors-reverse",
          type: "choice",
          skill: "Comprendre",
          prompt: "Que veut dire « Blue » ?",
          helper: "Choisis la bonne traduction.",
          wordId: "blue",
          wordIds: ["blue"],
          options: ["Vert", "Jaune", "Rouge", "Bleu"],
          answer: "Bleu"
        }
      ]
    }
  ],
  badges: [
    { id: "first-step", title: "Premier pas", description: "Terminer ta première leçon", icon: "flag", color: "green", metric: "lessons", target: 1 },
    { id: "explorer", title: "Petite exploratrice", description: "Terminer 3 leçons", icon: "compass", color: "blue", metric: "lessons", target: 3 },
    { id: "perfect", title: "Sans faute", description: "Terminer une leçon sans erreur", icon: "star", color: "yellow", metric: "perfectLessons", target: 1 },
    { id: "streak-three", title: "Trois jours de suite", description: "Apprendre pendant 3 jours", icon: "flame", color: "orange", metric: "streak", target: 3 },
    { id: "xp-fifty", title: "Collectionneuse d’XP", description: "Gagner 50 points d’expérience", icon: "zap", color: "purple", metric: "xp", target: 50 },
    { id: "english-star", title: "Étoile de l’anglais", description: "Terminer toutes les leçons", icon: "trophy", color: "pink", metric: "lessons", target: 5 }
  ]
};
