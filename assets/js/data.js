const COURSE_UNITS = [
  { id: "essentials", number: 1, title: "Les essentiels", description: "Les premiers mots pour se présenter et découvrir le monde.", icon: "book", color: "green" },
  { id: "numbers-time", number: 2, title: "Les nombres et le temps", description: "Compter, nommer les jours et situer le temps.", icon: "clock", color: "blue" },
  { id: "home-city", number: 3, title: "La maison et la ville", description: "Décrire les pièces, les objets et les lieux du quotidien.", icon: "home", color: "purple" },
  { id: "food-shopping", number: 4, title: "La nourriture et les courses", description: "Parler des repas, des boissons et du marché.", icon: "sun", color: "orange" },
  { id: "body-health", number: 5, title: "Le corps, la santé et les vêtements", description: "Nommer le corps, les sentiments et les vêtements.", icon: "heart", color: "pink" },
  { id: "daily-actions", number: 6, title: "Les actions du quotidien", description: "Raconter ce que l’on fait à la maison et avec les autres.", icon: "play", color: "green" },
  { id: "transport-travel", number: 7, title: "Les transports et les voyages", description: "Se déplacer, demander son chemin et préparer un voyage.", icon: "compass", color: "blue" },
  { id: "nature-weather", number: 8, title: "Les animaux, la nature et la météo", description: "Explorer les animaux, les paysages et le temps qu’il fait.", icon: "paw", color: "orange" },
  { id: "sports-hobbies", number: 9, title: "Les sports, les loisirs et les arts", description: "Parler de ses jeux, de ses activités et de ses créations.", icon: "award", color: "purple" },
  { id: "school-jobs-tech", number: 10, title: "L’école, les métiers et le numérique", description: "Découvrir la classe, les professions et les objets connectés.", icon: "pencil", color: "pink" }
];

const COURSE_STAGES = [
  { id: "vocabulary", number: 1, title: "Des mots à comprendre", description: "On écoute, on reconnaît et on retient le vocabulaire." },
  { id: "phrases", number: 2, title: "Des petites phrases", description: "On assemble, on répète et on utilise les mots ensemble." },
  { id: "conversation", number: 3, title: "Des mini-conversations", description: "On répond à voix haute ou par écrit, avec des phrases de plus en plus libres." }
];

const EXTRA_LESSONS_A = [
  {
    unit: "numbers-time", id: "days-week-1", title: "Les jours de la semaine", subtitle: "Du lundi au jeudi", description: "Apprends à nommer les premiers jours de la semaine.",
    words: [
      { id: "monday", en: "Monday", fr: "Lundi", example: "Today is Monday.", exampleFr: "Aujourd’hui, c’est lundi." },
      { id: "tuesday", en: "Tuesday", fr: "Mardi", example: "I play on Tuesday.", exampleFr: "Je joue le mardi." },
      { id: "wednesday", en: "Wednesday", fr: "Mercredi", example: "We meet on Wednesday.", exampleFr: "Nous nous retrouvons le mercredi." },
      { id: "thursday", en: "Thursday", fr: "Jeudi", example: "My lesson is on Thursday.", exampleFr: "Mon cours est le jeudi." }
    ],
    sentence: { prompt: "Forme la phrase « Aujourd’hui, c’est mercredi ».", tokens: ["Wednesday", "Today", "is"], answer: ["Today", "is", "Wednesday"], wordIds: ["wednesday"] }
  },
  {
    unit: "numbers-time", id: "days-week-2", title: "Le week-end", subtitle: "Du vendredi au dimanche", description: "Parle du vendredi, du samedi et du dimanche.",
    words: [
      { id: "friday", en: "Friday", fr: "Vendredi", example: "We watch a film on Friday.", exampleFr: "Nous regardons un film le vendredi." },
      { id: "saturday", en: "Saturday", fr: "Samedi", example: "I visit my grandparents on Saturday.", exampleFr: "Je rends visite à mes grands-parents le samedi." },
      { id: "sunday", en: "Sunday", fr: "Dimanche", example: "Sunday is a quiet day.", exampleFr: "Le dimanche est un jour calme." },
      { id: "today", en: "Today", fr: "Aujourd’hui", example: "Today is a great day!", exampleFr: "Aujourd’hui est une belle journée !" }
    ],
    sentence: { prompt: "Forme la phrase « Je joue le samedi ».", tokens: ["on", "I", "Saturday", "play"], answer: ["I", "play", "on", "Saturday"], wordIds: ["saturday"] }
  },
  {
    unit: "numbers-time", id: "numbers-1-4", title: "Compter de 1 à 4", subtitle: "Les premiers nombres", description: "Reconnais et utilise les nombres un, deux, trois et quatre.",
    words: [
      { id: "one", en: "One", fr: "Un", example: "I have one apple.", exampleFr: "J’ai une pomme." },
      { id: "two", en: "Two", fr: "Deux", example: "I see two birds.", exampleFr: "Je vois deux oiseaux." },
      { id: "three", en: "Three", fr: "Trois", example: "There are three cats.", exampleFr: "Il y a trois chats." },
      { id: "four", en: "Four", fr: "Quatre", example: "I have four pencils.", exampleFr: "J’ai quatre crayons." }
    ],
    sentence: { prompt: "Forme la phrase « J’ai deux livres ».", tokens: ["two", "I", "books", "have"], answer: ["I", "have", "two", "books"], wordIds: ["two"] }
  },
  {
    unit: "numbers-time", id: "numbers-5-8", title: "Compter de 5 à 8", subtitle: "Encore des nombres", description: "Continue à compter avec cinq, six, sept et huit.",
    words: [
      { id: "five", en: "Five", fr: "Cinq", example: "I can count to five.", exampleFr: "Je peux compter jusqu’à cinq." },
      { id: "six", en: "Six", fr: "Six", example: "There are six chairs.", exampleFr: "Il y a six chaises." },
      { id: "seven", en: "Seven", fr: "Sept", example: "The week has seven days.", exampleFr: "La semaine a sept jours." },
      { id: "eight", en: "Eight", fr: "Huit", example: "A spider has eight legs.", exampleFr: "Une araignée a huit pattes." }
    ],
    sentence: { prompt: "Forme la phrase « Je vois sept chats ».", tokens: ["seven", "I", "cats", "see"], answer: ["I", "see", "seven", "cats"], wordIds: ["seven"] }
  },
  {
    unit: "numbers-time", id: "numbers-9-12", title: "Compter de 9 à 12", subtitle: "Les nombres jusqu’à douze", description: "Apprends neuf, dix, onze et douze.",
    words: [
      { id: "nine", en: "Nine", fr: "Neuf", example: "My brother is nine.", exampleFr: "Mon frère a neuf ans." },
      { id: "ten", en: "Ten", fr: "Dix", example: "I can count to ten.", exampleFr: "Je peux compter jusqu’à dix." },
      { id: "eleven", en: "Eleven", fr: "Onze", example: "The lesson starts at eleven.", exampleFr: "Le cours commence à onze heures." },
      { id: "twelve", en: "Twelve", fr: "Douze", example: "A year has twelve months.", exampleFr: "Une année a douze mois." }
    ],
    sentence: { prompt: "Forme la phrase « Il y a dix crayons ».", tokens: ["pencils", "There", "ten", "are"], answer: ["There", "are", "ten", "pencils"], wordIds: ["ten"] }
  },
  {
    unit: "home-city", id: "rooms", title: "Les pièces de la maison", subtitle: "À la maison", description: "Nomme la cuisine, la chambre, la salle de bains et le salon.",
    words: [
      { id: "kitchen", en: "Kitchen", fr: "Cuisine", example: "Mum is in the kitchen.", exampleFr: "Maman est dans la cuisine." },
      { id: "bedroom", en: "Bedroom", fr: "Chambre", example: "My bedroom is small.", exampleFr: "Ma chambre est petite." },
      { id: "bathroom", en: "Bathroom", fr: "Salle de bains", example: "The bathroom is clean.", exampleFr: "La salle de bains est propre." },
      { id: "living-room", en: "Living room", fr: "Salon", example: "We watch TV in the living room.", exampleFr: "Nous regardons la télévision dans le salon." }
    ],
    sentence: { prompt: "Forme la phrase « Le livre est dans la chambre ».", tokens: ["the", "bedroom", "book", "The", "in", "is", "kitchen"], answer: ["The", "book", "is", "in", "the", "bedroom"], wordIds: ["bedroom", "book"] },
    typeAccepts: ["living room", "living-room", "sitting room"]
  },
  {
    unit: "home-city", id: "furniture", title: "Les meubles", subtitle: "Les objets de la maison", description: "Découvre la table, la chaise, le lit et le canapé.",
    words: [
      { id: "table", en: "Table", fr: "Table", example: "The book is on the table.", exampleFr: "Le livre est sur la table." },
      { id: "chair", en: "Chair", fr: "Chaise", example: "Sit on this chair.", exampleFr: "Assieds-toi sur cette chaise." },
      { id: "bed", en: "Bed", fr: "Lit", example: "I make my bed.", exampleFr: "Je fais mon lit." },
      { id: "sofa", en: "Sofa", fr: "Canapé", example: "The cat sleeps on the sofa.", exampleFr: "Le chat dort sur le canapé." }
    ],
    sentence: { prompt: "Forme la phrase « Le chat est sur le canapé ».", tokens: ["on", "sofa", "The", "cat", "is", "the", "table"], answer: ["The", "cat", "is", "on", "the", "sofa"], wordIds: ["sofa", "cat"] },
    typeAccepts: ["sofa", "couch"]
  },
  {
    unit: "home-city", id: "house-details", title: "Les détails de la maison", subtitle: "Portes, fenêtres et jardin", description: "Parle de la porte, de la fenêtre, de la clé et du jardin.",
    words: [
      { id: "door", en: "Door", fr: "Porte", example: "Please close the door.", exampleFr: "Ferme la porte, s’il te plaît." },
      { id: "window", en: "Window", fr: "Fenêtre", example: "Open the window, please.", exampleFr: "Ouvre la fenêtre, s’il te plaît." },
      { id: "key", en: "Key", fr: "Clé", example: "This is the house key.", exampleFr: "C’est la clé de la maison." },
      { id: "garden", en: "Garden", fr: "Jardin", example: "We play in the garden.", exampleFr: "Nous jouons dans le jardin." }
    ],
    sentence: { prompt: "Forme la phrase « La clé est près de la porte ».", tokens: ["near", "door", "The", "key", "is", "the", "window"], answer: ["The", "key", "is", "near", "the", "door"], wordIds: ["key", "door"] }
  },
  {
    unit: "home-city", id: "city-places", title: "Les lieux en ville", subtitle: "Se promener", description: "Reconnais la rue, le magasin, le parc et le pont.",
    words: [
      { id: "street", en: "Street", fr: "Rue", example: "Our house is in a quiet street.", exampleFr: "Notre maison est dans une rue calme." },
      { id: "shop", en: "Shop", fr: "Magasin", example: "The shop opens at nine.", exampleFr: "Le magasin ouvre à neuf heures." },
      { id: "park", en: "Park", fr: "Parc", example: "I ride my bike in the park.", exampleFr: "Je fais du vélo dans le parc." },
      { id: "bridge", en: "Bridge", fr: "Pont", example: "We cross the bridge.", exampleFr: "Nous traversons le pont." }
    ],
    sentence: { prompt: "Forme la phrase « Nous marchons dans le parc ».", tokens: ["in", "park", "We", "the", "walk", "shop"], answer: ["We", "walk", "in", "the", "park"], wordIds: ["park"] }
  },
  {
    unit: "home-city", id: "city-services", title: "Les lieux utiles", subtitle: "En ville", description: "Apprends les noms de l’hôpital, de la bibliothèque, de la boulangerie et de la gare.",
    words: [
      { id: "hospital", en: "Hospital", fr: "Hôpital", example: "The hospital is near the park.", exampleFr: "L’hôpital est près du parc." },
      { id: "library", en: "Library", fr: "Bibliothèque", example: "I borrow books at the library.", exampleFr: "J’emprunte des livres à la bibliothèque." },
      { id: "bakery", en: "Bakery", fr: "Boulangerie", example: "We buy bread at the bakery.", exampleFr: "Nous achetons du pain à la boulangerie." },
      { id: "station", en: "Station", fr: "Gare", example: "The train leaves the station.", exampleFr: "Le train quitte la gare." }
    ],
    sentence: { prompt: "Forme la phrase « Je vais à la bibliothèque ».", tokens: ["library", "I", "the", "to", "go", "hospital"], answer: ["I", "go", "to", "the", "library"], wordIds: ["library"] },
    typeAccepts: ["station", "train station"]
  },
  {
    unit: "food-shopping", id: "fruit", title: "Les fruits", subtitle: "Un goût sucré", description: "Nomme la pomme, la banane, l’orange et la fraise.",
    words: [
      { id: "apple", en: "Apple", fr: "Pomme", example: "I eat an apple every day.", exampleFr: "Je mange une pomme chaque jour." },
      { id: "banana", en: "Banana", fr: "Banane", example: "This banana is yellow.", exampleFr: "Cette banane est jaune." },
      { id: "orange", en: "Orange", fr: "Orange", example: "The orange is sweet.", exampleFr: "L’orange est sucrée." },
      { id: "strawberry", en: "Strawberry", fr: "Fraise", example: "I like strawberries with cream.", exampleFr: "J’aime les fraises avec de la crème." }
    ],
    sentence: { prompt: "Forme la phrase « J’aime les pommes ».", tokens: ["apples", "like", "I", "banana"], answer: ["I", "like", "apples"], wordIds: ["apple"] }
  },
  {
    unit: "food-shopping", id: "vegetables", title: "Les légumes", subtitle: "Dans le potager", description: "Découvre la carotte, la pomme de terre, la tomate et la laitue.",
    words: [
      { id: "carrot", en: "Carrot", fr: "Carotte", example: "The rabbit eats a carrot.", exampleFr: "Le lapin mange une carotte." },
      { id: "potato", en: "Potato", fr: "Pomme de terre", example: "We have potatoes for dinner.", exampleFr: "Nous avons des pommes de terre pour le dîner." },
      { id: "tomato", en: "Tomato", fr: "Tomate", example: "The tomato is red.", exampleFr: "La tomate est rouge." },
      { id: "lettuce", en: "Lettuce", fr: "Laitue", example: "I put lettuce in my salad.", exampleFr: "Je mets de la laitue dans ma salade." }
    ],
    sentence: { prompt: "Forme la phrase « La tomate est rouge ».", tokens: ["red", "tomato", "is", "The", "carrot"], answer: ["The", "tomato", "is", "red"], wordIds: ["tomato", "red"] }
  },
  {
    unit: "food-shopping", id: "breakfast-foods", title: "Au petit-déjeuner", subtitle: "Les aliments de base", description: "Parle du pain, du riz, de l’œuf et du fromage.",
    words: [
      { id: "bread", en: "Bread", fr: "Pain", example: "I eat bread for breakfast.", exampleFr: "Je mange du pain au petit-déjeuner." },
      { id: "rice", en: "Rice", fr: "Riz", example: "We eat rice with vegetables.", exampleFr: "Nous mangeons du riz avec des légumes." },
      { id: "egg", en: "Egg", fr: "Œuf", example: "The egg is in the box.", exampleFr: "L’œuf est dans la boîte." },
      { id: "cheese", en: "Cheese", fr: "Fromage", example: "I like cheese in my sandwich.", exampleFr: "J’aime le fromage dans mon sandwich." }
    ],
    sentence: { prompt: "Forme la phrase « Je mange du pain au petit-déjeuner ».", tokens: ["breakfast", "bread", "for", "I", "eat", "cheese"], answer: ["I", "eat", "bread", "for", "breakfast"], wordIds: ["bread"] }
  },
  {
    unit: "food-shopping", id: "drinks", title: "Les boissons", subtitle: "Pour se désaltérer", description: "Apprends eau, lait, jus et thé.",
    words: [
      { id: "water", en: "Water", fr: "Eau", example: "I drink water after sport.", exampleFr: "Je bois de l’eau après le sport." },
      { id: "milk", en: "Milk", fr: "Lait", example: "The cat drinks milk.", exampleFr: "Le chat boit du lait." },
      { id: "juice", en: "Juice", fr: "Jus", example: "I like orange juice.", exampleFr: "J’aime le jus d’orange." },
      { id: "tea", en: "Tea", fr: "Thé", example: "Granddad drinks tea.", exampleFr: "Grand-père boit du thé." }
    ],
    sentence: { prompt: "Forme la phrase « Je bois de l’eau chaque jour ».", tokens: ["water", "day", "I", "every", "drink", "tea"], answer: ["I", "drink", "water", "every", "day"], wordIds: ["water"] }
  },
  {
    unit: "food-shopping", id: "market", title: "Au marché", subtitle: "Faire les courses", description: "Découvre le marché, le prix, l’argent et le verbe acheter.",
    words: [
      { id: "market", en: "Market", fr: "Marché", example: "We buy fruit at the market.", exampleFr: "Nous achetons des fruits au marché." },
      { id: "price", en: "Price", fr: "Prix", example: "What is the price?", exampleFr: "Quel est le prix ?" },
      { id: "money", en: "Money", fr: "Argent", example: "I keep my money in my bag.", exampleFr: "Je garde mon argent dans mon sac." },
      { id: "buy", en: "Buy", fr: "Acheter", example: "I buy a new book.", exampleFr: "J’achète un nouveau livre." }
    ],
    sentence: { prompt: "Forme la phrase « J’achète des fruits au marché ».", tokens: ["market", "buy", "the", "I", "at", "fruit", "price"], answer: ["I", "buy", "fruit", "at", "the", "market"], wordIds: ["buy", "market"] },
    typeAccepts: ["buy"]
  }
];

const EXTRA_LESSONS_B = [
  {
    unit: "body-health", id: "body-parts", title: "Les parties du corps", subtitle: "Tête, mains et pieds", description: "Nomme la tête, la main, le pied et le bras.",
    words: [
      { id: "head", en: "Head", fr: "Tête", example: "Touch your head.", exampleFr: "Touche ta tête." },
      { id: "hand", en: "Hand", fr: "Main", example: "This is my hand.", exampleFr: "C’est ma main." },
      { id: "foot", en: "Foot", fr: "Pied", example: "My foot is cold.", exampleFr: "Mon pied est froid." },
      { id: "arm", en: "Arm", fr: "Bras", example: "Raise your arm.", exampleFr: "Lève le bras." }
    ],
    sentence: { prompt: "Forme la phrase « Ceci est ma main ».", tokens: ["my", "This", "hand", "is", "head"], answer: ["This", "is", "my", "hand"], wordIds: ["hand"] }
  },
  {
    unit: "body-health", id: "face", title: "Le visage", subtitle: "Les yeux, les oreilles et le nez", description: "Découvre les mots pour parler du visage.",
    words: [
      { id: "eye", en: "Eye", fr: "Œil", example: "Close one eye.", exampleFr: "Ferme un œil." },
      { id: "ear", en: "Ear", fr: "Oreille", example: "I hear with my ears.", exampleFr: "J’entends avec mes oreilles." },
      { id: "nose", en: "Nose", fr: "Nez", example: "My nose is small.", exampleFr: "Mon nez est petit." },
      { id: "mouth", en: "Mouth", fr: "Bouche", example: "Open your mouth.", exampleFr: "Ouvre la bouche." }
    ],
    sentence: { prompt: "Forme la phrase « J’ai deux yeux ».", tokens: ["eyes", "two", "I", "have", "nose"], answer: ["I", "have", "two", "eyes"], wordIds: ["eye"] }
  },
  {
    unit: "body-health", id: "feelings", title: "Mes sentiments", subtitle: "Comment je me sens", description: "Exprime la joie, la tristesse, la fatigue et la faim.",
    words: [
      { id: "happy", en: "Happy", fr: "Heureux", example: "I am happy today.", exampleFr: "Je suis heureux aujourd’hui." },
      { id: "sad", en: "Sad", fr: "Triste", example: "She feels sad.", exampleFr: "Elle se sent triste." },
      { id: "tired", en: "Tired", fr: "Fatigué", example: "I am tired after school.", exampleFr: "Je suis fatigué après l’école." },
      { id: "hungry", en: "Hungry", fr: "Affamé", example: "The dog is hungry.", exampleFr: "Le chien a faim." }
    ],
    sentence: { prompt: "Forme la phrase « Je suis heureux aujourd’hui ».", tokens: ["today", "happy", "I", "am", "sad"], answer: ["I", "am", "happy", "today"], wordIds: ["happy", "today"] }
  },
  {
    unit: "body-health", id: "clothes", title: "Les vêtements", subtitle: "Je m’habille", description: "Reconnais le chemisier, le short, la robe et les chaussures.",
    words: [
      { id: "shirt", en: "Shirt", fr: "Chemise", example: "I wear a blue shirt.", exampleFr: "Je porte une chemise bleue." },
      { id: "shorts", en: "Shorts", fr: "Short", example: "These shorts are new.", exampleFr: "Ce short est neuf." },
      { id: "dress", en: "Dress", fr: "Robe", example: "The girl has a red dress.", exampleFr: "La fille a une robe rouge." },
      { id: "shoes", en: "Shoes", fr: "Chaussures", example: "My shoes are black.", exampleFr: "Mes chaussures sont noires." }
    ],
    sentence: { prompt: "Forme la phrase « Je porte une chemise bleue ».", tokens: ["blue", "wear", "a", "I", "shirt", "shoes"], answer: ["I", "wear", "a", "blue", "shirt"], wordIds: ["shirt", "blue"] },
    typeAccepts: ["shoes", "shoe"]
  },
  {
    unit: "body-health", id: "health", title: "Chez le médecin", subtitle: "La santé", description: "Apprends les mots médecin, infirmier, médicament et dent.",
    words: [
      { id: "doctor", en: "Doctor", fr: "Médecin", example: "The doctor is kind.", exampleFr: "Le médecin est gentil." },
      { id: "nurse", en: "Nurse", fr: "Infirmier", example: "The nurse helps me.", exampleFr: "L’infirmier m’aide." },
      { id: "medicine", en: "Medicine", fr: "Médicament", example: "Take this medicine.", exampleFr: "Prends ce médicament." },
      { id: "tooth", en: "Tooth", fr: "Dent", example: "My tooth hurts.", exampleFr: "J’ai mal aux dents." }
    ],
    sentence: { prompt: "Forme la phrase « J’ai mal aux dents ».", tokens: ["hurts", "tooth", "My", "doctor"], answer: ["My", "tooth", "hurts"], wordIds: ["tooth"] }
  },
  {
    unit: "daily-actions", id: "morning-routine", title: "Le matin", subtitle: "Ma routine", description: "Apprends les verbes se réveiller, se lever, se laver et brosser.",
    words: [
      { id: "wake", en: "Wake", fr: "Se réveiller", example: "I wake at seven.", exampleFr: "Je me réveille à sept heures." },
      { id: "get-up", en: "Get up", fr: "Se lever", example: "I get up early.", exampleFr: "Je me lève tôt." },
      { id: "wash", en: "Wash", fr: "Se laver", example: "I wash my hands.", exampleFr: "Je me lave les mains." },
      { id: "brush", en: "Brush", fr: "Brosser", example: "I brush my teeth.", exampleFr: "Je me brosse les dents." }
    ],
    sentence: { prompt: "Forme la phrase « Je me brosse les dents ».", tokens: ["my", "brush", "teeth", "I", "wash"], answer: ["I", "brush", "my", "teeth"], wordIds: ["brush"] },
    typeWord: 1, typeAccepts: ["get up", "get-up"]
  },
  {
    unit: "daily-actions", id: "home-actions", title: "À la maison", subtitle: "Les actions de tous les jours", description: "Utilise les verbes manger, cuisiner, dormir et lire.",
    words: [
      { id: "eat", en: "Eat", fr: "Manger", example: "We eat together.", exampleFr: "Nous mangeons ensemble." },
      { id: "cook", en: "Cook", fr: "Cuisiner", example: "Dad cooks dinner.", exampleFr: "Papa prépare le dîner." },
      { id: "sleep", en: "Sleep", fr: "Dormir", example: "I sleep in my bedroom.", exampleFr: "Je dors dans ma chambre." },
      { id: "read", en: "Read", fr: "Lire", example: "I read before bed.", exampleFr: "Je lis avant de me coucher." }
    ],
    sentence: { prompt: "Forme la phrase « Je lis un livre ».", tokens: ["book", "read", "a", "I", "sleep"], answer: ["I", "read", "a", "book"], wordIds: ["read", "book"] }
  },
  {
    unit: "daily-actions", id: "movement-actions", title: "Bouger", subtitle: "Les verbes de mouvement", description: "Apprends courir, sauter, marcher et nager.",
    words: [
      { id: "run", en: "Run", fr: "Courir", example: "I run in the park.", exampleFr: "Je cours dans le parc." },
      { id: "jump", en: "Jump", fr: "Sauter", example: "The horse can jump.", exampleFr: "Le cheval peut sauter." },
      { id: "walk", en: "Walk", fr: "Marcher", example: "We walk to school.", exampleFr: "Nous allons à l’école à pied." },
      { id: "swim", en: "Swim", fr: "Nager", example: "I swim in the pool.", exampleFr: "Je nage dans la piscine." }
    ],
    sentence: { prompt: "Forme la phrase « Je sais nager ».", tokens: ["swim", "can", "I", "run"], answer: ["I", "can", "swim"], wordIds: ["swim"] }
  },
  {
    unit: "daily-actions", id: "helping-actions", title: "Aider à la maison", subtitle: "Les petits coups de main", description: "Découvre aider, nettoyer, ranger et nourrir.",
    words: [
      { id: "help", en: "Help", fr: "Aider", example: "I help my mother.", exampleFr: "J’aide ma mère." },
      { id: "clean", en: "Clean", fr: "Nettoyer", example: "We clean the kitchen.", exampleFr: "Nous nettoyons la cuisine." },
      { id: "tidy", en: "Tidy", fr: "Ranger", example: "I tidy my room.", exampleFr: "Je range ma chambre." },
      { id: "feed", en: "Feed", fr: "Nourrir", example: "I feed the cat.", exampleFr: "Je nourris le chat." }
    ],
    sentence: { prompt: "Forme la phrase « J’aide ma mère ».", tokens: ["mother", "help", "my", "I", "clean"], answer: ["I", "help", "my", "mother"], wordIds: ["help", "mother"] }
  },
  {
    unit: "daily-actions", id: "communication-actions", title: "Communiquer", subtitle: "Parler et écrire", description: "Apprends parler, discuter, écouter et écrire.",
    words: [
      { id: "speak", en: "Speak", fr: "Parler", example: "I speak English.", exampleFr: "Je parle anglais." },
      { id: "talk", en: "Talk", fr: "Discuter", example: "We talk after school.", exampleFr: "Nous discutons après l’école." },
      { id: "listen", en: "Listen", fr: "Écouter", example: "Listen to the teacher.", exampleFr: "Écoute le professeur." },
      { id: "write", en: "Write", fr: "Écrire", example: "I write a message.", exampleFr: "J’écris un message." }
    ],
    sentence: { prompt: "Forme la phrase « Je parle anglais ».", tokens: ["English", "I", "speak", "write"], answer: ["I", "speak", "English"], wordIds: ["speak"] }
  },
  {
    unit: "transport-travel", id: "vehicles", title: "Les véhicules", subtitle: "Comment se déplacer", description: "Reconnais la voiture, le bus, le train et le vélo.",
    words: [
      { id: "car", en: "Car", fr: "Voiture", example: "We travel by car.", exampleFr: "Nous voyageons en voiture." },
      { id: "bus", en: "Bus", fr: "Bus", example: "I go to school by bus.", exampleFr: "Je vais à l’école en bus." },
      { id: "train", en: "Train", fr: "Train", example: "The train is fast.", exampleFr: "Le train est rapide." },
      { id: "bike", en: "Bike", fr: "Vélo", example: "I ride my bike.", exampleFr: "Je fais du vélo." }
    ],
    sentence: { prompt: "Forme la phrase « Je vais en bus ».", tokens: ["bus", "by", "go", "I", "car"], answer: ["I", "go", "by", "bus"], wordIds: ["bus"] },
    typeAccepts: ["bike", "bicycle"]
  },
  {
    unit: "transport-travel", id: "air-travel", title: "Prendre l’avion", subtitle: "Les objets du voyage", description: "Découvre le billet, l’aéroport, l’avion et la valise.",
    words: [
      { id: "ticket", en: "Ticket", fr: "Billet", example: "Here is my ticket.", exampleFr: "Voici mon billet." },
      { id: "airport", en: "Airport", fr: "Aéroport", example: "We arrive at the airport.", exampleFr: "Nous arrivons à l’aéroport." },
      { id: "plane", en: "Plane", fr: "Avion", example: "The plane is in the sky.", exampleFr: "L’avion est dans le ciel." },
      { id: "suitcase", en: "Suitcase", fr: "Valise", example: "My suitcase is heavy.", exampleFr: "Ma valise est lourde." }
    ],
    sentence: { prompt: "Forme la phrase « Ceci est ma valise ».", tokens: ["my", "This", "suitcase", "is", "ticket"], answer: ["This", "is", "my", "suitcase"], wordIds: ["suitcase"] }
  },
  {
    unit: "transport-travel", id: "directions", title: "Demander son chemin", subtitle: "Gauche, droite et tout droit", description: "Apprends à comprendre les indications simples.",
    words: [
      { id: "left", en: "Left", fr: "Gauche", example: "Turn left here.", exampleFr: "Tourne à gauche ici." },
      { id: "right", en: "Right", fr: "Droite", example: "The school is on the right.", exampleFr: "L’école est à droite." },
      { id: "straight", en: "Straight", fr: "Tout droit", example: "Go straight for two minutes.", exampleFr: "Va tout droit pendant deux minutes." },
      { id: "near", en: "Near", fr: "Près", example: "The park is near my house.", exampleFr: "Le parc est près de chez moi." }
    ],
    sentence: { prompt: "Forme la phrase « Tourne à droite à l’école ».", tokens: ["right", "Turn", "school", "at", "the", "left"], answer: ["Turn", "right", "at", "the", "school"], wordIds: ["right", "school"] },
    typeWord: 2, typeAccepts: ["straight", "straight ahead"]
  },
  {
    unit: "transport-travel", id: "city-travel", title: "En ville", subtitle: "Taxi, métro, bateau et carte", description: "Parle des moyens de transport en ville.",
    words: [
      { id: "taxi", en: "Taxi", fr: "Taxi", example: "We take a taxi.", exampleFr: "Nous prenons un taxi." },
      { id: "subway", en: "Subway", fr: "Métro", example: "The subway is quick.", exampleFr: "Le métro est rapide." },
      { id: "boat", en: "Boat", fr: "Bateau", example: "The boat is on the river.", exampleFr: "Le bateau est sur la rivière." },
      { id: "map", en: "Map", fr: "Carte", example: "I look at the map.", exampleFr: "Je regarde la carte." }
    ],
    sentence: { prompt: "Forme la phrase « Nous prenons le métro ».", tokens: ["subway", "take", "We", "the", "taxi"], answer: ["We", "take", "the", "subway"], wordIds: ["subway"] }
  },
  {
    unit: "transport-travel", id: "holiday", title: "En vacances", subtitle: "Plage, hôtel et souvenirs", description: "Découvre les mots de la plage, de l’hôtel, de l’appareil photo et de la carte postale.",
    words: [
      { id: "beach", en: "Beach", fr: "Plage", example: "We play on the beach.", exampleFr: "Nous jouons sur la plage." },
      { id: "hotel", en: "Hotel", fr: "Hôtel", example: "Our hotel is near the sea.", exampleFr: "Notre hôtel est près de la mer." },
      { id: "camera", en: "Camera", fr: "Appareil photo", example: "I take a photo with my camera.", exampleFr: "Je prends une photo avec mon appareil photo." },
      { id: "postcard", en: "Postcard", fr: "Carte postale", example: "I send a postcard to Grandma.", exampleFr: "J’envoie une carte postale à Mamie." }
    ],
    sentence: { prompt: "Forme la phrase « Nous restons à un hôtel ».", tokens: ["hotel", "stay", "We", "at", "an", "beach"], answer: ["We", "stay", "at", "an", "hotel"], wordIds: ["hotel"] }
  }
];
const EXTRA_LESSONS_C = [
  {
    unit: "nature-weather", id: "farm-animals", title: "Les animaux de la ferme", subtitle: "À la ferme", description: "Reconnais la vache, le cheval, le mouton et la chèvre.",
    words: [
      { id: "cow", en: "Cow", fr: "Vache", example: "The cow is in the field.", exampleFr: "La vache est dans le champ." },
      { id: "horse", en: "Horse", fr: "Cheval", example: "The horse runs fast.", exampleFr: "Le cheval court vite." },
      { id: "sheep", en: "Sheep", fr: "Mouton", example: "The sheep is white.", exampleFr: "Le mouton est blanc." },
      { id: "goat", en: "Goat", fr: "Chèvre", example: "The goat eats grass.", exampleFr: "La chèvre mange de l’herbe." }
    ],
    sentence: { prompt: "Forme la phrase « La vache est dans le champ ».", tokens: ["field", "cow", "The", "in", "is", "the", "horse"], answer: ["The", "cow", "is", "in", "the", "field"], wordIds: ["cow"] }
  },
  {
    unit: "nature-weather", id: "wild-animals", title: "Les animaux sauvages", subtitle: "Dans la nature", description: "Découvre le lion, le tigre, l’éléphant et le singe.",
    words: [
      { id: "lion", en: "Lion", fr: "Lion", example: "The lion is strong.", exampleFr: "Le lion est fort." },
      { id: "tiger", en: "Tiger", fr: "Tigre", example: "The tiger has stripes.", exampleFr: "Le tigre a des rayures." },
      { id: "elephant", en: "Elephant", fr: "Éléphant", example: "The elephant has a long trunk.", exampleFr: "L’éléphant a une longue trompe." },
      { id: "monkey", en: "Monkey", fr: "Singe", example: "The monkey can climb.", exampleFr: "Le singe peut grimper." }
    ],
    sentence: { prompt: "Forme la phrase « Le singe peut grimper ».", tokens: ["climb", "can", "The", "monkey", "lion"], answer: ["The", "monkey", "can", "climb"], wordIds: ["monkey"] }
  },
  {
    unit: "nature-weather", id: "insects", title: "Les petites bêtes", subtitle: "Abeilles, papillons et fourmis", description: "Apprends le nom de quatre petites bêtes.",
    words: [
      { id: "bee", en: "Bee", fr: "Abeille", example: "The bee can fly.", exampleFr: "L’abeille peut voler." },
      { id: "butterfly", en: "Butterfly", fr: "Papillon", example: "The butterfly is colourful.", exampleFr: "Le papillon est coloré." },
      { id: "ant", en: "Ant", fr: "Fourmi", example: "The ant is very small.", exampleFr: "La fourmi est très petite." },
      { id: "spider", en: "Spider", fr: "Araignée", example: "The spider has eight legs.", exampleFr: "L’araignée a huit pattes." }
    ],
    sentence: { prompt: "Forme la phrase « L’abeille peut voler ».", tokens: ["fly", "The", "can", "bee", "ant"], answer: ["The", "bee", "can", "fly"], wordIds: ["bee"] }
  },
  {
    unit: "nature-weather", id: "nature", title: "Les paysages", subtitle: "Arbres, fleurs et montagnes", description: "Nomme l’arbre, la fleur, la rivière et la montagne.",
    words: [
      { id: "tree", en: "Tree", fr: "Arbre", example: "The tree is tall.", exampleFr: "L’arbre est grand." },
      { id: "flower", en: "Flower", fr: "Fleur", example: "This flower is beautiful.", exampleFr: "Cette fleur est belle." },
      { id: "river", en: "River", fr: "Rivière", example: "The river is long.", exampleFr: "La rivière est longue." },
      { id: "mountain", en: "Mountain", fr: "Montagne", example: "We climb the mountain.", exampleFr: "Nous gravissons la montagne." }
    ],
    sentence: { prompt: "Forme la phrase « La rivière est longue ».", tokens: ["long", "The", "river", "is", "tree"], answer: ["The", "river", "is", "long"], wordIds: ["river"] }
  },
  {
    unit: "nature-weather", id: "weather", title: "La météo", subtitle: "Quel temps fait-il ?", description: "Parle de la pluie, de la neige, du vent et du soleil.",
    words: [
      { id: "rain", en: "Rain", fr: "Pluie", example: "I like the rain.", exampleFr: "J’aime la pluie." },
      { id: "snow", en: "Snow", fr: "Neige", example: "The snow is white.", exampleFr: "La neige est blanche." },
      { id: "wind", en: "Wind", fr: "Vent", example: "The wind is strong.", exampleFr: "Le vent est fort." },
      { id: "sun", en: "Sun", fr: "Soleil", example: "The sun is bright.", exampleFr: "Le soleil est lumineux." }
    ],
    sentence: { prompt: "Forme la phrase « Il pleut aujourd’hui ».", tokens: ["rainy", "It", "today", "is", "snow"], answer: ["It", "is", "rainy", "today"], wordIds: ["rain", "today"] }
  },
  {
    unit: "sports-hobbies", id: "sports", title: "Les sports", subtitle: "Bouger et jouer", description: "Découvre le football, le basketball, le tennis et la natation.",
    words: [
      { id: "football", en: "Football", fr: "Football", example: "I play football with my friends.", exampleFr: "Je joue au football avec mes amis." },
      { id: "basketball", en: "Basketball", fr: "Basketball", example: "Basketball is fun.", exampleFr: "Le basketball est amusant." },
      { id: "tennis", en: "Tennis", fr: "Tennis", example: "We play tennis on Saturday.", exampleFr: "Nous jouons au tennis le samedi." },
      { id: "swimming", en: "Swimming", fr: "Natation", example: "Swimming makes me strong.", exampleFr: "La natation me rend fort." }
    ],
    sentence: { prompt: "Forme la phrase « Je joue au football ».", tokens: ["football", "play", "I", "tennis"], answer: ["I", "play", "football"], wordIds: ["football"] }
  },
  {
    unit: "sports-hobbies", id: "games-toys", title: "Les jeux et les jouets", subtitle: "Jouer à la maison", description: "Reconnais le jeu, le puzzle, le jouet et le ballon.",
    words: [
      { id: "game", en: "Game", fr: "Jeu", example: "This game is exciting.", exampleFr: "Ce jeu est passionnant." },
      { id: "puzzle", en: "Puzzle", fr: "Puzzle", example: "I do a puzzle with Mum.", exampleFr: "Je fais un puzzle avec Maman." },
      { id: "toy", en: "Toy", fr: "Jouet", example: "This is my favourite toy.", exampleFr: "C’est mon jouet préféré." },
      { id: "ball", en: "Ball", fr: "Ballon", example: "The ball is under the table.", exampleFr: "Le ballon est sous la table." }
    ],
    sentence: { prompt: "Forme la phrase « C’est mon jouet préféré ».", tokens: ["toy", "my", "This", "favourite", "is", "ball"], answer: ["This", "is", "my", "favourite", "toy"], wordIds: ["toy"] }
  },
  {
    unit: "sports-hobbies", id: "music", title: "La musique", subtitle: "Chanter et danser", description: "Apprends musique, chanson, chanter et danser.",
    words: [
      { id: "music", en: "Music", fr: "Musique", example: "I listen to music.", exampleFr: "J’écoute de la musique." },
      { id: "song", en: "Song", fr: "Chanson", example: "I like this song.", exampleFr: "J’aime cette chanson." },
      { id: "sing", en: "Sing", fr: "Chanter", example: "We sing together.", exampleFr: "Nous chantons ensemble." },
      { id: "dance", en: "Dance", fr: "Danser", example: "I dance in my room.", exampleFr: "Je danse dans ma chambre." }
    ],
    sentence: { prompt: "Forme la phrase « J’aime cette chanson ».", tokens: ["song", "this", "I", "like", "music"], answer: ["I", "like", "this", "song"], wordIds: ["song"] }
  },
  {
    unit: "sports-hobbies", id: "art", title: "Dessiner et peindre", subtitle: "Les arts", description: "Utilise les verbes dessiner et peindre, et les mots image et colorier.",
    words: [
      { id: "draw", en: "Draw", fr: "Dessiner", example: "I draw a cat.", exampleFr: "Je dessine un chat." },
      { id: "paint", en: "Paint", fr: "Peindre", example: "We paint with bright colours.", exampleFr: "Nous peignons avec des couleurs vives." },
      { id: "picture", en: "Picture", fr: "Image", example: "This is a picture of my family.", exampleFr: "C’est une image de ma famille." },
      { id: "color", en: "Color", fr: "Colorier", example: "I color the flowers.", exampleFr: "Je colorie les fleurs." }
    ],
    sentence: { prompt: "Forme la phrase « Je dessine une image ».", tokens: ["picture", "a", "draw", "I", "paint"], answer: ["I", "draw", "a", "picture"], wordIds: ["draw", "picture"] },
    typeAccepts: ["color", "colour"]
  },
  {
    unit: "sports-hobbies", id: "outdoor-hobbies", title: "Jouer dehors", subtitle: "Cerf-volant, corde et cubes", description: "Découvre le cerf-volant, la corde à sauter, les poupées et les cubes.",
    words: [
      { id: "kite", en: "Kite", fr: "Cerf-volant", example: "I fly my kite.", exampleFr: "Je fais voler mon cerf-volant." },
      { id: "skip", en: "Skip", fr: "Sauter à la corde", example: "We skip in the playground.", exampleFr: "Nous sautons à la corde dans la cour." },
      { id: "dolls", en: "Dolls", fr: "Poupées", example: "The dolls are in the box.", exampleFr: "Les poupées sont dans la boîte." },
      { id: "blocks", en: "Blocks", fr: "Cubes", example: "I build a tower with blocks.", exampleFr: "Je construis une tour avec des cubes." }
    ],
    sentence: { prompt: "Forme la phrase « Je fais voler mon cerf-volant ».", tokens: ["kite", "my", "fly", "I", "blocks"], answer: ["I", "fly", "my", "kite"], wordIds: ["kite"] },
    typeWord: 2, typeAccepts: ["doll", "dolls"]
  },
  {
    unit: "school-jobs-tech", id: "classroom", title: "Dans la classe", subtitle: "Les objets de l’élève", description: "Apprends élève, bureau, cahier et règle.",
    words: [
      { id: "student", en: "Student", fr: "Élève", example: "I am a student.", exampleFr: "Je suis élève." },
      { id: "desk", en: "Desk", fr: "Bureau", example: "My desk is clean.", exampleFr: "Mon bureau est propre." },
      { id: "notebook", en: "Notebook", fr: "Cahier", example: "I write in my notebook.", exampleFr: "J’écris dans mon cahier." },
      { id: "ruler", en: "Ruler", fr: "Règle", example: "The ruler is long.", exampleFr: "La règle est longue." }
    ],
    sentence: { prompt: "Forme la phrase « Le cahier est sur le bureau ».", tokens: ["desk", "notebook", "The", "on", "is", "the", "ruler"], answer: ["The", "notebook", "is", "on", "the", "desk"], wordIds: ["notebook", "desk"] }
  },
  {
    unit: "school-jobs-tech", id: "school-subjects", title: "Les matières", subtitle: "Ce que j’apprends", description: "Découvre les maths, l’histoire, les sciences et les arts.",
    words: [
      { id: "math", en: "Math", fr: "Maths", example: "Math is my favourite subject.", exampleFr: "Les maths sont ma matière préférée." },
      { id: "history", en: "History", fr: "Histoire", example: "We learn about the past in history.", exampleFr: "Nous apprenons le passé en histoire." },
      { id: "science", en: "Science", fr: "Sciences", example: "I like science.", exampleFr: "J’aime les sciences." },
      { id: "art", en: "Art", fr: "Arts", example: "We make pictures in art.", exampleFr: "Nous faisons des images en arts." }
    ],
    sentence: { prompt: "Forme la phrase « J’aime les sciences ».", tokens: ["science", "like", "I", "math"], answer: ["I", "like", "science"], wordIds: ["science"] }
  },
  {
    unit: "school-jobs-tech", id: "jobs", title: "Les métiers", subtitle: "Que veux-tu faire ?", description: "Reconnais pompier, agent de police, pilote et fermier.",
    words: [
      { id: "firefighter", en: "Firefighter", fr: "Pompier", example: "The firefighter is brave.", exampleFr: "Le pompier est courageux." },
      { id: "police-officer", en: "Police officer", fr: "Agent de police", example: "The police officer helps people.", exampleFr: "L’agent de police aide les gens." },
      { id: "pilot", en: "Pilot", fr: "Pilote", example: "The pilot flies a plane.", exampleFr: "Le pilote conduit un avion." },
      { id: "farmer", en: "Farmer", fr: "Fermier", example: "The farmer feeds the animals.", exampleFr: "Le fermier nourrit les animaux." }
    ],
    sentence: { prompt: "Forme la phrase « Le pilote conduit un avion ».", tokens: ["plane", "flies", "The", "pilot", "a", "farmer"], answer: ["The", "pilot", "flies", "a", "plane"], wordIds: ["pilot", "plane"] }
  },
  {
    unit: "school-jobs-tech", id: "devices", title: "Les objets connectés", subtitle: "Ordinateur, tablette et téléphone", description: "Parle de l’ordinateur, de la tablette, du téléphone et d’Internet.",
    words: [
      { id: "computer", en: "Computer", fr: "Ordinateur", example: "I use a computer for homework.", exampleFr: "J’utilise un ordinateur pour mes devoirs." },
      { id: "tablet", en: "Tablet", fr: "Tablette", example: "The tablet is on the table.", exampleFr: "La tablette est sur la table." },
      { id: "phone", en: "Phone", fr: "Téléphone", example: "I call Grandma on the phone.", exampleFr: "J’appelle Mamie au téléphone." },
      { id: "internet", en: "Internet", fr: "Internet", example: "We use the internet at home.", exampleFr: "Nous utilisons Internet à la maison." }
    ],
    sentence: { prompt: "Forme la phrase « J’utilise un ordinateur ».", tokens: ["computer", "use", "a", "I", "phone"], answer: ["I", "use", "a", "computer"], wordIds: ["computer"] }
  },
  {
    unit: "school-jobs-tech", id: "online-world", title: "Le monde numérique", subtitle: "Courriel, mot de passe et vidéo", description: "Découvre le courriel, le mot de passe, le site web et la vidéo.",
    words: [
      { id: "email", en: "Email", fr: "Courriel", example: "I send an email.", exampleFr: "J’envoie un courriel." },
      { id: "password", en: "Password", fr: "Mot de passe", example: "Keep your password secret.", exampleFr: "Garde ton mot de passe secret." },
      { id: "website", en: "Website", fr: "Site web", example: "This website is fun.", exampleFr: "Ce site web est amusant." },
      { id: "video", en: "Video", fr: "Vidéo", example: "We watch a video together.", exampleFr: "Nous regardons une vidéo ensemble." }
    ],
    sentence: { prompt: "Forme la phrase « J’envoie un courriel ».", tokens: ["email", "an", "send", "I", "video"], answer: ["I", "send", "an", "email"], wordIds: ["email"] },
    typeWord: 2, typeAccepts: ["website", "site"]
  }
];

function buildExtraLessons() {
  return [...EXTRA_LESSONS_A, ...EXTRA_LESSONS_B, ...EXTRA_LESSONS_C].map((blueprint, index) => {
    const unit = COURSE_UNITS.find((item) => item.id === blueprint.unit);
    const words = blueprint.words;
    const [first, second, third, fourth] = words;
    const typeWord = words[blueprint.typeWord ?? 3];
    const choice = {
      id: `${blueprint.id}-choice`, type: "choice", skill: "Vocabulaire",
      prompt: `Comment dit-on « ${first.fr} » en anglais ?`, helper: "Choisis le bon mot.",
      wordId: first.id, wordIds: [first.id], options: [first.en, third.en, second.en, fourth.en], answer: first.en
    };
    const listen = {
      id: `${blueprint.id}-listen`, type: "listen", skill: "À l’oreille",
      prompt: "Quel mot viens-tu d’entendre ?", helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
      audio: second.en, wordId: second.id, wordIds: [second.id], options: [fourth.en, second.en, first.en, third.en], answer: second.en
    };
    const reverse = {
      id: `${blueprint.id}-reverse`, type: "choice", skill: "Comprendre",
      prompt: `Que veut dire « ${third.en} » ?`, helper: "Choisis la bonne traduction.",
      wordId: third.id, wordIds: [third.id], options: [first.fr, second.fr, fourth.fr, third.fr], answer: third.fr
    };
    const build = {
      id: `${blueprint.id}-build`, type: "build", skill: "Construire une phrase",
      prompt: blueprint.sentence.prompt, helper: "Touche les mots dans le bon ordre.",
      wordIds: blueprint.sentence.wordIds.filter((id) => words.some((word) => word.id === id)), tokens: blueprint.sentence.tokens, answer: blueprint.sentence.answer
    };
    const match = {
      id: `${blueprint.id}-match`, type: "match", skill: "Relier les mots",
      prompt: "Relie chaque mot anglais à sa traduction.", helper: "Choisis un mot à gauche, puis sa traduction à droite.",
      wordIds: words.map((word) => word.id), pairs: words.map((word) => word.id), answer: "all"
    };
    const type = {
      id: `${blueprint.id}-type`, type: "type", skill: "À toi d’écrire",
      prompt: `Écris « ${typeWord.fr} » en anglais.`, helper: "Tape le mot, puis valide ta réponse.",
      wordId: typeWord.id, wordIds: [typeWord.id], answer: typeWord.en,
      acceptedAnswers: blueprint.typeAccepts || [typeWord.en.toLowerCase()]
    };
    const exercises = index % 2 === 0
      ? [choice, listen, reverse, build, match, type]
      : [listen, choice, reverse, match, build, type];
    return {
      id: blueprint.id, number: index + 6, unit: unit.id, stage: "vocabulary",
      title: blueprint.title, subtitle: blueprint.subtitle || unit.title, description: blueprint.description,
      icon: blueprint.icon || unit.icon, color: unit.color, minutes: 4, xp: 44,
      words, exercises
    };
  });
}

function normalizePracticeValue(value) {
  if (typeof value === "string") return value.replace(/\b(?:Léa|Léo|Leo)\b/g, "{name}");
  if (Array.isArray(value)) return value.map(normalizePracticeValue);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizePracticeValue(item)]));
  return value;
}

const PRACTICE_CONTENT_CORE = {
  essentials: {
    phrases: [
      {
        id: "essentials-phrases-1",
        title: "Dire bonjour et se présenter",
        subtitle: "Un petit bonjour, un grand sourire",
        description: "Fais connaissance avec tes nouveaux amis.",
        words: [
          ["ess-name", "Name", "Nom"],
          ["ess-hello", "Hello", "Bonjour"],
          ["ess-bye", "Goodbye", "Au revoir"],
          ["ess-friend", "Friend", "Copin / Copine"]
        ],
        phrases: [
          {
            fr: "Je m'appelle Léa.",
            en: ["My", "name", "is", "Léa"],
            wordIds: ["ess-name"],
            accepts: ["I'm Léa", "I am Léa"]
          },
          {
            fr: "Bonjour mon ami !",
            en: ["Hello", "my", "friend"],
            wordIds: ["ess-hello", "ess-friend"],
            accepts: ["Hello, my friend", "Hi, my friend"]
          },
          {
            fr: "Je m'appelle Sam.",
            en: ["My", "name", "is", "Sam"],
            wordIds: ["ess-name"],
            accepts: ["I'm Sam", "I am Sam"]
          },
          {
            fr: "Au revoir mon ami !",
            en: ["Goodbye", "my", "friend"],
            wordIds: ["ess-bye", "ess-friend"],
            accepts: ["Bye, my friend", "See you, my friend"]
          }
        ]
      },
      {
        id: "essentials-phrases-2",
        title: "Parler de ses sentiments",
        subtitle: "Comment te sens-tu ?",
        description: "Dis aux autres comment tu te sens.",
        words: [
          ["ess-fine", "Fine", "Ça va"],
          ["ess-happy", "Happy", "Heureux / Heureuse"],
          ["ess-sad", "Sad", "Triste"],
          ["ess-tired", "Tired", "Fatigué / Fatiguée"]
        ],
        phrases: [
          {
            fr: "Je vais bien.",
            en: ["I", "am", "fine"],
            wordIds: ["ess-fine"],
            accepts: ["I'm fine", "I am doing well"]
          },
          {
            fr: "Je suis heureux.",
            en: ["I", "am", "happy"],
            wordIds: ["ess-happy"],
            accepts: ["I'm happy", "I feel happy"]
          },
          {
            fr: "Je suis triste.",
            en: ["I", "feel", "sad"],
            wordIds: ["ess-sad"],
            accepts: ["I'm sad", "I am sad"]
          },
          {
            fr: "Je suis fatigué.",
            en: ["I", "am", "tired"],
            wordIds: ["ess-tired"],
            accepts: ["I'm tired", "I feel tired"]
          }
        ]
      },
      {
        id: "essentials-phrases-3",
        title: "Les objets de la classe",
        subtitle: "Lis, écris et amuse-toi",
        description: "Tu vas très bien faire avec ces mots utiles !",
        words: [
          ["ess-book", "Book", "Livre"],
          ["ess-pencil", "Pencil", "Crayon"],
          ["ess-read", "Read", "Lire"],
          ["ess-write", "Write", "Écrire"]
        ],
        phrases: [
          {
            fr: "J'ai un livre.",
            en: ["I", "have", "a", "book"],
            wordIds: ["ess-book"],
            accepts: ["I've got a book", "I have one book"]
          },
          {
            fr: "Je lis un livre.",
            en: ["I", "read", "a", "book"],
            wordIds: ["ess-read", "ess-book"],
            accepts: ["I'm reading a book"]
          },
          {
            fr: "J'écris avec un crayon.",
            en: ["I", "write", "with", "a", "pencil"],
            wordIds: ["ess-write", "ess-pencil"],
            accepts: ["I'm writing with a pencil"]
          },
          {
            fr: "Ouvre ton livre.",
            en: ["Open", "your", "book"],
            wordIds: ["ess-book"],
            accepts: ["Open the book"]
          }
        ]
      },
      {
        id: "essentials-phrases-4",
        title: "Dire ce qu'on aime",
        subtitle: "Des jeux et des chansons",
        description: "Partage maintenant tes activités préférées.",
        words: [
          ["ess-like", "Like", "Aimer"],
          ["ess-play", "Play", "Jouer"],
          ["ess-draw", "Draw", "Dessiner"],
          ["ess-sing", "Sing", "Chanter"]
        ],
        phrases: [
          {
            fr: "J'aime jouer.",
            en: ["I", "like", "to", "play"],
            wordIds: ["ess-like", "ess-play"],
            accepts: ["I enjoy playing", "I love to play"]
          },
          {
            fr: "J'aime dessiner.",
            en: ["I", "like", "to", "draw"],
            wordIds: ["ess-like", "ess-draw"],
            accepts: ["I enjoy drawing", "I love to draw"]
          },
          {
            fr: "J'aime chanter.",
            en: ["I", "love", "to", "sing"],
            wordIds: ["ess-like", "ess-sing"],
            accepts: ["I like to sing", "I enjoy singing"]
          },
          {
            fr: "Je joue avec mon ami.",
            en: ["I", "play", "with", "my", "friend"],
            wordIds: ["ess-play", "ess-friend"],
            accepts: ["I'm playing with my friend"]
          }
        ]
      },
      {
        id: "essentials-phrases-5",
        title: "Être poli et s'entraider",
        subtitle: "Des mots gentils pour tous les jours",
        description: "Ces petites phrases rendent tout le monde heureux.",
        words: [
          ["ess-please", "Please", "S'il te plaît"],
          ["ess-thank-you", "Thank you", "Merci"],
          ["ess-help", "Help", "Aider"],
          ["ess-share", "Share", "Partager"]
        ],
        phrases: [
          {
            fr: "Du jus, s'il te plaît.",
            en: ["Some", "juice", "please"],
            wordIds: ["ess-please"],
            accepts: ["Juice, please", "Some juice, please"]
          },
          {
            fr: "Merci beaucoup !",
            en: ["Thank", "you", "very", "much"],
            wordIds: ["ess-thank-you"],
            accepts: ["Thanks a lot", "Thank you so much"]
          },
          {
            fr: "Peux-tu m'aider ?",
            en: ["Can", "you", "help", "me"],
            wordIds: ["ess-help"],
            accepts: ["Could you help me", "Can you help me, please"]
          },
          {
            fr: "Je partage mes crayons.",
            en: ["I", "share", "my", "crayons"],
            wordIds: ["ess-share"],
            accepts: ["I'm sharing my crayons"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "essentials-chat-1",
        title: "Faire connaissance avec Sam",
        subtitle: "Un nouvel ami dans la cour",
        description: "Réponds avec confiance pour faire un nouvel ami.",
        context: "Sam te rencontre dans la cour de récréation.",
        words: [
          ["ess-how-are-you", "How are you", "Comment vas-tu"],
          ["ess-age", "Age", "Âge"],
          ["ess-years-old", "Years old", "Ans"],
          ["ess-live", "Live", "Habiter"]
        ],
        turns: [
          {
            speaker: "Sam",
            en: "Hi! What's your name?",
            fr: "Salut ! Comment t'appelles ?",
            options: ["My name is Léa.", "I am nine.", "Good night."],
            answer: "My name is Léa.",
            accepts: ["I'm Léa", "I am Léa"],
            wordIds: ["ess-name"]
          },
          {
            speaker: "Sam",
            en: "How are you?",
            fr: "Comment vas-tu ?",
            options: ["I am fine, thank you.", "I am nine years old.", "Good night."],
            answer: "I am fine, thank you.",
            accepts: ["I'm fine, thank you", "I'm fine"],
            wordIds: ["ess-how-are-you", "ess-fine"]
          },
          {
            speaker: "Sam",
            en: "How old are you?",
            fr: "Quel âge as-tu ?",
            options: ["I am nine years old.", "I am fine.", "I live in Paris."],
            answer: "I am nine years old.",
            accepts: ["I'm nine", "I'm nine years old"],
            wordIds: ["ess-age", "ess-years-old"]
          },
          {
            speaker: "Sam",
            en: "Where do you live?",
            fr: "Où habites-tu ?",
            options: ["I live in Paris with my family.", "I am nine years old.", "My name is Léa."],
            answer: "I live in Paris with my family.",
            accepts: ["I live in Paris with my family", "I live with my family in Paris"],
            wordIds: ["ess-live"]
          }
        ]
      },
      {
        id: "essentials-chat-2",
        title: "Aujourd'hui, je me sens...",
        subtitle: "Des émotions et des raisons",
        description: "Exprime tes émotions avec des phrases complètes.",
        context: "Sam te demande comment tu vas et pourquoi.",
        words: [
          ["ess-angry", "Angry", "En colère"],
          ["ess-excited", "Excited", "Enthousiaste"],
          ["ess-because", "Because", "Parce que"],
          ["ess-today", "Today", "Aujourd'hui"]
        ],
        turns: [
          {
            speaker: "Sam",
            en: "How do you feel today?",
            fr: "Comment te sens-tu aujourd'hui ?",
            options: ["I feel happy.", "I have a book.", "I can sing."],
            answer: "I feel happy.",
            accepts: ["I'm happy", "Today, I feel happy"],
            wordIds: ["ess-today", "ess-happy"]
          },
          {
            speaker: "Sam",
            en: "Are you excited?",
            fr: "Tu es enthousiaste ?",
            options: ["Yes, I am excited.", "No, I am tired.", "I like to draw."],
            answer: "Yes, I am excited.",
            accepts: ["Yes, I'm excited"],
            wordIds: ["ess-excited"]
          },
          {
            speaker: "Sam",
            en: "Why are you happy?",
            fr: "Pourquoi es-tu heureux ?",
            options: ["Because I can play.", "Because I am nine.", "Because my name is Léa."],
            answer: "Because I can play.",
            accepts: ["I'm happy because I can play"],
            wordIds: ["ess-because", "ess-play", "ess-happy"]
          },
          {
            speaker: "Sam",
            en: "What do you do when you feel angry?",
            fr: "Que fais-tu quand tu es en colère ?",
            options: ["I take a deep breath.", "I sing a happy song.", "I say good night."],
            answer: "I take a deep breath.",
            accepts: ["When I feel angry, I take a deep breath", "I take a deep breath when I'm angry"],
            wordIds: ["ess-angry"]
          }
        ]
      },
      {
        id: "essentials-chat-3",
        title: "Une question en classe",
        subtitle: "Écouter, comprendre et répondre",
        description: "Prends ton temps pour bien répondre.",
        context: "Ton professeur t'aide à comprendre une question.",
        words: [
          ["ess-question", "Question", "Question"],
          ["ess-answer", "Answer", "Répondre"],
          ["ess-again", "Again", "Encore"],
          ["ess-understand", "Understand", "Comprendre"]
        ],
        turns: [
          {
            speaker: "Teacher",
            en: "Can you help me, please?",
            fr: "Peux-tu m'aider, s'il te plaît ?",
            options: ["Yes, I can help you.", "Yes, I can sing.", "No, thank you."],
            answer: "Yes, I can help you.",
            accepts: ["Sure, I can help you", "Of course"],
            wordIds: ["ess-help", "ess-please"]
          },
          {
            speaker: "Teacher",
            en: "Can you say the question again, please?",
            fr: "Peux-tu répéter la question, s'il te plaît ?",
            options: ["Yes, please say the question again.", "No, I am tired.", "Yes, my name is Léa."],
            answer: "Yes, please say the question again.",
            accepts: ["Please repeat the question", "Can you repeat it, please"],
            wordIds: ["ess-again", "ess-question"]
          },
          {
            speaker: "Teacher",
            en: "Do you understand it now?",
            fr: "La comprends-tu maintenant ?",
            options: ["Yes, I understand the question now.", "No, I have a pencil.", "Yes, I am nine."],
            answer: "Yes, I understand the question now.",
            accepts: ["Yes, I understand", "Yes, I understand now"],
            wordIds: ["ess-understand", "ess-question"]
          },
          {
            speaker: "Teacher",
            en: "Can you answer the question by yourself?",
            fr: "Peux-tu répondre à la question tout seul ?",
            options: ["Yes, I can answer the question by myself.", "No, I can sing.", "Yes, it is Monday."],
            answer: "Yes, I can answer the question by myself.",
            accepts: ["Yes, I can answer it by myself", "Yes, I can"],
            wordIds: ["ess-answer", "ess-question"]
          }
        ]
      },
      {
        id: "essentials-chat-4",
        title: "Le dessin de Mia",
        subtitle: "Une couleur, une raison, un projet",
        description: "Imagine et partage ton dessin.",
        context: "Mia prépare un dessin et te demande ton avis.",
        words: [
          ["ess-color", "Colour", "Couleur"],
          ["ess-blue", "Blue", "Bleu"],
          ["ess-picture", "Picture", "Dessin"],
          ["ess-together", "Together", "Ensemble"]
        ],
        turns: [
          {
            speaker: "Mia",
            en: "What do you like to draw?",
            fr: "Qu'aimes-tu dessiner ?",
            options: ["I like to draw animals.", "I like to read books.", "I am nine years old."],
            answer: "I like to draw animals.",
            accepts: ["I enjoy drawing animals", "I like drawing animals"],
            wordIds: ["ess-draw", "ess-like"]
          },
          {
            speaker: "Mia",
            en: "Which colour do you like?",
            fr: "Quelle couleur aimes-tu ?",
            options: ["I like the colour blue.", "I like to sing.", "I have a red book."],
            answer: "I like the colour blue.",
            accepts: ["I like blue", "My favourite colour is blue"],
            wordIds: ["ess-color", "ess-blue"]
          },
          {
            speaker: "Mia",
            en: "Why do you like blue?",
            fr: "Pourquoi aimes-tu le bleu ?",
            options: ["Because blue makes me feel calm.", "Because I can write.", "Because it is a book."],
            answer: "Because blue makes me feel calm.",
            accepts: ["I like blue because it makes me feel calm", "Blue makes me feel calm"],
            wordIds: ["ess-because", "ess-blue"]
          },
          {
            speaker: "Mia",
            en: "Shall we draw a picture together?",
            fr: "Veux-tu qu'on dessine ensemble ?",
            options: ["Yes, let's draw a blue animal together.", "No, I am nine.", "I will go home."],
            answer: "Yes, let's draw a blue animal together.",
            accepts: ["Yes, let's make a picture together", "Yes, let's draw together"],
            wordIds: ["ess-picture", "ess-together", "ess-draw", "ess-blue"]
          }
        ]
      }
    ]
  },
  "numbers-time": {
    phrases: [
      {
        id: "numbers-time-phrases-1",
        title: "Compter de un à quatre",
        subtitle: "Les petits nombres",
        description: "Compte les objets et trouve le bon nombre.",
        words: [
          ["num-one", "One", "Un"],
          ["num-two", "Two", "Deux"],
          ["num-three", "Three", "Trois"],
          ["num-four", "Four", "Quatre"]
        ],
        phrases: [
          {
            fr: "J'ai un livre.",
            en: ["I", "have", "one", "book"],
            wordIds: ["num-one"],
            accepts: ["I've got one book", "I have 1 book"]
          },
          {
            fr: "J'ai deux chats.",
            en: ["I", "have", "two", "cats"],
            wordIds: ["num-two"],
            accepts: ["I've got two cats", "I have 2 cats"]
          },
          {
            fr: "Voici trois pommes.",
            en: ["Here", "are", "three", "apples"],
            wordIds: ["num-three"],
            accepts: ["Here are 3 apples", "There are three apples"]
          },
          {
            fr: "J'ai quatre crayons.",
            en: ["I", "have", "four", "pencils"],
            wordIds: ["num-four"],
            accepts: ["I've got four pencils", "I have 4 pencils"]
          }
        ]
      },
      {
        id: "numbers-time-phrases-2",
        title: "Compter de cinq à huit",
        subtitle: "Encore plus de nombres",
        description: "Tu peux compter toujours plus loin.",
        words: [
          ["num-five", "Five", "Cinq"],
          ["num-six", "Six", "Six"],
          ["num-seven", "Seven", "Sept"],
          ["num-eight", "Eight", "Huit"]
        ],
        phrases: [
          {
            fr: "J'ai cinq autocollants.",
            en: ["I", "have", "five", "stickers"],
            wordIds: ["num-five"],
            accepts: ["I've got five stickers", "I have 5 stickers"]
          },
          {
            fr: "Il y a six oiseaux.",
            en: ["There", "are", "six", "birds"],
            wordIds: ["num-six"],
            accepts: ["There are 6 birds", "I can see six birds"]
          },
          {
            fr: "Je vois sept chiens.",
            en: ["I", "see", "seven", "dogs"],
            wordIds: ["num-seven"],
            accepts: ["I see 7 dogs", "I can see seven dogs"]
          },
          {
            fr: "J'ai huit ballons.",
            en: ["I", "have", "eight", "balloons"],
            wordIds: ["num-eight"],
            accepts: ["I've got eight balloons", "I have 8 balloons"]
          }
        ]
      },
      {
        id: "numbers-time-phrases-3",
        title: "Les jours de la semaine",
        subtitle: "Aujourd'hui et demain",
        description: "Découvre les jours que tu aimes.",
        words: [
          ["num-monday", "Monday", "Lundi"],
          ["num-tuesday", "Tuesday", "Mardi"],
          ["num-wednesday", "Wednesday", "Mercredi"],
          ["num-weekend", "Weekend", "Week-end"]
        ],
        phrases: [
          {
            fr: "Aujourd'hui, c'est lundi.",
            en: ["Today", "is", "Monday"],
            wordIds: ["num-monday"],
            accepts: ["It's Monday today", "Today is Monday"]
          },
          {
            fr: "Demain, c'est mardi.",
            en: ["Tomorrow", "is", "Tuesday"],
            wordIds: ["num-tuesday"],
            accepts: ["It's Tuesday tomorrow", "Tomorrow is Tuesday"]
          },
          {
            fr: "Le mercredi est mon jour préféré.",
            en: ["Wednesday", "is", "my", "favourite", "day"],
            wordIds: ["num-wednesday"],
            accepts: ["My favourite day is Wednesday", "Wednesday is my favorite day"]
          },
          {
            fr: "J'adore le week-end.",
            en: ["I", "love", "the", "weekend"],
            wordIds: ["num-weekend"],
            accepts: ["I really like the weekend", "I enjoy the weekend"]
          }
        ]
      },
      {
        id: "numbers-time-phrases-4",
        title: "Dire l'heure",
        subtitle: "Neuf, dix heures et demie",
        description: "Tu vas bientôt lire l'heure tout seul.",
        words: [
          ["num-nine", "Nine", "Neuf"],
          ["num-ten", "Ten", "Dix"],
          ["num-oclock", "O'clock", "Heures"],
          ["num-half-past", "Half past", "Et demie"]
        ],
        phrases: [
          {
            fr: "Il est neuf heures.",
            en: ["It", "is", "nine", "o'clock"],
            wordIds: ["num-nine", "num-oclock"],
            accepts: ["It's nine o'clock", "It is 9 o'clock"]
          },
          {
            fr: "Il est dix heures.",
            en: ["It", "is", "ten", "o'clock"],
            wordIds: ["num-ten", "num-oclock"],
            accepts: ["It's ten o'clock", "It is 10 o'clock"]
          },
          {
            fr: "Il est neuf heures et demie.",
            en: ["It", "is", "half", "past", "nine"],
            wordIds: ["num-half-past", "num-nine"],
            accepts: ["It's half past nine", "It is 9:30"]
          },
          {
            fr: "Il est dix heures et demie.",
            en: ["It", "is", "half", "past", "ten"],
            wordIds: ["num-half-past", "num-ten"],
            accepts: ["It's half past ten", "It is 10:30"]
          }
        ]
      },
      {
        id: "numbers-time-phrases-5",
        title: "Les repas de la journée",
        subtitle: "Du matin au soir",
        description: "Raconte ta journée avec ces phrases.",
        words: [
          ["num-wake-up", "Wake up", "Se réveiller"],
          ["num-breakfast", "Breakfast", "Petit-déjeuner"],
          ["num-lunch", "Lunch", "Déjeuner"],
          ["num-dinner", "Dinner", "Dîner"]
        ],
        phrases: [
          {
            fr: "Je me réveille à sept heures.",
            en: ["I", "wake", "up", "at", "seven"],
            wordIds: ["num-wake-up", "num-seven"],
            accepts: ["I get up at seven", "I wake up at 7"]
          },
          {
            fr: "Je prends mon petit-déjeuner à huit heures.",
            en: ["I", "eat", "breakfast", "at", "eight"],
            wordIds: ["num-breakfast", "num-eight"],
            accepts: ["I have breakfast at eight", "I eat breakfast at 8"]
          },
          {
            fr: "Je déjeune à midi.",
            en: ["I", "eat", "lunch", "at", "noon"],
            wordIds: ["num-lunch"],
            accepts: ["I have lunch at noon", "I eat lunch at 12"]
          },
          {
            fr: "Je dîne avec ma famille.",
            en: ["I", "eat", "dinner", "with", "my", "family"],
            wordIds: ["num-dinner"],
            accepts: ["I have dinner with my family", "I eat dinner with my family"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "numbers-time-chat-1",
        title: "Le panier de fruits",
        subtitle: "Compter et partager",
        description: "Compte les fruits puis imagine ton plan.",
        context: "Mia apporte un panier de fruits pour le goûter.",
        words: [
          ["num-how-many", "How many", "Combien"],
          ["num-apple", "Apple", "Pomme"],
          ["num-banana", "Banana", "Banane"],
          ["num-basket", "Basket", "Panier"]
        ],
        turns: [
          {
            speaker: "Mia",
            en: "How many apples do you have?",
            fr: "Combien de pommes as-tu ?",
            options: ["I have three apples.", "I have one pencil.", "I like apples."],
            answer: "I have three apples.",
            accepts: ["I've got three apples", "I have 3 apples"],
            wordIds: ["num-how-many", "num-apple", "num-three"]
          },
          {
            speaker: "Mia",
            en: "How many bananas are in the basket?",
            fr: "Combien de bananes y a-t-il dans le panier ?",
            options: ["There are five bananas.", "There are four books.", "I have lunch."],
            answer: "There are five bananas.",
            accepts: ["There are 5 bananas", "I have five bananas"],
            wordIds: ["num-banana", "num-basket", "num-five"]
          },
          {
            speaker: "Mia",
            en: "Can you count them, please?",
            fr: "Peux-tu les compter, s'il te plaît ?",
            options: ["One, two, three, four, five.", "Red, blue, green, and yellow.", "Monday, Tuesday, Wednesday."],
            answer: "One, two, three, four, five.",
            accepts: ["1, 2, 3, 4, 5", "One two three four five"],
            wordIds: ["num-how-many", "num-one", "num-two", "num-three", "num-four", "num-five"]
          },
          {
            speaker: "Mia",
            en: "What will you do with the fruit?",
            fr: "Que vas-tu faire avec les fruits ?",
            options: ["I will share all the fruit with Sam.", "I will count to ten.", "It is half past nine."],
            answer: "I will share all the fruit with Sam.",
            accepts: ["I'm going to share all the fruit with Sam", "I'll share the fruit with Sam"],
            wordIds: ["num-apple", "num-banana"]
          }
        ]
      },
      {
        id: "numbers-time-chat-2",
        title: "Quel jour sommes-nous ?",
        subtitle: "Hier, aujourd'hui et demain",
        description: "Parle de tes journées avec des phrases complètes.",
        context: "Sam prépare son emploi du temps avec toi.",
        words: [
          ["num-day", "Day", "Jour"],
          ["num-tomorrow", "Tomorrow", "Demain"],
          ["num-favourite", "Favourite", "Préféré / Préférée"],
          ["num-school-day", "School day", "Jour d'école"]
        ],
        turns: [
          {
            speaker: "Sam",
            en: "What day is it today?",
            fr: "Quel jour sommes-nous aujourd'hui ?",
            options: ["Today is Wednesday.", "Today is my birthday.", "I am nine."],
            answer: "Today is Wednesday.",
            accepts: ["It's Wednesday today", "Today is Wednesday"],
            wordIds: ["num-day", "num-wednesday"]
          },
          {
            speaker: "Sam",
            en: "What day is tomorrow?",
            fr: "Quel jour sera demain ?",
            options: ["Tomorrow is Thursday.", "Tomorrow is Friday.", "Tomorrow is Monday."],
            answer: "Tomorrow is Thursday.",
            accepts: ["It's Thursday tomorrow", "Tomorrow is Thursday"],
            wordIds: ["num-tomorrow"]
          },
          {
            speaker: "Sam",
            en: "What is your favourite school day?",
            fr: "Quel est ton jour d'école préféré ?",
            options: ["Friday is my favourite.", "Monday is my favourite.", "Wednesday is my favourite."],
            answer: "Friday is my favourite.",
            accepts: ["My favourite school day is Friday", "I like Friday best"],
            wordIds: ["num-favourite", "num-school-day"]
          },
          {
            speaker: "Sam",
            en: "What will you do on Friday?",
            fr: "Que vas-tu faire vendredi ?",
            options: ["I will play football with my friends.", "I will eat breakfast at noon.", "I will read on Monday."],
            answer: "I will play football with my friends.",
            accepts: ["I'm going to play football with my friends", "I'll play football with my friends"],
            wordIds: ["num-favourite", "num-school-day"]
          }
        ]
      },
      {
        id: "numbers-time-chat-3",
        title: "Ma journée d'école",
        subtitle: "Les heures et les projets",
        description: "Donne les heures et parle de ton avenir.",
        context: "Ton professeur te pose des questions sur ta journée.",
        words: [
          ["num-get-up", "Get up", "Se lever"],
          ["num-start", "Start", "Commencer"],
          ["num-finish", "Finish", "Terminer"],
          ["num-early", "Early", "Tôt"]
        ],
        turns: [
          {
            speaker: "Teacher",
            en: "What time do you get up?",
            fr: "À quelle heure te lèves-tu ?",
            options: ["I get up at seven o'clock.", "I get up at noon.", "I finish school at five."],
            answer: "I get up at seven o'clock.",
            accepts: ["I get up at seven", "I get up at seven o'clock"],
            wordIds: ["num-get-up", "num-seven", "num-oclock"]
          },
          {
            speaker: "Teacher",
            en: "What time does school start?",
            fr: "À quelle heure commence l'école ?",
            options: ["School usually starts at nine o'clock.", "School starts at ten o'clock.", "I get up at seven."],
            answer: "School usually starts at nine o'clock.",
            accepts: ["School starts at nine", "It starts at nine o'clock"],
            wordIds: ["num-start", "num-nine", "num-oclock"]
          },
          {
            speaker: "Teacher",
            en: "What time do you finish school?",
            fr: "À quelle heure finis-tu l'école ?",
            options: ["I usually finish school at four o'clock.", "I start school at nine.", "I eat lunch at noon."],
            answer: "I usually finish school at four o'clock.",
            accepts: ["I finish school at four", "School finishes at four o'clock"],
            wordIds: ["num-finish", "num-four", "num-oclock"]
          },
          {
            speaker: "Teacher",
            en: "Will you get up early tomorrow?",
            fr: "Est-ce que tu te lèveras tôt demain ?",
            options: ["Yes, I will get up early tomorrow.", "No, I will finish at nine.", "I start school at four."],
            answer: "Yes, I will get up early tomorrow.",
            accepts: ["Yes, I'm going to get up early", "Yes, I will"],
            wordIds: ["num-early", "num-tomorrow", "num-get-up"]
          }
        ]
      },
      {
        id: "numbers-time-chat-4",
        title: "Le week-end de Léa",
        subtitle: "Le passé et les projets",
        description: "Raconte le passé et prépare la suite.",
        context: "Mia te demande ce que tu as fait et ce que tu vas faire.",
        words: [
          ["num-yesterday", "Yesterday", "Hier"],
          ["num-last", "Last", "Dernier / Dernière"],
          ["num-next", "Next", "Prochain / Prochaine"],
          ["num-plan", "Plan", "Projet"]
        ],
        turns: [
          {
            speaker: "Mia",
            en: "What did you do yesterday?",
            fr: "Qu'as-tu fait hier ?",
            options: ["I played in the park.", "I will play tomorrow.", "I play every day."],
            answer: "I played in the park.",
            accepts: ["I was playing in the park", "I played outside"],
            wordIds: ["num-yesterday"]
          },
          {
            speaker: "Mia",
            en: "Who did you play with last weekend?",
            fr: "Avec qui as-tu joué le week-end dernier ?",
            options: ["I played with my cousin.", "I played with my pencil.", "I will play with Sam."],
            answer: "I played with my cousin.",
            accepts: ["I played with my cousin last weekend", "My cousin played with me"],
            wordIds: ["num-last", "num-weekend"]
          },
          {
            speaker: "Mia",
            en: "What will you do next weekend?",
            fr: "Que vas-tu faire le week-end prochain ?",
            options: ["I will visit my grandparents on Saturday.", "I visited them yesterday.", "I have three apples."],
            answer: "I will visit my grandparents on Saturday.",
            accepts: ["I'm going to visit my grandparents", "I'll visit my grandparents on Saturday"],
            wordIds: ["num-next", "num-weekend"]
          },
          {
            speaker: "Mia",
            en: "Can you tell me your plan?",
            fr: "Peux-tu me raconter ton projet ?",
            options: ["I will visit my grandparents and play outside.", "I will have lunch and eat dinner.", "I played in the park last weekend."],
            answer: "I will visit my grandparents and play outside.",
            accepts: ["My plan is to visit my grandparents", "I'll visit my grandparents and play outside"],
            wordIds: ["num-plan"]
          }
        ]
      }
    ]
  },
  "home-city": {
    phrases: [
      {
        id: "home-city-phrases-1",
        title: "Les pièces de la maison",
        subtitle: "Chez moi",
        description: "Présente les pièces de ta maison.",
        words: [
          ["home-house", "House", "Maison"],
          ["home-room", "Room", "Pièce"],
          ["home-kitchen", "Kitchen", "Cuisine"],
          ["home-bedroom", "Bedroom", "Chambre"]
        ],
        phrases: [
          {
            fr: "Voici ma maison.",
            en: ["This", "is", "my", "house"],
            wordIds: ["home-house"],
            accepts: ["This is my home", "Here is my house"]
          },
          {
            fr: "Je suis dans ma chambre.",
            en: ["I", "am", "in", "my", "room"],
            wordIds: ["home-room"],
            accepts: ["I'm in my room", "I am in my bedroom"]
          },
          {
            fr: "Nous cuisinons dans la cuisine.",
            en: ["We", "cook", "in", "the", "kitchen"],
            wordIds: ["home-kitchen"],
            accepts: ["We cook in our kitchen", "We're cooking in the kitchen"]
          },
          {
            fr: "Je dors dans ma chambre.",
            en: ["I", "sleep", "in", "my", "bedroom"],
            wordIds: ["home-bedroom"],
            accepts: ["I sleep in my room", "I'm sleeping in my bedroom"]
          }
        ]
      },
      {
        id: "home-city-phrases-2",
        title: "Dans le salon",
        subtitle: "S'asseoir et se reposer",
        description: "Décris les meubles de ton salon.",
        words: [
          ["home-living-room", "Living room", "Salon"],
          ["home-sofa", "Sofa", "Canapé"],
          ["home-chair", "Chair", "Chaise"],
          ["home-table", "Table", "Table"]
        ],
        phrases: [
          {
            fr: "Nous nous asseyons dans le salon.",
            en: ["We", "sit", "in", "the", "living", "room"],
            wordIds: ["home-living-room"],
            accepts: ["We're sitting in the living room", "We sit in our living room"]
          },
          {
            fr: "Le canapé est doux.",
            en: ["The", "sofa", "is", "soft"],
            wordIds: ["home-sofa"],
            accepts: ["The couch is soft", "The sofa is comfy"]
          },
          {
            fr: "La chaise est bleue.",
            en: ["The", "chair", "is", "blue"],
            wordIds: ["home-chair"],
            accepts: ["My chair is blue", "The chair is blue"]
          },
          {
            fr: "Nous mangeons à table.",
            en: ["We", "eat", "at", "the", "table"],
            wordIds: ["home-table"],
            accepts: ["We're eating at the table", "We eat dinner at the table"]
          }
        ]
      },
      {
        id: "home-city-phrases-3",
        title: "Les lieux de ma ville",
        subtitle: "La rue, le parc et les magasins",
        description: "Pars à la découverte de ta ville.",
        words: [
          ["home-city", "City", "Ville"],
          ["home-street", "Street", "Rue"],
          ["home-park", "Park", "Parc"],
          ["home-shop", "Shop", "Magasin"]
        ],
        phrases: [
          {
            fr: "J'habite dans une grande ville.",
            en: ["I", "live", "in", "a", "big", "city"],
            wordIds: ["home-city"],
            accepts: ["I live in a large city", "I'm living in a big city"]
          },
          {
            fr: "Notre rue est calme.",
            en: ["Our", "street", "is", "quiet"],
            wordIds: ["home-street"],
            accepts: ["My street is quiet", "The street is quiet"]
          },
          {
            fr: "Je joue dans le parc.",
            en: ["I", "play", "in", "the", "park"],
            wordIds: ["home-park"],
            accepts: ["I'm playing in the park", "I like playing in the park"]
          },
          {
            fr: "Nous achetons du pain au magasin.",
            en: ["We", "buy", "bread", "at", "the", "shop"],
            wordIds: ["home-shop"],
            accepts: ["We buy bread at the store", "We're buying bread at the shop"]
          }
        ]
      },
      {
        id: "home-city-phrases-4",
        title: "Les moyens de transport",
        subtitle: "En route !",
        description: "Choisis comment tu veux te déplacer.",
        words: [
          ["home-bus", "Bus", "Bus"],
          ["home-train", "Train", "Train"],
          ["home-bike", "Bike", "Vélo"],
          ["home-car", "Car", "Voiture"]
        ],
        phrases: [
          {
            fr: "Je vais en bus.",
            en: ["I", "go", "by", "bus"],
            wordIds: ["home-bus"],
            accepts: ["I take the bus", "I'm going by bus"]
          },
          {
            fr: "Le train est rapide.",
            en: ["The", "train", "is", "fast"],
            wordIds: ["home-train"],
            accepts: ["The train is quick", "Trains are fast"]
          },
          {
            fr: "Je fais du vélo.",
            en: ["I", "ride", "my", "bike"],
            wordIds: ["home-bike"],
            accepts: ["I'm riding my bike", "I ride a bike"]
          },
          {
            fr: "Nous allons en voiture.",
            en: ["We", "go", "by", "car"],
            wordIds: ["home-car"],
            accepts: ["We're going by car", "We travel by car"]
          }
        ]
      },
      {
        id: "home-city-phrases-5",
        title: "J'aide à la maison",
        subtitle: "De petites tâches utiles",
        description: "Chaque petite action aide toute la famille.",
        words: [
          ["home-clean", "Clean", "Nettoyer"],
          ["home-sweep", "Sweep", "Balayer"],
          ["home-tidy", "Tidy", "Ranger"],
          ["home-water", "Water", "Arroser"]
        ],
        phrases: [
          {
            fr: "Je nettoie ma chambre.",
            en: ["I", "clean", "my", "room"],
            wordIds: ["home-clean", "home-room"],
            accepts: ["I'm cleaning my room", "I clean my bedroom"]
          },
          {
            fr: "Je balaie le sol.",
            en: ["I", "sweep", "the", "floor"],
            wordIds: ["home-sweep"],
            accepts: ["I'm sweeping the floor", "I sweep the floor"]
          },
          {
            fr: "Je range mon lit.",
            en: ["I", "tidy", "my", "bed"],
            wordIds: ["home-tidy"],
            accepts: ["I tidy up my bed", "I make my bed"]
          },
          {
            fr: "J'arrose les plantes.",
            en: ["I", "water", "the", "plants"],
            wordIds: ["home-water"],
            accepts: ["I'm watering the plants", "I water my plants"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "home-city-chat-1",
        title: "La visite de ma maison",
        subtitle: "Une maison confortable",
        description: "Décris ta maison avec des mots simples et précis.",
        context: "Sam découvre ta maison et ton jardin.",
        words: [
          ["home-door", "Door", "Porte"],
          ["home-window", "Window", "Fenêtre"],
          ["home-garden", "Garden", "Jardin"],
          ["home-comfortable", "Comfortable", "Confortable"]
        ],
        turns: [
          {
            speaker: "Sam",
            en: "What does your house look like?",
            fr: "Comment est ta maison ?",
            options: ["My house is small and comfortable.", "My house is big and sunny.", "My house has a red door."],
            answer: "My house is small and comfortable.",
            accepts: ["My house is small and cosy", "My house is comfortable"],
            wordIds: ["home-house", "home-comfortable"]
          },
          {
            speaker: "Sam",
            en: "Do you have a garden?",
            fr: "As-tu un jardin ?",
            options: ["Yes, I have a small garden.", "No, there is no garden.", "My garden is at school."],
            answer: "Yes, I have a small garden.",
            accepts: ["Yes, I do", "Yes, there is a garden"],
            wordIds: ["home-garden"]
          },
          {
            speaker: "Sam",
            en: "What do you see when you open the door?",
            fr: "Que vois-tu quand tu ouvres la porte ?",
            options: ["I see a tree and the street.", "I see a pencil and a book.", "I see three birds at school."],
            answer: "I see a tree and the street.",
            accepts: ["I see the street and a tree", "There is a tree and the street"],
            wordIds: ["home-door", "home-street"]
          },
          {
            speaker: "Sam",
            en: "What can you see through your bedroom window?",
            fr: "Que peux-tu voir par la fenêtre de ta chambre ?",
            options: ["I can see the garden and the big tree.", "I can see a pencil and a book.", "I can see three birds at school."],
            answer: "I can see the garden and the big tree.",
            accepts: ["I can see the garden and a tree", "I see the garden and the big tree"],
            wordIds: ["home-window", "home-garden", "home-bedroom"]
          }
        ]
      },
      {
        id: "home-city-chat-2",
        title: "Se promener en ville",
        subtitle: "Trouver la bibliothèque",
        description: "Donne des indications simples pour te promener.",
        context: "Mia cherche la bibliothèque et te demande le chemin.",
        words: [
          ["home-near", "Near", "Près de"],
          ["home-next-to", "Next to", "À côté de"],
          ["home-library", "Library", "Bibliothèque"],
          ["home-bridge", "Bridge", "Pont"]
        ],
        turns: [
          {
            speaker: "Mia",
            en: "Where is the library?",
            fr: "Où est la bibliothèque ?",
            options: ["It is near the park.", "It is behind the school.", "It is next to the bus station."],
            answer: "It is near the park.",
            accepts: ["It's near the park", "The library is near the park"],
            wordIds: ["home-library", "home-near", "home-park"]
          },
          {
            speaker: "Mia",
            en: "Is the shop next to the library?",
            fr: "Le magasin est-il à côté de la bibliothèque ?",
            options: ["Yes, it is next to the library.", "No, it is across the street.", "Yes, it is behind the park."],
            answer: "Yes, it is next to the library.",
            accepts: ["Yes, it is", "It's next to the library"],
            wordIds: ["home-next-to", "home-library", "home-shop"]
          },
          {
            speaker: "Mia",
            en: "How do you get to the library?",
            fr: "Comment vas-tu à la bibliothèque ?",
            options: ["I walk to the library with my mum.", "I ride my bike to the library.", "I take the bus to the library."],
            answer: "I walk to the library with my mum.",
            accepts: ["I go to the library with my mum", "I walk there with my mum"],
            wordIds: ["home-library"]
          },
          {
            speaker: "Mia",
            en: "What do you see when you cross the bridge?",
            fr: "Que vois-tu quand tu traverses le pont ?",
            options: ["When I cross the bridge, I see boats.", "I see people walking by.", "I see the shop across the river."],
            answer: "When I cross the bridge, I see boats.",
            accepts: ["I can see boats when I cross the bridge", "I see boats on the river"],
            wordIds: ["home-bridge"]
          }
        ]
      },
      {
        id: "home-city-chat-3",
        title: "Traverser en sécurité",
        subtitle: "À gauche, à droite et tout droit",
        description: "Explique le chemin avec prudence.",
        context: "Sam veut aller au parc et te demande comment faire.",
        words: [
          ["home-left", "Left", "Gauche"],
          ["home-right", "Right", "Droite"],
          ["home-cross", "Cross", "Traverser"],
          ["home-traffic-light", "Traffic light", "Feu de circulation"]
        ],
        turns: [
          {
            speaker: "Sam",
            en: "How do you cross the street?",
            fr: "Comment traverses-tu la rue ?",
            options: ["First, I look left and right.", "I wait for the green light.", "I walk on the pavement."],
            answer: "First, I look left and right.",
            accepts: ["I look left and right", "I look both ways"],
            wordIds: ["home-left", "home-right", "home-cross"]
          },
          {
            speaker: "Sam",
            en: "What do you do at a red traffic light?",
            fr: "Que fais-tu à un feu rouge ?",
            options: ["I stop and wait for the green light.", "I stop and look around.", "I wait for my friend."],
            answer: "I stop and wait for the green light.",
            accepts: ["I stop and wait", "I wait for the green light"],
            wordIds: ["home-traffic-light"]
          },
          {
            speaker: "Sam",
            en: "Can you tell me how to get to the park?",
            fr: "Peux-tu me dire comment aller au parc ?",
            options: ["Turn left, then cross the street and go straight.", "Turn right, then walk to the shop.", "Go straight and cross the bridge."],
            answer: "Turn left, then cross the street and go straight.",
            accepts: ["Turn left and cross the street", "Turn left, cross the street, then go straight"],
            wordIds: ["home-left", "home-cross", "home-park"]
          },
          {
            speaker: "Sam",
            en: "Where will you go after school tomorrow?",
            fr: "Où vas-tu aller après l'école demain ?",
            options: ["Tomorrow, I will go to the park with Sam.", "I went to the park yesterday.", "I will go to the library with Mia."],
            answer: "Tomorrow, I will go to the park with Sam.",
            accepts: ["I will go to the park with Sam", "I'm going to the park with Sam tomorrow"],
            wordIds: ["home-park"]
          }
        ]
      },
      {
        id: "home-city-chat-4",
        title: "Les petites tâches",
        subtitle: "Aider et prendre soin",
        description: "Raconte ce que tu fais à la maison, quelle aide précieuse !",
        context: "Mia veut connaître tes petites tâches et ton animal.",
        words: [
          ["home-laundry", "Laundry", "Linge"],
          ["home-dishes", "Dishes", "Vaisselle"],
          ["home-feed", "Feed", "Nourrir"],
          ["home-pet", "Pet", "Animal de compagnie"]
        ],
        turns: [
          {
            speaker: "Mia",
            en: "How do you help at home?",
            fr: "Comment aides-tu à la maison ?",
            options: ["I clean my room every day.", "I set the table before dinner.", "I walk the dog after lunch."],
            answer: "I clean my room every day.",
            accepts: ["I clean my room", "Every day, I clean my room"],
            wordIds: ["home-clean", "home-room"]
          },
          {
            speaker: "Mia",
            en: "Do you help with the dishes?",
            fr: "Aides-tu à faire la vaisselle ?",
            options: ["I help wash the dishes after lunch.", "I help water the plants after lunch.", "I help sweep the floor after lunch."],
            answer: "I help wash the dishes after lunch.",
            accepts: ["Yes, I help with the dishes", "I wash the dishes after lunch"],
            wordIds: ["home-dishes"]
          },
          {
            speaker: "Mia",
            en: "Do you have a pet at home?",
            fr: "As-tu un animal de compagnie à la maison ?",
            options: ["Yes, I have a little dog at home.", "No, I do not have a pet.", "My sister has a little cat."],
            answer: "Yes, I have a little dog at home.",
            accepts: ["Yes, I have a dog", "Yes, I do"],
            wordIds: ["home-pet"]
          },
          {
            speaker: "Mia",
            en: "What do you do for your dog?",
            fr: "Que fais-tu pour ton chien ?",
            options: ["I feed my dog and help with the laundry.", "I brush my dog after dinner.", "I play with my dog in the garden."],
            answer: "I feed my dog and help with the laundry.",
            accepts: ["I feed my dog and help with laundry", "I feed him and help with the laundry"],
            wordIds: ["home-feed", "home-pet", "home-laundry"]
          }
        ]
      }
    ]
  }
};

const PRACTICE_CONTENT_DAILY = {
  "food-shopping": {
    phrases: [
      {
        id: "food-shopping-phrases-1",
        title: "À la boulangerie",
        subtitle: "Parle avec politesse",
        description: "Ose ta première commande, petit gourmand !",
        words: [
          ["food-bread", "Bread", "Pain"],
          ["food-baguette", "Baguette", "Baguette"],
          ["food-bakery", "Bakery", "Boulangerie"],
          ["food-politely", "Politely", "Poliment"]
        ],
        phrases: [
          {
            fr: "Je voudrais du pain, s'il te plaît.",
            en: ["I'd", "like", "some", "bread", "please"],
            wordIds: ["food-bread", "food-politely"],
            accepts: ["I would like some bread please", "I want some bread please"]
          },
          {
            fr: "Une baguette, s'il vous plaît.",
            en: ["A", "baguette", "please"],
            wordIds: ["food-baguette", "food-politely"],
            accepts: ["One baguette please", "I would like a baguette please"]
          },
          {
            fr: "Il y a une boulangerie près d'ici ?",
            en: ["Is", "there", "a", "bakery", "nearby"],
            wordIds: ["food-bakery"],
            accepts: ["Is there a bakery near here", "Is the bakery nearby"]
          },
          {
            fr: "Je voudrais deux baguettes, merci.",
            en: ["I'd", "like", "two", "baguettes", "please"],
            wordIds: ["food-baguette", "food-politely"],
            accepts: ["I would like two baguettes please", "Two baguettes please"]
          }
        ]
      },
      {
        id: "food-shopping-phrases-2",
        title: "Un petit-déjeuner gourmand",
        subtitle: "Choisis ton menu",
        description: "De bons mots pour bien commencer la journée !",
        words: [
          ["food-breakfast", "Breakfast", "Petit-déjeuner"],
          ["food-croissant", "Croissant", "Croissant"],
          ["food-jam", "Jam", "Confiture"],
          ["food-juice", "Juice", "Jus"]
        ],
        phrases: [
          {
            fr: "Je mange un croissant au petit-déjeuner.",
            en: ["I", "eat", "a", "croissant", "for", "breakfast"],
            wordIds: ["food-croissant", "food-breakfast"]
          },
          {
            fr: "Je voudrais du jus d'orange, s'il te plaît.",
            en: ["I'd", "like", "some", "orange", "juice", "please"],
            wordIds: ["food-juice", "food-politely"],
            accepts: ["I would like some orange juice please", "Can I have some orange juice please"]
          },
          {
            fr: "Tu veux de la confiture ?",
            en: ["Do", "you", "want", "some", "jam"],
            wordIds: ["food-jam"]
          },
          {
            fr: "Un croissant et un jus, s'il vous plaît.",
            en: ["A", "croissant", "and", "a", "juice", "please"],
            wordIds: ["food-croissant", "food-juice", "food-politely"],
            accepts: ["One croissant and one juice please", "Can I have a croissant and a juice please"]
          }
        ]
      },
      {
        id: "food-shopping-phrases-3",
        title: "Au marché",
        subtitle: "Des fruits bien frais",
        description: "Chaque nouveau mot est un fruit dans ton panier !",
        words: [
          ["food-apple", "Apple", "Pomme"],
          ["food-strawberry", "Strawberry", "Fraise"],
          ["food-market", "Market", "Marché"],
          ["food-fresh", "Fresh", "Frais"]
        ],
        phrases: [
          {
            fr: "Je voudrais des pommes, s'il te plaît.",
            en: ["I'd", "like", "some", "apples", "please"],
            wordIds: ["food-apple", "food-politely"],
            accepts: ["I would like some apples please", "Some apples please"]
          },
          {
            fr: "Ces fraises sont-elles fraîches ?",
            en: ["Are", "these", "strawberries", "fresh"],
            wordIds: ["food-strawberry", "food-fresh"]
          },
          {
            fr: "Le marché se trouve près de chez moi.",
            en: ["The", "market", "is", "near", "my", "home"],
            wordIds: ["food-market"]
          },
          {
            fr: "Je peux goûter une fraise ?",
            en: ["Can", "I", "try", "a", "strawberry"],
            wordIds: ["food-strawberry"],
            accepts: ["May I try a strawberry", "Can I taste a strawberry"]
          }
        ]
      },
      {
        id: "food-shopping-phrases-4",
        title: "Au supermarché",
        subtitle: "Trouve ce qu'il te faut",
        description: "Fais ta liste et pars à l'aventure !",
        words: [
          ["food-milk", "Milk", "Lait"],
          ["food-cheese", "Cheese", "Fromage"],
          ["food-price", "Price", "Prix"],
          ["food-supermarket", "Supermarket", "Supermarché"]
        ],
        phrases: [
          {
            fr: "Où est le lait, s'il te plaît ?",
            en: ["Where", "is", "the", "milk", "please"],
            wordIds: ["food-milk", "food-politely"],
            accepts: ["Where can I find the milk please", "Where's the milk please"]
          },
          {
            fr: "Combien coûte ce fromage ?",
            en: ["How", "much", "is", "this", "cheese"],
            wordIds: ["food-cheese", "food-price"],
            accepts: ["What's the price of this cheese", "How much does this cheese cost"]
          },
          {
            fr: "Nous allons au supermarché.",
            en: ["We", "are", "going", "to", "the", "supermarket"],
            wordIds: ["food-supermarket"],
            accepts: ["We're going to the supermarket", "We go to the supermarket"]
          },
          {
            fr: "Je voudrais une brique de lait.",
            en: ["I'd", "like", "a", "carton", "of", "milk"],
            wordIds: ["food-milk"],
            accepts: ["I would like a carton of milk", "I want a carton of milk"]
          }
        ]
      },
      {
        id: "food-shopping-phrases-5",
        title: "Panier et goûts",
        subtitle: "Choisis avec envie",
        description: "Bravo, ton vocabulaire prend de belles couleurs !",
        words: [
          ["food-crisps", "Crisps", "Chips"],
          ["food-chocolate", "Chocolate", "Chocolat"],
          ["food-favourite", "Favourite", "Préféré"],
          ["food-shopping-list", "Shopping list", "Liste de courses"]
        ],
        phrases: [
          {
            fr: "Les chips sont mon en-cas préféré.",
            en: ["Crisps", "are", "my", "favourite", "snack"],
            wordIds: ["food-crisps", "food-favourite"],
            accepts: ["Crisps are my favorite snack"]
          },
          {
            fr: "Je n'aime pas le chocolat noir.",
            en: ["I", "don't", "like", "dark", "chocolate"],
            wordIds: ["food-chocolate"],
            accepts: ["I do not like dark chocolate"]
          },
          {
            fr: "Quel est ton fruit préféré ?",
            en: ["What's", "your", "favourite", "fruit"],
            wordIds: ["food-favourite"],
            accepts: ["What is your favorite fruit"]
          },
          {
            fr: "Le chocolat est sur ma liste de courses.",
            en: ["The", "chocolate", "is", "on", "my", "shopping", "list"],
            wordIds: ["food-chocolate", "food-shopping-list"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "food-shopping-chat-1",
        title: "Une pause au café",
        subtitle: "Commande avec le sourire",
        description: "Le serveur est prêt, à toi de jouer !",
        context: "Tu as faim et tu commandes un encas au café.",
        words: [
          ["food-order", "Order", "Commander"],
          ["food-sandwich", "Sandwich", "Sandwich"],
          ["food-thirsty", "Thirsty", "Assoiffé"],
          ["food-water", "Water", "Eau"]
        ],
        turns: [
          {
            speaker: "Café server",
            en: "Hi! What would you like?",
            fr: "Bonjour ! Que voudrais-tu ?",
            options: ["I'd like a sandwich, please.", "I am hungry.", "The table is blue."],
            answer: "I'd like a sandwich, please.",
            accepts: ["I would like a sandwich please", "I want a sandwich please"],
            wordIds: ["food-order", "food-sandwich"]
          },
          {
            speaker: "Café server",
            en: "What would you like to drink?",
            fr: "Que voudrais-tu boire ?",
            options: ["The sandwich is big.", "Some water, please.", "I like cafés."],
            answer: "Some water, please.",
            accepts: ["I would like some water please", "Water please"],
            wordIds: ["food-water", "food-politely"]
          },
          {
            speaker: "Café server",
            en: "Are you thirsty?",
            fr: "Tu as soif ?",
            options: ["Yes, I'm very thirsty.", "Yes, it's a chair.", "No, I'm a sandwich."],
            answer: "Yes, I'm very thirsty.",
            accepts: ["Yes I am very thirsty", "Yes I'm thirsty"],
            wordIds: ["food-thirsty"]
          },
          {
            speaker: "Café server",
            en: "Anything else with your order?",
            fr: "Autre chose avec ta commande ?",
            options: ["No, thank you. That's all.", "No, thank you. That's all, please.", "No, thank you. The water is blue."],
            answer: "No, thank you. That's all.",
            accepts: ["No thank you that's all", "Nothing else thank you"],
            wordIds: ["food-order", "food-politely"]
          }
        ]
      },
      {
        id: "food-shopping-chat-2",
        title: "Goûts et dégustation",
        subtitle: "Dis ce que tu aimes",
        description: "Ton opinion compte, même en anglais !",
        context: "Une amie te fait goûter des fruits au marché.",
        words: [
          ["food-taste", "Taste", "Goût"],
          ["food-sweet", "Sweet", "Sucré"],
          ["food-delicious", "Delicious", "Délicieux"],
          ["food-try", "Try", "Goûter"]
        ],
        turns: [
          {
            speaker: "Market friend",
            en: "Do you like strawberries?",
            fr: "Tu aimes les fraises ?",
            options: ["Yes, I like them.", "Yes, it's red.", "No, I'm a market."],
            answer: "Yes, I like them.",
            accepts: ["Yes I love them", "Yes I like strawberries"],
            wordIds: ["food-strawberry"]
          },
          {
            speaker: "Market friend",
            en: "Are they sweet?",
            fr: "Sont-elles sucrées ?",
            options: ["They are shoes.", "Yes, they're very sweet.", "Yes, I'm sweet."],
            answer: "Yes, they're very sweet.",
            accepts: ["Yes they are very sweet", "They're sweet"],
            wordIds: ["food-sweet"]
          },
          {
            speaker: "Market friend",
            en: "Would you like to try an apple?",
            fr: "Voudrais-tu goûter une pomme ?",
            options: ["The apple is green.", "I'd like to try it, please.", "I like tables."],
            answer: "I'd like to try it, please.",
            accepts: ["I would like to try it please", "Yes please"],
            wordIds: ["food-apple", "food-try"]
          },
          {
            speaker: "Market friend",
            en: "What do you think of its taste?",
            fr: "Que penses-tu de son goût ?",
            options: ["It's a nice day.", "It tastes delicious.", "It's my shoe."],
            answer: "It tastes delicious.",
            accepts: ["It is delicious", "It's delicious"],
            wordIds: ["food-taste", "food-delicious"]
          }
        ]
      },
      {
        id: "food-shopping-chat-3",
        title: "La liste de courses",
        subtitle: "Trouve les bons produits",
        description: "Un panier bien rempli, une mission réussie !",
        context: "Tu aides un adulte à faire les courses au supermarché.",
        words: [
          ["food-find", "Find", "Trouver"],
          ["food-need", "Need", "Avoir besoin de"],
          ["food-basket", "Basket", "Panier"],
          ["food-help", "Help", "Aider"]
        ],
        turns: [
          {
            speaker: "Shop assistant",
            en: "Can I help you?",
            fr: "Je peux t'aider ?",
            options: ["Yes, please help me.", "Yes, I'm a banana.", "No, it's sunny."],
            answer: "Yes, please help me.",
            accepts: ["Yes please", "Can you help me please"],
            wordIds: ["food-help"]
          },
          {
            speaker: "Shop assistant",
            en: "What do you need?",
            fr: "De quoi as-tu besoin ?",
            options: ["I need some milk.", "The market is open.", "My basket is yellow."],
            answer: "I need some milk.",
            accepts: ["I need milk", "We need some milk"],
            wordIds: ["food-need", "food-milk"]
          },
          {
            speaker: "Shop assistant",
            en: "Where is the milk?",
            fr: "Où se trouve le lait ?",
            options: ["It's Tuesday.", "It's in the fridge.", "It's very cold outside."],
            answer: "It's in the fridge.",
            accepts: ["It is in the fridge", "In the fridge"],
            wordIds: ["food-find", "food-milk"]
          },
          {
            speaker: "Shop assistant",
            en: "Is there anything else you need?",
            fr: "As-tu besoin d'autre chose ?",
            options: ["Yes, I can swim.", "Yes, I need some apples.", "No, the basket is full of shoes."],
            answer: "Yes, I need some apples.",
            accepts: ["Yes I need apples", "I also need some apples"],
            wordIds: ["food-need", "food-basket", "food-apple"]
          }
        ]
      },
      {
        id: "food-shopping-chat-4",
        title: "Un pique-nique surprise",
        subtitle: "Prépare un futur goûter",
        description: "Avec tes réponses, le pique-nique sera parfait !",
        context: "Tu prépares un pique-nique avec un ami pour demain.",
        words: [
          ["food-picnic", "Picnic", "Pique-nique"],
          ["food-pack", "Pack", "Préparer"],
          ["food-bring", "Bring", "Apporter"],
          ["food-tomorrow", "Tomorrow", "Demain"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What's your favourite picnic food?",
            fr: "Quel est ton aliment préféré pour un pique-nique ?",
            options: ["My favourite food is pizza.", "My picnic is green.", "I like Sunday."],
            answer: "My favourite food is pizza.",
            accepts: ["My favorite food is pizza", "Pizza is my favourite food"],
            wordIds: ["food-picnic", "food-favourite"]
          },
          {
            speaker: "Friend",
            en: "I'll bring fruit. What will you bring?",
            fr: "J'apporterai des fruits. Qu'apporteras-tu ?",
            options: ["I will bring some sandwiches.", "I brought my school bag.", "The fruit is on the table."],
            answer: "I will bring some sandwiches.",
            accepts: ["I'll bring sandwiches", "I'll bring some sandwiches"],
            wordIds: ["food-bring", "food-sandwich", "food-picnic"]
          },
          {
            speaker: "Friend",
            en: "Will you pack some juice too?",
            fr: "Prépareras-tu aussi du jus ?",
            options: ["I packed it yesterday.", "Yes, I will pack some juice.", "Yes, the juice is sweet."],
            answer: "Yes, I will pack some juice.",
            accepts: ["Yes I'll pack some juice", "Yes I will pack juice"],
            wordIds: ["food-pack", "food-juice"]
          },
          {
            speaker: "Friend",
            en: "What time will we meet tomorrow?",
            fr: "À quelle heure nous retrouverons-nous demain ?",
            options: ["We met at school.", "We'll meet at noon tomorrow.", "The picnic is very big."],
            answer: "We'll meet at noon tomorrow.",
            accepts: ["We will meet at twelve tomorrow", "We'll meet tomorrow at twelve"],
            wordIds: ["food-tomorrow", "food-picnic"]
          }
        ]
      }
    ]
  },
  "body-health": {
    phrases: [
      {
        id: "body-health-phrases-1",
        title: "Mon visage",
        subtitle: "Découvre les parties du corps",
        description: "Regarde, touche et nomme chaque partie !",
        words: [
          ["body-head", "Head", "Tête"],
          ["body-eye", "Eye", "Œil"],
          ["body-ear", "Ear", "Oreille"],
          ["body-nose", "Nose", "Nez"]
        ],
        phrases: [
          {
            fr: "Je touche ma tête.",
            en: ["I", "touch", "my", "head"],
            wordIds: ["body-head"]
          },
          {
            fr: "J'ai deux yeux.",
            en: ["I", "have", "two", "eyes"],
            wordIds: ["body-eye"]
          },
          {
            fr: "J'entends avec mes oreilles.",
            en: ["I", "hear", "with", "my", "ears"],
            wordIds: ["body-ear"]
          },
          {
            fr: "Mon nez est petit.",
            en: ["My", "nose", "is", "small"],
            wordIds: ["body-nose"]
          }
        ]
      },
      {
        id: "body-health-phrases-2",
        title: "Bouger et jouer",
        subtitle: "Un corps plein d'énergie",
        description: "Lève-toi et donne vie à ces phrases !",
        words: [
          ["body-hand", "Hand", "Main"],
          ["body-foot", "Foot", "Pied"],
          ["body-clap", "Clap", "Applaudir"],
          ["body-jump", "Jump", "Sauter"]
        ],
        phrases: [
          {
            fr: "Je lève la main.",
            en: ["I", "raise", "my", "hand"],
            wordIds: ["body-hand"],
            accepts: ["I'm raising my hand", "I am raising my hand"]
          },
          {
            fr: "Nous tapons des mains.",
            en: ["We", "clap", "our", "hands"],
            wordIds: ["body-clap", "body-hand"],
            accepts: ["We clap our hands"]
          },
          {
            fr: "Je saute sur un pied.",
            en: ["I", "jump", "on", "one", "foot"],
            wordIds: ["body-jump", "body-foot"],
            accepts: ["I hop on one foot"]
          },
          {
            fr: "Elle bouge les pieds.",
            en: ["She", "moves", "her", "feet"],
            wordIds: ["body-foot"]
          }
        ]
      },
      {
        id: "body-health-phrases-3",
        title: "Comment te sens-tu ?",
        subtitle: "Exprime tes sentiments",
        description: "Tous les sentiments ont leur place !",
        words: [
          ["body-happy", "Happy", "Heureux"],
          ["body-sad", "Sad", "Triste"],
          ["body-tired", "Tired", "Fatigué"],
          ["body-feeling", "Feeling", "Sentiment"]
        ],
        phrases: [
          {
            fr: "Je me sens heureux.",
            en: ["I", "feel", "happy"],
            wordIds: ["body-happy", "body-feeling"],
            accepts: ["I'm feeling happy", "I am feeling happy"]
          },
          {
            fr: "Pourquoi es-tu triste ?",
            en: ["Why", "are", "you", "sad"],
            wordIds: ["body-sad"]
          },
          {
            fr: "Je suis fatigué aujourd'hui.",
            en: ["I", "am", "tired", "today"],
            wordIds: ["body-tired"],
            accepts: ["I'm tired today"]
          },
          {
            fr: "Il se sent mieux maintenant.",
            en: ["He", "feels", "better", "now"],
            wordIds: ["body-feeling"]
          }
        ]
      },
      {
        id: "body-health-phrases-4",
        title: "Quelques petits bobos",
        subtitle: "Parle de ta santé",
        description: "Demander de l'aide, c'est être courageux !",
        words: [
          ["body-sore-throat", "Sore throat", "Mal de gorge"],
          ["body-cough", "Cough", "Tousser"],
          ["body-headache", "Headache", "Mal de tête"],
          ["body-fever", "Fever", "Fièvre"]
        ],
        phrases: [
          {
            fr: "J'ai mal à la gorge.",
            en: ["I", "have", "a", "sore", "throat"],
            wordIds: ["body-sore-throat"]
          },
          {
            fr: "Je tousse beaucoup.",
            en: ["I", "cough", "a", "lot"],
            wordIds: ["body-cough"]
          },
          {
            fr: "J'ai un léger mal de tête.",
            en: ["I", "have", "a", "slight", "headache"],
            wordIds: ["body-headache"]
          },
          {
            fr: "As-tu de la fièvre ?",
            en: ["Do", "you", "have", "a", "fever"],
            wordIds: ["body-fever"]
          }
        ]
      },
      {
        id: "body-health-phrases-5",
        title: "Prends soin de toi",
        subtitle: "Des conseils tout doux",
        description: "Un petit geste peut beaucoup t'aider !",
        words: [
          ["body-rest", "Rest", "Se reposer"],
          ["body-advice", "Advice", "Conseil"],
          ["body-recover", "Recover", "Guérir"],
          ["body-healthy", "Healthy", "En bonne santé"]
        ],
        phrases: [
          {
            fr: "Tu devrais te reposer.",
            en: ["You", "should", "rest"],
            wordIds: ["body-rest", "body-advice"]
          },
          {
            fr: "Je bois de l'eau et je mange sainement.",
            en: ["I", "drink", "water", "and", "eat", "well"],
            wordIds: ["body-advice"]
          },
          {
            fr: "J'espère que tu vas guérir vite.",
            en: ["I", "hope", "you", "recover", "soon"],
            wordIds: ["body-recover"],
            accepts: ["I hope you get better soon", "I hope you get well soon"]
          },
          {
            fr: "Manger sainement me garde en forme.",
            en: ["Eating", "well", "keeps", "me", "healthy"],
            wordIds: ["body-healthy", "body-advice"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "body-health-chat-1",
        title: "Une journée en forme",
        subtitle: "Montre ce que tu sais faire",
        description: "Ton corps peut faire des choses merveilleuses !",
        context: "En cours de sport, ton professeur te pose des questions.",
        words: [
          ["body-touch", "Touch", "Toucher"],
          ["body-run", "Run", "Courir"],
          ["body-fast", "Fast", "Vite"],
          ["body-balance", "Balance", "Équilibre"]
        ],
        turns: [
          {
            speaker: "Sports teacher",
            en: "What body part do you touch?",
            fr: "Quelle partie du corps touches-tu ?",
            options: ["I touch my head.", "I touch it on Monday.", "I am very fast."],
            answer: "I touch my head.",
            accepts: ["My head", "I am touching my head"],
            wordIds: ["body-touch", "body-head"]
          },
          {
            speaker: "Sports teacher",
            en: "Can you run fast?",
            fr: "Sais-tu courir vite ?",
            options: ["Yes, I can run fast.", "Yes, I am a foot.", "No, it's a shoe."],
            answer: "Yes, I can run fast.",
            accepts: ["Yes I can run very fast", "I can run fast"],
            wordIds: ["body-run", "body-fast"]
          },
          {
            speaker: "Sports teacher",
            en: "Can you stand on one foot?",
            fr: "Peux-tu tenir sur un pied ?",
            options: ["I stand on a chair.", "Yes, I can balance on one foot.", "Yes, I have two eyes."],
            answer: "Yes, I can balance on one foot.",
            accepts: ["Yes I can stand on one foot", "Yes I can"],
            wordIds: ["body-balance", "body-foot"]
          },
          {
            speaker: "Sports teacher",
            en: "How do you feel after exercising?",
            fr: "Comment te sens-tu après avoir fait du sport ?",
            options: ["I feel happy and healthy.", "I feel like a banana.", "I have a new shoe."],
            answer: "I feel happy and healthy.",
            accepts: ["I feel healthy and happy", "Happy and healthy"],
            wordIds: ["body-happy", "body-healthy", "body-feeling"]
          }
        ]
      },
      {
        id: "body-health-chat-2",
        title: "Un jour de pluie",
        subtitle: "Partage ce que tu ressens",
        description: "Parler de ses émotions, c'est déjà un grand pas !",
        context: "Ton ami semble triste parce que vous ne pouvez pas jouer dehors.",
        words: [
          ["body-upset", "Upset", "Contrarié"],
          ["body-lonely", "Lonely", "Seul"],
          ["body-cheer-up", "Cheer up", "Se remonter le moral"],
          ["body-laugh", "Laugh", "Rire"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "How are you feeling?",
            fr: "Comment te sens-tu ?",
            options: ["I'm feeling sad today.", "I'm feeling a chair.", "The rain is five."],
            answer: "I'm feeling sad today.",
            accepts: ["I feel sad today", "I am sad today"],
            wordIds: ["body-sad", "body-feeling", "body-upset"]
          },
          {
            speaker: "Friend",
            en: "Do you feel lonely?",
            fr: "Te sens-tu seul ?",
            options: ["Yes, I feel a little lonely.", "Yes, the window is open.", "No, I'm very tall."],
            answer: "Yes, I feel a little lonely.",
            accepts: ["Yes I am a little lonely", "Yes a little"],
            wordIds: ["body-lonely"]
          },
          {
            speaker: "Friend",
            en: "Would you like to play inside?",
            fr: "Voudrais-tu jouer à l'intérieur ?",
            options: ["I played outside yesterday.", "Yes, that would cheer me up.", "Yes, I'm a board game."],
            answer: "Yes, that would cheer me up.",
            accepts: ["Yes that would make me happy", "Yes I'd like that"],
            wordIds: ["body-cheer-up"]
          },
          {
            speaker: "Friend",
            en: "How do you feel now?",
            fr: "Comment te sens-tu maintenant ?",
            options: ["I feel much better and happy.", "I am a pillow.", "Now is Tuesday."],
            answer: "I feel much better and happy.",
            accepts: ["I feel better and happy now", "I'm happy now"],
            wordIds: ["body-happy", "body-feeling", "body-laugh"]
          }
        ]
      },
      {
        id: "body-health-chat-3",
        title: "Un conseil pour guérir",
        subtitle: "Prends soin d'un ami",
        description: "Avec des mots gentils, tu peux réconforter !",
        context: "Ton ami a de la fièvre et doit se reposer à la maison.",
        words: [
          ["body-tomorrow", "Tomorrow", "Demain"],
          ["body-visit", "Visit", "Rendre visite"],
          ["body-get-well", "Get well", "Guérir"],
          ["body-doctor", "Doctor", "Médecin"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "I don't feel well. I have a fever.",
            fr: "Je ne me sens pas bien. J'ai de la fièvre.",
            options: ["I'm sorry you feel ill.", "I'm sorry the sun is bright.", "I like your fever."],
            answer: "I'm sorry you feel ill.",
            accepts: ["I'm sorry you are ill", "I hope you feel better"],
            wordIds: ["body-visit", "body-get-well"]
          },
          {
            speaker: "Friend",
            en: "What should I do?",
            fr: "Que devrais-je faire ?",
            options: ["You should run outside.", "You should tell an adult and rest.", "You should eat three cakes."],
            answer: "You should tell an adult and rest.",
            accepts: ["You should rest and tell an adult", "You need to tell an adult and rest"],
            wordIds: ["body-advice", "body-rest"]
          },
          {
            speaker: "Friend",
            en: "Must I see a doctor?",
            fr: "Dois-je voir un médecin ?",
            options: ["You must see a yellow bus.", "You must tell an adult about the doctor.", "You must drink orange shoes."],
            answer: "You must tell an adult about the doctor.",
            accepts: ["You must ask an adult about seeing a doctor", "An adult will decide about the doctor"],
            wordIds: ["body-doctor"]
          },
          {
            speaker: "Friend",
            en: "Will you visit me tomorrow?",
            fr: "Viendras-tu me voir demain ?",
            options: ["I visited you next Monday.", "Yes, I will visit you tomorrow.", "Yes, I'm a good friend."],
            answer: "Yes, I will visit you tomorrow.",
            accepts: ["Yes I'll visit you tomorrow", "Yes I'll come tomorrow"],
            wordIds: ["body-tomorrow", "body-visit", "body-get-well"]
          }
        ]
      },
      {
        id: "body-health-chat-4",
        title: "Le parcours du soir",
        subtitle: "Parle de tes habitudes",
        description: "De petites habitudes font une grande différence !",
        context: "Tu parles de ta routine du soir à un ami qui veut prendre soin de lui.",
        words: [
          ["body-before-bed", "Before bed", "Avant de dormir"],
          ["body-brush-teeth", "Brush teeth", "Se brosser les dents"],
          ["body-wash-hands", "Wash hands", "Se laver les mains"],
          ["body-habit", "Habit", "Habitude"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What do you do before bed?",
            fr: "Que fais-tu avant de dormir ?",
            options: ["I brush my teeth before bed.", "I brush the sky.", "I am seven years old."],
            answer: "I brush my teeth before bed.",
            accepts: ["Before bed I brush my teeth", "I brush my teeth"],
            wordIds: ["body-before-bed", "body-brush-teeth"]
          },
          {
            speaker: "Friend",
            en: "Do you wash your hands before dinner?",
            fr: "Te laves-tu les mains avant le dîner ?",
            options: ["Yes, I wash my hands.", "Yes, I am hands.", "No, dinner is a spoon."],
            answer: "Yes, I wash my hands.",
            accepts: ["Yes I wash my hands before dinner", "Yes I do"],
            wordIds: ["body-wash-hands"]
          },
          {
            speaker: "Friend",
            en: "Why are clean hands important?",
            fr: "Pourquoi est-il important d'avoir les mains propres ?",
            options: ["They help keep us healthy.", "They can drive a car.", "They are always five."],
            answer: "They help keep us healthy.",
            accepts: ["Clean hands help us stay healthy", "To keep us healthy"],
            wordIds: ["body-wash-hands", "body-healthy"]
          },
          {
            speaker: "Friend",
            en: "What healthy habit will you start?",
            fr: "Quelle habitude saine vas-tu commencer ?",
            options: ["I started it yesterday.", "I will go to bed earlier.", "I will be a pillow."],
            answer: "I will go to bed earlier.",
            accepts: ["I'll go to bed earlier", "I'm going to go to bed earlier"],
            wordIds: ["body-habit", "body-before-bed"]
          }
        ]
      }
    ]
  },
  "daily-actions": {
    phrases: [
      {
        id: "daily-actions-phrases-1",
        title: "Le matin en famille",
        subtitle: "Commence la journée",
        description: "Un beau sourire et c'est parti !",
        words: [
          ["daily-wake-up", "Wake up", "Se réveiller"],
          ["daily-get-up", "Get up", "Se lever"],
          ["daily-bed", "Bed", "Lit"],
          ["daily-morning", "Morning", "Matin"]
        ],
        phrases: [
          {
            fr: "Je me réveille à sept heures.",
            en: ["I", "wake", "up", "at", "seven"],
            wordIds: ["daily-wake-up"]
          },
          {
            fr: "Je sors du lit.",
            en: ["I", "get", "out", "of", "bed"],
            wordIds: ["daily-get-up", "daily-bed"]
          },
          {
            fr: "Ma mère se lève tôt.",
            en: ["My", "mum", "gets", "up", "early"],
            wordIds: ["daily-get-up"],
            accepts: ["My mom gets up early"]
          },
          {
            fr: "Je fais mon lit le matin.",
            en: ["I", "make", "my", "bed", "in", "the", "morning"],
            wordIds: ["daily-bed", "daily-morning"]
          }
        ]
      },
      {
        id: "daily-actions-phrases-2",
        title: "Prêt pour l'école",
        subtitle: "Ta routine du matin",
        description: "Petit à petit, tu deviens un champion de l'anglais !",
        words: [
          ["daily-get-dressed", "Get dressed", "S'habiller"],
          ["daily-eat-breakfast", "Eat breakfast", "Prendre son petit-déjeuner"],
          ["daily-school-bag", "School bag", "Cartable"],
          ["daily-leave-home", "Leave home", "Quitter la maison"]
        ],
        phrases: [
          {
            fr: "Je m'habille après le petit-déjeuner.",
            en: ["I", "get", "dressed", "after", "breakfast"],
            wordIds: ["daily-get-dressed", "daily-eat-breakfast"]
          },
          {
            fr: "Je prends mon petit-déjeuner.",
            en: ["I", "eat", "breakfast"],
            wordIds: ["daily-eat-breakfast"]
          },
          {
            fr: "Mon cartable est prêt.",
            en: ["My", "school", "bag", "is", "ready"],
            wordIds: ["daily-school-bag"],
            accepts: ["My school bag is ready"]
          },
          {
            fr: "Je quitte la maison à huit heures.",
            en: ["I", "leave", "home", "at", "eight"],
            wordIds: ["daily-leave-home"]
          }
        ]
      },
      {
        id: "daily-actions-phrases-3",
        title: "Les petits gestes",
        subtitle: "Aide à la maison",
        description: "Ta famille adore ton esprit d'équipe !",
        words: [
          ["daily-tidy-up", "Tidy up", "Ranger"],
          ["daily-set-table", "Set the table", "Mettre la table"],
          ["daily-sweep", "Sweep", "Balayer"],
          ["daily-help", "Help", "Aider"]
        ],
        phrases: [
          {
            fr: "Je range mes jouets.",
            en: ["I", "tidy", "up", "my", "toys"],
            wordIds: ["daily-tidy-up"]
          },
          {
            fr: "Je mets la table.",
            en: ["I", "set", "the", "table"],
            wordIds: ["daily-set-table"]
          },
          {
            fr: "Je balaie le sol.",
            en: ["I", "sweep", "the", "floor"],
            wordIds: ["daily-sweep"]
          },
          {
            fr: "J'aide ma famille.",
            en: ["I", "help", "my", "family"],
            wordIds: ["daily-help"]
          }
        ]
      },
      {
        id: "daily-actions-phrases-4",
        title: "Après l'école",
        subtitle: "Détente et petits défis",
        description: "Garde de l'énergie pour tes jeux préférés !",
        words: [
          ["daily-do-homework", "Do homework", "Faire ses devoirs"],
          ["daily-read", "Read", "Lire"],
          ["daily-play-outside", "Play outside", "Jouer dehors"],
          ["daily-draw", "Draw", "Dessiner"]
        ],
        phrases: [
          {
            fr: "Je fais mes devoirs après l'école.",
            en: ["I", "do", "my", "homework", "after", "school"],
            wordIds: ["daily-do-homework"]
          },
          {
            fr: "Je lis une histoire.",
            en: ["I", "read", "a", "story"],
            wordIds: ["daily-read"]
          },
          {
            fr: "Nous jouons dehors.",
            en: ["We", "play", "outside"],
            wordIds: ["daily-play-outside"]
          },
          {
            fr: "J'aime dessiner des animaux.",
            en: ["I", "like", "drawing", "animals"],
            wordIds: ["daily-draw"],
            accepts: ["I like to draw animals"]
          }
        ]
      },
      {
        id: "daily-actions-phrases-5",
        title: "La nuit tombe",
        subtitle: "Termine la journée en douceur",
        description: "De belles phrases pour de beaux rêves !",
        words: [
          ["daily-eat-dinner", "Eat dinner", "Prendre son dîner"],
          ["daily-take-shower", "Take a shower", "Prendre une douche"],
          ["daily-go-to-bed", "Go to bed", "Aller au lit"],
          ["daily-sleep-well", "Sleep well", "Bien dormir"]
        ],
        phrases: [
          {
            fr: "Nous dînons ensemble.",
            en: ["We", "eat", "dinner", "together"],
            wordIds: ["daily-eat-dinner"]
          },
          {
            fr: "Je prends une douche.",
            en: ["I", "take", "a", "shower"],
            wordIds: ["daily-take-shower"]
          },
          {
            fr: "Je vais au lit à neuf heures.",
            en: ["I", "go", "to", "bed", "at", "nine"],
            wordIds: ["daily-go-to-bed"]
          },
          {
            fr: "Dors bien, mon ami.",
            en: ["Sleep", "well", "my", "friend"],
            wordIds: ["daily-sleep-well"],
            accepts: ["Sleep well my friend"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "daily-actions-chat-1",
        title: "La routine de Léo",
        subtitle: "Parle de ta journée",
        description: "Raconte ta journée avec des phrases de plus en plus longues !",
        context: "Un nouvel ami anglais te pose des questions sur ta routine.",
        words: [
          ["daily-alarm", "Alarm clock", "Réveil"],
          ["daily-routine", "Routine", "Routine"],
          ["daily-make-breakfast", "Make breakfast", "Préparer le petit-déjeuner"],
          ["daily-usually", "Usually", "D'habitude"]
        ],
        turns: [
          {
            speaker: "New friend",
            en: "When do you get up?",
            fr: "À quelle heure te lèves-tu ?",
            options: ["I get up at seven.", "I get up a book.", "At seven I have a bed."],
            answer: "I get up at seven.",
            accepts: ["I get up at 7", "I usually get up at seven"],
            wordIds: ["daily-get-up", "daily-alarm"]
          },
          {
            speaker: "New friend",
            en: "What do you usually do in the morning?",
            fr: "Que fais-tu d'habitude le matin ?",
            options: ["I usually eat breakfast.", "I usually am a table.", "Breakfast is at school."],
            answer: "I usually eat breakfast.",
            accepts: ["Usually I eat breakfast", "I eat breakfast"],
            wordIds: ["daily-usually", "daily-eat-breakfast", "daily-routine"]
          },
          {
            speaker: "New friend",
            en: "Do you make your breakfast yourself?",
            fr: "Prépares-tu ton petit-déjeuner toi-même ?",
            options: ["Yes, I make breakfast with my mum.", "Yes, I make a sunny morning.", "No, I'm breakfast."],
            answer: "Yes, I make breakfast with my mum.",
            accepts: ["Yes I make my own breakfast", "Yes I do with my mum"],
            wordIds: ["daily-make-breakfast"]
          },
          {
            speaker: "New friend",
            en: "What time do you leave home for school?",
            fr: "À quelle heure quittes-tu la maison pour l'école ?",
            options: ["I leave home at eight o'clock.", "I leave my homework blue.", "School leaves at home."],
            answer: "I leave home at eight o'clock.",
            accepts: ["I leave home at eight", "I usually leave home at eight"],
            wordIds: ["daily-leave-home"]
          }
        ]
      },
      {
        id: "daily-actions-chat-2",
        title: "Mission à la maison",
        subtitle: "Responsabilités et conseils",
        description: "Un coup de main, et toute la maison sourit !",
        context: "Tu aides un adulte à préparer le dîner et à ranger la cuisine.",
        words: [
          ["daily-chore", "Chore", "Petite tâche"],
          ["daily-must", "Must", "Devoir"],
          ["daily-teamwork", "Teamwork", "Esprit d'équipe"],
          ["daily-wash-hands", "Wash hands", "Se laver les mains"]
        ],
        turns: [
          {
            speaker: "Family member",
            en: "Can you help with dinner?",
            fr: "Peux-tu nous aider pour le dîner ?",
            options: ["Yes, I can set the table.", "Yes, I can a table.", "The table is brown."],
            answer: "Yes, I can set the table.",
            accepts: ["Yes I can help set the table", "Yes of course"],
            wordIds: ["daily-help", "daily-set-table"]
          },
          {
            speaker: "Family member",
            en: "You must wash your hands first.",
            fr: "Tu dois d'abord te laver les mains.",
            options: ["I will wash my hands first.", "I washed them next week.", "The soap is green."],
            answer: "I will wash my hands first.",
            accepts: ["OK I will wash my hands first", "I'll wash my hands now"],
            wordIds: ["daily-must", "daily-wash-hands"]
          },
          {
            speaker: "Family member",
            en: "What must you do before dinner?",
            fr: "Que dois-tu faire avant le dîner ?",
            options: ["I did it before lunch.", "I must clear the table.", "I must be a chair."],
            answer: "I must clear the table.",
            accepts: ["I have to clear the table", "I need to clear the table"],
            wordIds: ["daily-must"]
          },
          {
            speaker: "Family member",
            en: "Why should everyone help at home?",
            fr: "Pourquoi tout le monde devrait-il aider à la maison ?",
            options: ["It makes chores fun for everyone.", "Because chairs are soft.", "Because dinner is a clock."],
            answer: "It makes chores fun for everyone.",
            accepts: ["Because helping is fun for everyone", "It helps the whole family"],
            wordIds: ["daily-chore", "daily-teamwork"]
          }
        ]
      },
      {
        id: "daily-actions-chat-3",
        title: "Après la classe",
        subtitle: "Routines et envies",
        description: "Fais des choix et raconte ce que tu aimes faire !",
        context: "Ton ami te demande comment tu passes ton après-midi.",
        words: [
          ["daily-finish", "Finish", "Terminer"],
          ["daily-then", "Then", "Ensuite"],
          ["daily-favourite", "Favourite", "Préféré"],
          ["daily-spend-time", "Spend time", "Passer du temps"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What do you do after school?",
            fr: "Que fais-tu après l'école ?",
            options: ["I finish my homework first.", "I finish my blue pencil.", "School is very big."],
            answer: "I finish my homework first.",
            accepts: ["First I do my homework", "I do my homework first"],
            wordIds: ["daily-finish", "daily-do-homework"]
          },
          {
            speaker: "Friend",
            en: "What do you do then?",
            fr: "Que fais-tu ensuite ?",
            options: ["Then I eat my bag.", "Then I play outside.", "Then is a clock."],
            answer: "Then I play outside.",
            accepts: ["I play outside after that", "After that I play outside"],
            wordIds: ["daily-then", "daily-play-outside"]
          },
          {
            speaker: "Friend",
            en: "What's your favourite activity?",
            fr: "Quelle est ton activité préférée ?",
            options: ["My favourite is Friday.", "I like drawing pictures.", "My activity is green."],
            answer: "I like drawing pictures.",
            accepts: ["My favourite activity is drawing", "Drawing is my favourite activity"],
            wordIds: ["daily-favourite", "daily-draw"]
          },
          {
            speaker: "Friend",
            en: "Who do you like to spend time with?",
            fr: "Avec qui aimes-tu passer du temps ?",
            options: ["I spend time with my family.", "I spend my homework blue.", "I like a sunny window."],
            answer: "I spend time with my family.",
            accepts: ["I like spending time with my family", "With my family"],
            wordIds: ["daily-spend-time", "daily-help"]
          }
        ]
      },
      {
        id: "daily-actions-chat-4",
        title: "Des projets pour demain",
        subtitle: "Capacités et avenir",
        description: "Avec « can » et « will », tu ouvres plein de portes !",
        context: "Tu organises ta prochaine journée libre avec un ami.",
        words: [
          ["daily-plan", "Plan", "Projet"],
          ["daily-be-able", "Can", "Pouvoir"],
          ["daily-free-time", "Free time", "Temps libre"],
          ["daily-bring", "Bring", "Apporter"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What do you like doing in your free time?",
            fr: "Qu'aimes-tu faire pendant ton temps libre ?",
            options: ["I like reading stories.", "I like a green clock.", "My free time is three."],
            answer: "I like reading stories.",
            accepts: ["I enjoy reading stories", "I like to read stories"],
            wordIds: ["daily-free-time", "daily-read"]
          },
          {
            speaker: "Friend",
            en: "Can you visit the park tomorrow?",
            fr: "Peux-tu aller au parc demain ?",
            options: ["I can visit it yesterday.", "Yes, I can visit the park tomorrow.", "Yes, the park is tall."],
            answer: "Yes, I can visit the park tomorrow.",
            accepts: ["Yes I'll be able to visit the park tomorrow", "Yes I can"],
            wordIds: ["daily-plan", "daily-be-able"]
          },
          {
            speaker: "Friend",
            en: "What will you bring for our picnic?",
            fr: "Qu'apporteras-tu pour notre pique-nique ?",
            options: ["I brought some apples yesterday.", "I will bring a ball.", "The picnic will be yellow."],
            answer: "I will bring a ball.",
            accepts: ["I'll bring a ball", "I'm going to bring a ball"],
            wordIds: ["daily-plan", "daily-bring"]
          },
          {
            speaker: "Friend",
            en: "What is your plan for the afternoon?",
            fr: "Quel est ton programme pour l'après-midi ?",
            options: ["We will play and then have a snack.", "We played a blue plan.", "Afternoon is my best friend."],
            answer: "We will play and then have a snack.",
            accepts: ["We'll play and then have a snack", "We are going to play and have a snack"],
            wordIds: ["daily-plan", "daily-then", "daily-spend-time"]
          }
        ]
      }
    ]
  }
};

const PRACTICE_CONTENT_WORLD = {
  "transport-travel": {
    phrases: [
      {
        id: "transport-travel-phrases-1",
        title: "À la gare",
        subtitle: "Billets et trains",
        description: "Prépare-toi à voyager en train avec confiance !",
        words: [
          ["travel-ticket", "Ticket", "Billet"],
          ["travel-train", "Train", "Train"],
          ["travel-station", "Station", "Gare"],
          ["travel-platform", "Platform", "Quai"]
        ],
        phrases: [
          {
            fr: "J'ai un billet de train.",
            en: ["I", "have", "a", "train", "ticket"],
            wordIds: ["travel-ticket"]
          },
          {
            fr: "Le train est en gare.",
            en: ["The", "train", "is", "at", "the", "station"],
            wordIds: ["travel-train"]
          },
          {
            fr: "Où est le quai ?",
            en: ["Where", "is", "the", "platform"],
            wordIds: ["travel-platform"]
          },
          {
            fr: "Retrouvons-nous à la gare.",
            en: ["Let's", "meet", "at", "the", "station"],
            wordIds: ["travel-station"]
          }
        ]
      },
      {
        id: "transport-travel-phrases-2",
        title: "Dans la rue",
        subtitle: "Bus et directions",
        description: "Apprends à te déplacer facilement dans la ville !",
        words: [
          ["travel-bus", "Bus", "Bus"],
          ["travel-bus-stop", "Bus stop", "Arrêt de bus"],
          ["travel-left", "Left", "Gauche"],
          ["travel-right", "Right", "Droite"]
        ],
        phrases: [
          {
            fr: "Je prends le bus pour aller à l'école.",
            en: ["I", "take", "the", "bus", "to", "school"],
            wordIds: ["travel-bus"]
          },
          {
            fr: "L'arrêt de bus est tout près.",
            en: ["The", "bus", "stop", "is", "near"],
            wordIds: ["travel-bus-stop"]
          },
          {
            fr: "Tourne à gauche au coin.",
            en: ["Turn", "left", "at", "the", "corner"],
            wordIds: ["travel-left"]
          },
          {
            fr: "Puis tourne à droite.",
            en: ["Then", "turn", "right"],
            wordIds: ["travel-right"]
          }
        ]
      },
      {
        id: "transport-travel-phrases-3",
        title: "À l'aéroport",
        subtitle: "Prêt pour l'avion",
        description: "Pars à l'aventure avec les bons mots !",
        words: [
          ["travel-airport", "Airport", "Aéroport"],
          ["travel-suitcase", "Suitcase", "Valise"],
          ["travel-flight", "Flight", "Vol"],
          ["travel-passport", "Passport", "Passeport"]
        ],
        phrases: [
          {
            fr: "Nous sommes à l'aéroport.",
            en: ["We", "are", "at", "the", "airport"],
            wordIds: ["travel-airport"]
          },
          {
            fr: "Ma valise est bleue.",
            en: ["My", "suitcase", "is", "blue"],
            wordIds: ["travel-suitcase"]
          },
          {
            fr: "Notre vol part bientôt.",
            en: ["Our", "flight", "leaves", "soon"],
            wordIds: ["travel-flight"]
          },
          {
            fr: "J'ai mon passeport.",
            en: ["I", "have", "my", "passport"],
            wordIds: ["travel-passport"]
          }
        ]
      },
      {
        id: "transport-travel-phrases-4",
        title: "Une nuit à l'hôtel",
        subtitle: "La chambre et l'accueil",
        description: "Découvre les mots utiles pour bien dormir à l'hôtel !",
        words: [
          ["travel-hotel", "Hotel", "Hôtel"],
          ["travel-room", "Room", "Chambre"],
          ["travel-key", "Key", "Clé"],
          ["travel-reception", "Reception", "Accueil"]
        ],
        phrases: [
          {
            fr: "Cet hôtel est très chouette.",
            en: ["This", "hotel", "is", "very", "nice"],
            wordIds: ["travel-hotel"]
          },
          {
            fr: "Notre chambre est à l'étage.",
            en: ["Our", "room", "is", "upstairs"],
            wordIds: ["travel-room"]
          },
          {
            fr: "La clé est dans mon sac.",
            en: ["The", "key", "is", "in", "my", "bag"],
            wordIds: ["travel-key"]
          },
          {
            fr: "L'accueil est à côté de la porte.",
            en: ["Reception", "is", "next", "to", "the", "door"],
            wordIds: ["travel-reception"]
          }
        ]
      },
      {
        id: "transport-travel-phrases-5",
        title: "Un petit imprévu",
        subtitle: "Demander de l'aide",
        description: "Garde le sourire même quand un voyage se complique !",
        words: [
          ["travel-late", "Late", "En retard"],
          ["travel-lost", "Lost", "Perdu"],
          ["travel-help", "Help", "Aide"],
          ["travel-map", "Map", "Carte"]
        ],
        phrases: [
          {
            fr: "Le bus est en retard aujourd'hui.",
            en: ["The", "bus", "is", "late", "today"],
            wordIds: ["travel-late"]
          },
          {
            fr: "La valise rouge est perdue.",
            en: ["The", "red", "suitcase", "is", "lost"],
            wordIds: ["travel-lost"]
          },
          {
            fr: "Peux-tu m'aider, s'il te plaît ?",
            en: ["Can", "you", "help", "me", "please"],
            wordIds: ["travel-help"]
          },
          {
            fr: "Regardons la carte.",
            en: ["Let's", "look", "at", "the", "map"],
            wordIds: ["travel-map"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "transport-travel-chat-1",
        title: "À la gare",
        subtitle: "Le bon quai",
        description: "À toi de choisir le bon billet et le bon quai !",
        context: "Tu achètes un billet et tu cherches le bon quai.",
        words: [
          ["travel-london", "London", "Londres"],
          ["travel-return-ticket", "Return ticket", "Billet aller-retour"],
          ["travel-platform-six", "Platform six", "Quai six"],
          ["travel-straight", "Straight", "Tout droit"]
        ],
        turns: [
          {
            speaker: "Station staff",
            en: "Hello! Where would you like to go?",
            fr: "Bonjour ! Où voudrais-tu aller ?",
            options: [
              "To London, please.",
              "At nine o'clock.",
              "It is very fast."
            ],
            answer: "To London, please.",
            wordIds: ["travel-london"]
          },
          {
            speaker: "Station staff",
            en: "Would you like a return ticket?",
            fr: "Voudrais-tu un billet aller-retour ?",
            options: [
              "The station is big.",
              "Yes, a return ticket, please.",
              "I have a blue coat."
            ],
            answer: "Yes, a return ticket, please.",
            wordIds: ["travel-return-ticket"]
          },
          {
            speaker: "Station staff",
            en: "Your train leaves from platform six.",
            fr: "Ton train part du quai six.",
            options: [
              "How do I get to platform six?",
              "I would like a sandwich.",
              "My ticket is red."
            ],
            answer: "How do I get to platform six?",
            wordIds: ["travel-platform-six"]
          },
          {
            speaker: "Station staff",
            en: "Go straight, then turn left.",
            fr: "Va tout droit, puis tourne à gauche.",
            options: [
              "I will go straight and turn left.",
              "I would like a return ticket.",
              "It leaves from the airport."
            ],
            answer: "I will go straight and turn left.",
            wordIds: ["travel-straight"]
          }
        ]
      },
      {
        id: "transport-travel-chat-2",
        title: "Prêt à embarquer",
        subtitle: "À l'aéroport",
        description: "Fais preuve d'assurance avant de prendre l'avion !",
        context: "Tu passes le contrôle avant de prendre ton avion.",
        words: [
          ["travel-boarding-pass", "Boarding pass", "Carte d'embarquement"],
          ["travel-carry-on", "Carry-on bag", "Bagage à main"],
          ["travel-gate", "Gate", "Porte d'embarquement"],
          ["travel-security", "Security", "Contrôle de sécurité"]
        ],
        turns: [
          {
            speaker: "Airport staff",
            en: "May I see your boarding pass, please?",
            fr: "Puis-je voir votre carte d'embarquement, s'il vous plaît ?",
            options: [
              "It is under the chair.",
              "Here is my boarding pass.",
              "I am nine years old."
            ],
            answer: "Here is my boarding pass.",
            wordIds: ["travel-boarding-pass"]
          },
          {
            speaker: "Airport staff",
            en: "Do you have a bag with you?",
            fr: "Avez-vous un bag avec vous ?",
            options: [
              "Yes, this is my carry-on bag.",
              "The plane is very big.",
              "At half past eight."
            ],
            answer: "Yes, this is my carry-on bag.",
            wordIds: ["travel-carry-on"]
          },
          {
            speaker: "Airport staff",
            en: "Your gate is number ten.",
            fr: "Ta porte d'embarquement est la numéro dix.",
            options: [
              "How do I get to gate ten?",
              "I have two suitcases.",
              "It is sunny today."
            ],
            answer: "How do I get to gate ten?",
            wordIds: ["travel-gate"]
          },
          {
            speaker: "Airport staff",
            en: "Go through security first.",
            fr: "Passe d'abord par le contrôle de sécurité.",
            options: [
              "Okay, I will go through security.",
              "I want to visit London.",
              "My bag is very heavy."
            ],
            answer: "Okay, I will go through security.",
            wordIds: ["travel-security"]
          }
        ]
      },
      {
        id: "transport-travel-chat-3",
        title: "Bienvenue à l'hôtel",
        subtitle: "Une famille à l'accueil",
        description: "Accueille ta famille à l'hôtel comme un petit expert !",
        context: "Tu arrives à l'hôtel avec ta famille pour la nuit.",
        words: [
          ["travel-reservation", "Reservation", "Réservation"],
          ["travel-family", "Family", "Famille"],
          ["travel-lift", "Lift", "Ascenseur"],
          ["travel-breakfast", "Breakfast", "Petit-déjeuner"]
        ],
        turns: [
          {
            speaker: "Receptionist",
            en: "Good evening! Do you have a reservation?",
            fr: "Bonsoir ! Avez-vous une réservation ?",
            options: [
              "Yes, we have a reservation.",
              "The lift is over there.",
              "Our room is blue."
            ],
            answer: "Yes, we have a reservation.",
            wordIds: ["travel-reservation"]
          },
          {
            speaker: "Receptionist",
            en: "How many people are staying?",
            fr: "Combien de personnes séjournent ici ?",
            options: [
              "There are four people in my family.",
              "We arrived by train.",
              "It is our first night."
            ],
            answer: "There are four people in my family.",
            wordIds: ["travel-family"]
          },
          {
            speaker: "Receptionist",
            en: "Your room is on the first floor.",
            fr: "Votre chambre est au premier étage.",
            options: [
              "Is the lift near the reception?",
              "I would like some breakfast.",
              "We have a reservation."
            ],
            answer: "Is the lift near the reception?",
            wordIds: ["travel-lift"]
          },
          {
            speaker: "Receptionist",
            en: "Breakfast is at eight o'clock.",
            fr: "Le petit-déjeuner est à huit heures.",
            options: [
              "Great! We will have breakfast at eight.",
              "Our room is on the first floor.",
              "The station is near here."
            ],
            answer: "Great! We will have breakfast at eight.",
            wordIds: ["travel-breakfast"]
          }
        ]
      },
      {
        id: "transport-travel-chat-4",
        title: "Un voyage sans souci",
        subtitle: "Un bus en retard",
        description: "Résous ce petit imprévu et prépare une belle journée !",
        context: "Ton bus est en retard et tu prépares la suite de ta journée.",
        words: [
          ["travel-next-bus", "Next bus", "Prochain bus"],
          ["travel-wait", "Wait", "Attendre"],
          ["travel-tomorrow", "Tomorrow", "Demain"],
          ["travel-bike", "Bike", "Vélo"]
        ],
        turns: [
          {
            speaker: "Tourist information staff",
            en: "The bus is delayed by ten minutes.",
            fr: "Le bus a dix minutes de retard.",
            options: [
              "Oh no! What time is the next bus?",
              "I would like a hotel room.",
              "The train is very fast."
            ],
            answer: "Oh no! What time is the next bus?",
            wordIds: ["travel-next-bus"]
          },
          {
            speaker: "Tourist information staff",
            en: "The next bus leaves in twenty minutes.",
            fr: "Le prochain bus part dans vingt minutes.",
            options: [
              "All right. I will wait at the station.",
              "I will go to the airport.",
              "My suitcase is lost."
            ],
            answer: "All right. I will wait at the station.",
            wordIds: ["travel-wait"]
          },
          {
            speaker: "Tourist information staff",
            en: "Are you going sightseeing tomorrow?",
            fr: "Est-ce que tu visiteras la ville demain ?",
            options: [
              "I will visit the old town tomorrow.",
              "It leaves from platform six.",
              "I have a blue suitcase."
            ],
            answer: "I will visit the old town tomorrow.",
            wordIds: ["travel-tomorrow"]
          },
          {
            speaker: "Tourist information staff",
            en: "You could ride a bike around town.",
            fr: "Tu pourrais faire du vélo dans la ville.",
            options: [
              "Good idea! A bike is better than a car.",
              "No, I need a boarding pass.",
              "Breakfast is at eight o'clock."
            ],
            answer: "Good idea! A bike is better than a car.",
            wordIds: ["travel-bike"]
          }
        ]
      }
    ]
  },
  "nature-weather": {
    phrases: [
      {
        id: "nature-weather-phrases-1",
        title: "Quel temps fait-il ?",
        subtitle: "Le ciel aujourd'hui",
        description: "Parle du temps avec tes amis !",
        words: [
          ["nature-sunny", "Sunny", "Ensoleillé"],
          ["nature-rainy", "Rainy", "Pluvieux"],
          ["nature-cloudy", "Cloudy", "Nuageux"],
          ["nature-windy", "Windy", "Venteux"]
        ],
        phrases: [
          {
            fr: "Il fait soleil aujourd'hui.",
            en: ["It", "is", "sunny", "today"],
            wordIds: ["nature-sunny"]
          },
          {
            fr: "C'est une journée pluvieuse.",
            en: ["It", "is", "a", "rainy", "day"],
            wordIds: ["nature-rainy"]
          },
          {
            fr: "Le ciel est nuageux.",
            en: ["The", "sky", "is", "cloudy"],
            wordIds: ["nature-cloudy"]
          },
          {
            fr: "Il fait du vent dehors.",
            en: ["It", "is", "windy", "outside"],
            wordIds: ["nature-windy"]
          }
        ]
      },
      {
        id: "nature-weather-phrases-2",
        title: "Chaud ou froid ?",
        subtitle: "Les températures",
        description: "Découvre les mots pour toutes les températures !",
        words: [
          ["nature-hot", "Hot", "Chaud"],
          ["nature-cold", "Cold", "Froid"],
          ["nature-warm", "Warm", "Tiède"],
          ["nature-snow", "Snow", "Neige"]
        ],
        phrases: [
          {
            fr: "Il fait chaud en été.",
            en: ["It", "is", "hot", "in", "summer"],
            wordIds: ["nature-hot"]
          },
          {
            fr: "Mets un manteau. Il fait froid.",
            en: ["Wear", "a", "coat", "It", "is", "cold"],
            wordIds: ["nature-cold"]
          },
          {
            fr: "L'eau est tiède.",
            en: ["The", "water", "is", "warm"],
            wordIds: ["nature-warm"]
          },
          {
            fr: "Il y a de la neige sur la colline.",
            en: ["There", "is", "snow", "on", "the", "hill"],
            wordIds: ["nature-snow"]
          }
        ]
      },
      {
        id: "nature-weather-phrases-3",
        title: "Les animaux du parc",
        subtitle: "Petits amis poilus",
        description: "Observe les animaux et donne-leur un nom en anglais !",
        words: [
          ["nature-rabbit", "Rabbit", "Lapin"],
          ["nature-bird", "Bird", "Oiseau"],
          ["nature-squirrel", "Squirrel", "Écureuil"],
          ["nature-duck", "Duck", "Canard"]
        ],
        phrases: [
          {
            fr: "Le lapin a de longues oreilles.",
            en: ["The", "rabbit", "has", "long", "ears"],
            wordIds: ["nature-rabbit"]
          },
          {
            fr: "Un petit oiseau chante.",
            en: ["A", "small", "bird", "is", "singing"],
            wordIds: ["nature-bird"]
          },
          {
            fr: "L'écureuil est dans l'arbre.",
            en: ["The", "squirrel", "is", "in", "the", "tree"],
            wordIds: ["nature-squirrel"]
          },
          {
            fr: "Le canard est sur le lac.",
            en: ["The", "duck", "is", "on", "the", "lake"],
            wordIds: ["nature-duck"]
          }
        ]
      },
      {
        id: "nature-weather-phrases-4",
        title: "Au cœur de la nature",
        subtitle: "Paysages et couleurs",
        description: "Explore la nature et décris ce que tu vois !",
        words: [
          ["nature-forest", "Forest", "Forêt"],
          ["nature-river", "River", "Rivière"],
          ["nature-mountain", "Mountain", "Montagne"],
          ["nature-flower", "Flower", "Fleur"]
        ],
        phrases: [
          {
            fr: "Nous nous promenons dans la forêt.",
            en: ["We", "walk", "in", "the", "forest"],
            wordIds: ["nature-forest"]
          },
          {
            fr: "La rivière est bleue.",
            en: ["The", "river", "is", "blue"],
            wordIds: ["nature-river"]
          },
          {
            fr: "La montagne est très haute.",
            en: ["The", "mountain", "is", "very", "high"],
            wordIds: ["nature-mountain"]
          },
          {
            fr: "Cette fleur sent bon.",
            en: ["This", "flower", "smells", "nice"],
            wordIds: ["nature-flower"]
          }
        ]
      },
      {
        id: "nature-weather-phrases-5",
        title: "Protéger la planète",
        subtitle: "Les petits gestes",
        description: "Deviens un super protecteur de la planète !",
        words: [
          ["nature-litter", "Litter", "Déchets"],
          ["nature-recycle", "Recycle", "Recycler"],
          ["nature-plant-tree", "Plant a tree", "Planter un arbre"],
          ["nature-save-water", "Save water", "Économiser l'eau"]
        ],
        phrases: [
          {
            fr: "Ne laisse pas de déchets, s'il te plaît.",
            en: ["Please", "do", "not", "leave", "litter"],
            wordIds: ["nature-litter"]
          },
          {
            fr: "Nous recyclons le papier et le plastique.",
            en: ["We", "recycle", "paper", "and", "plastic"],
            wordIds: ["nature-recycle"]
          },
          {
            fr: "Plantons un arbre.",
            en: ["Let's", "plant", "a", "tree"],
            wordIds: ["nature-plant-tree"]
          },
          {
            fr: "Je ferme le robinet pour économiser l'eau.",
            en: ["I", "turn", "off", "the", "tap", "to", "save", "water"],
            wordIds: ["nature-save-water"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "nature-weather-chat-1",
        title: "Un pique-nique au parc",
        subtitle: "Prévoir la sortie",
        description: "Choisis une super sortie selon la météo !",
        context: "Tu décides quoi faire demain avec ton ami.",
        words: [
          ["nature-forecast", "Forecast", "Prévisions météo"],
          ["nature-warmer", "Warmer", "Plus chaud"],
          ["nature-picnic", "Picnic", "Pique-nique"],
          ["nature-weekend", "Weekend", "Week-end"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What will the weather be like tomorrow?",
            fr: "Quel temps fera-t-il demain ?",
            options: [
              "The forecast says it will be sunny.",
              "I have a yellow umbrella.",
              "The park is very big."
            ],
            answer: "The forecast says it will be sunny.",
            wordIds: ["nature-forecast"]
          },
          {
            speaker: "Friend",
            en: "Will it be warmer than today?",
            fr: "Est-ce qu'il fera plus chaud qu'aujourd'hui ?",
            options: [
              "Yes, it will be warmer tomorrow than today.",
              "No, I do not like cold weather.",
              "The forecast is in my bag."
            ],
            answer: "Yes, it will be warmer tomorrow than today.",
            wordIds: ["nature-warmer"]
          },
          {
            speaker: "Friend",
            en: "What shall we do?",
            fr: "Qu'est-ce qu'on pourrait faire ?",
            options: [
              "Let's have a picnic in the park after lunch.",
              "I will pack my suitcase.",
              "It is rainy this morning."
            ],
            answer: "Let's have a picnic in the park after lunch.",
            wordIds: ["nature-picnic"]
          },
          {
            speaker: "Friend",
            en: "That sounds fun! When shall we meet?",
            fr: "Ça a l'air amusant ! Quand est-ce qu'on se retrouve ?",
            options: [
              "Let's meet at ten o'clock this weekend at the gate.",
              "The sky is very cloudy.",
              "I would like a cheese sandwich."
            ],
            answer: "Let's meet at ten o'clock this weekend at the gate.",
            wordIds: ["nature-weekend"]
          }
        ]
      },
      {
        id: "nature-weather-chat-2",
        title: "Une promenade en forêt",
        subtitle: "Suivre le sentier",
        description: "Suis le sentier et découvre les secrets de la forêt !",
        context: "Tu explores une forêt avec un guide.",
        words: [
          ["nature-path", "Path", "Sentier"],
          ["nature-owl", "Owl", "Hibou"],
          ["nature-quiet", "Quiet", "Calme"],
          ["nature-climb", "Climb", "Grimper"]
        ],
        turns: [
          {
            speaker: "Forest guide",
            en: "Follow the path to the little lake.",
            fr: "Suis le sentier jusqu'au petit lac.",
            options: [
              "Is the path long?",
              "I would like a picnic.",
              "The duck is on the lake."
            ],
            answer: "Is the path long?",
            wordIds: ["nature-path"]
          },
          {
            speaker: "Forest guide",
            en: "No, it is only ten minutes away.",
            fr: "Non, il n'est qu'à dix minutes.",
            options: [
              "Wow! I would love to see an owl.",
              "My house is near the forest.",
              "It will be sunny tomorrow."
            ],
            answer: "Wow! I would love to see an owl.",
            wordIds: ["nature-owl"]
          },
          {
            speaker: "Forest guide",
            en: "You might hear one. The forest is quiet near the lake.",
            fr: "Tu pourrais en entendre un. La forêt est calme près du lac.",
            options: [
              "Yes, it is quieter here than in town.",
              "I would like to climb a mountain.",
              "The river is very blue."
            ],
            answer: "Yes, it is quieter here than in town.",
            wordIds: ["nature-quiet"]
          },
          {
            speaker: "Forest guide",
            en: "Do you want to climb the small hill?",
            fr: "Est-ce que tu veux grimper sur la petite colline ?",
            options: [
              "Yes, I love to climb and see the view.",
              "No, I want to take the bus.",
              "The path is very long."
            ],
            answer: "Yes, I love to climb and see the view.",
            wordIds: ["nature-climb"]
          }
        ]
      },
      {
        id: "nature-weather-chat-3",
        title: "Les animaux du jardin",
        subtitle: "Observer sans déranger",
        description: "Observe les animaux tout en prenant soin d'eux !",
        context: "Tu participes à un club nature dans un jardin.",
        words: [
          ["nature-observe", "Observe", "Observer"],
          ["nature-safe", "Safe", "Sûr"],
          ["nature-feed", "Feed", "Nourrir"],
          ["nature-protect", "Protect", "Protéger"]
        ],
        turns: [
          {
            speaker: "Nature club leader",
            en: "Let's watch the birds without disturbing them.",
            fr: "Observons les oiseaux sans les déranger.",
            options: [
              "We can observe them from behind the tree.",
              "I would like to feed them bread.",
              "The garden is very big."
            ],
            answer: "We can observe them from behind the tree.",
            wordIds: ["nature-observe"]
          },
          {
            speaker: "Nature club leader",
            en: "Is bread safe for the birds?",
            fr: "Est-ce que le pain est sûr pour les oiseaux ?",
            options: [
              "No, bread is not safe for birds.",
              "Yes, they eat bread every day.",
              "I have bread in my lunch."
            ],
            answer: "No, bread is not safe for birds.",
            wordIds: ["nature-safe"]
          },
          {
            speaker: "Nature club leader",
            en: "What can we give them instead?",
            fr: "Que peut-on leur donner à la place ?",
            options: [
              "We can feed them seeds and fresh water.",
              "We can leave litter in the garden.",
              "They can sleep in my bed."
            ],
            answer: "We can feed them seeds and fresh water.",
            wordIds: ["nature-feed"]
          },
          {
            speaker: "Nature club leader",
            en: "How can we protect their home?",
            fr: "Comment peut-on protéger leur maison ?",
            options: [
              "We can protect their home and plant flowers.",
              "We can make the garden very noisy.",
              "I will take them to my house."
            ],
            answer: "We can protect their home and plant flowers.",
            wordIds: ["nature-protect"]
          }
        ]
      },
      {
        id: "nature-weather-chat-4",
        title: "Préserver la nature",
        subtitle: "Une action pour la planète",
        description: "Donne ton avis et prépare une action pour la planète !",
        context: "Ta classe prépare une journée pour nettoyer le parc.",
        words: [
          ["nature-cleanup", "Cleanup", "Nettoyage"],
          ["nature-plastic", "Plastic", "Plastique"],
          ["nature-reusable-bottle", "Reusable bottle", "Bouteille réutilisable"],
          ["nature-together", "Together", "Ensemble"]
        ],
        turns: [
          {
            speaker: "Teacher",
            en: "Our class will clean the park on Friday.",
            fr: "Notre classe nettoiera le parc vendredi.",
            options: [
              "Great! I will join the park cleanup.",
              "No, I prefer to stay in bed.",
              "The river is very cold."
            ],
            answer: "Great! I will join the park cleanup.",
            wordIds: ["nature-cleanup"]
          },
          {
            speaker: "Teacher",
            en: "Why is it important to pick up plastic?",
            fr: "Pourquoi est-il important de ramasser le plastique ?",
            options: [
              "Plastic is my favorite color.",
              "Plastic can harm animals and dirty the river.",
              "Because it is Friday."
            ],
            answer: "Plastic can harm animals and dirty the river.",
            wordIds: ["nature-plastic"]
          },
          {
            speaker: "Teacher",
            en: "What can we use instead of plastic bottles?",
            fr: "Que peut-on utiliser à la place des bouteilles en plastique ?",
            options: [
              "We can use reusable bottles for our drinks.",
              "We can throw them in the river.",
              "I have a yellow hat."
            ],
            answer: "We can use reusable bottles for our drinks.",
            wordIds: ["nature-reusable-bottle"]
          },
          {
            speaker: "Teacher",
            en: "Do you think our park will be cleaner?",
            fr: "Est-ce que tu penses que notre parc sera plus propre ?",
            options: [
              "Yes, if we work together, our park will be better.",
              "No, the park needs more plastic.",
              "It will rain tomorrow."
            ],
            answer: "Yes, if we work together, our park will be better.",
            wordIds: ["nature-together"]
          }
        ]
      }
    ]
  }
};

const PRACTICE_CONTENT_FLUENCY = {
  "sports-hobbies": {
    phrases: [
      {
        id: "sports-hobbies-phrases-1",
        title: "Au terrain de sport",
        subtitle: "Joue et bouge en anglais",
        description: "Chaque petite phrase te rend plus fort en anglais !",
        words: [
          ["hobby-football", "Football", "Football"],
          ["hobby-swim", "Swim", "Nager"],
          ["hobby-fast", "Fast", "Rapide"],
          ["hobby-practise", "Practise", "S'entraîner"]
        ],
        phrases: [
          {
            fr: "Je joue au football à l'école.",
            en: ["I", "play", "football", "at", "school"],
            wordIds: ["hobby-football"]
          },
          {
            fr: "Ma sœur sait nager très vite.",
            en: ["My", "sister", "can", "swim", "very", "fast"],
            wordIds: ["hobby-swim", "hobby-fast"]
          },
          {
            fr: "Je pratique le basket le lundi.",
            en: ["I", "practise", "basketball", "on", "Mondays"],
            wordIds: ["hobby-practise"]
          },
          {
            fr: "Nous jouons au football près du parc.",
            en: ["We", "play", "football", "near", "the", "park"],
            wordIds: ["hobby-football"]
          }
        ]
      },
      {
        id: "sports-hobbies-phrases-2",
        title: "Après l'école",
        subtitle: "Des loisirs à partager",
        description: "Dessine, lis et laisse parler ton imagination !",
        words: [
          ["hobby-draw", "Draw", "Dessiner"],
          ["hobby-read", "Read", "Lire"],
          ["hobby-collect", "Collect", "Collectionner"],
          ["hobby-after-school", "After school", "Après l'école"]
        ],
        phrases: [
          {
            fr: "Je dessine des animaux après l'école.",
            en: ["I", "draw", "animals", "after", "school"],
            wordIds: ["hobby-draw", "hobby-after-school"]
          },
          {
            fr: "Mon frère lit des bandes dessinées le dimanche.",
            en: ["My", "brother", "reads", "comics", "on", "Sundays"],
            wordIds: ["hobby-read"]
          },
          {
            fr: "Je collectionne des pierres brillantes.",
            en: ["I", "collect", "shiny", "stones"],
            wordIds: ["hobby-collect"]
          },
          {
            fr: "Nous faisons du vélo après l'école.",
            en: ["We", "ride", "bikes", "after", "school"],
            wordIds: ["hobby-after-school"]
          }
        ]
      },
      {
        id: "sports-hobbies-phrases-3",
        title: "Musique et danse",
        subtitle: "Chante avec le sourire",
        description: "Ta voix et tes pas peuvent raconter une histoire !",
        words: [
          ["hobby-sing", "Sing", "Chanter"],
          ["hobby-dance", "Dance", "Danser"],
          ["hobby-music", "Music", "Musique"],
          ["hobby-together", "Together", "Ensemble"]
        ],
        phrases: [
          {
            fr: "Je chante des chansons avec mes amis.",
            en: ["I", "sing", "songs", "with", "my", "friends"],
            wordIds: ["hobby-sing"]
          },
          {
            fr: "Elle danse dans le salon.",
            en: ["She", "dances", "in", "the", "living", "room"],
            wordIds: ["hobby-dance"]
          },
          {
            fr: "Nous écoutons de la musique ensemble.",
            en: ["We", "listen", "to", "music", "together"],
            wordIds: ["hobby-music", "hobby-together"]
          },
          {
            fr: "Mon père et moi chantons ensemble.",
            en: ["My", "dad", "and", "I", "sing", "together"],
            wordIds: ["hobby-sing", "hobby-together"]
          }
        ]
      },
      {
        id: "sports-hobbies-phrases-4",
        title: "Mon week-end",
        subtitle: "Films, jeux et sensations",
        description: "Raconte ce que tu aimes faire pendant ton temps libre !",
        words: [
          ["hobby-weekend", "Weekend", "Week-end"],
          ["hobby-cinema", "Cinema", "Cinéma"],
          ["hobby-boring", "Boring", "Ennuyeux"],
          ["hobby-exciting", "Exciting", "Passionnant"]
        ],
        phrases: [
          {
            fr: "Le week-end, je regarde des dessins animés.",
            en: ["On", "weekends", "I", "watch", "cartoons"],
            wordIds: ["hobby-weekend"]
          },
          {
            fr: "Le nouveau jeu est passionnant.",
            en: ["The", "new", "game", "is", "exciting"],
            wordIds: ["hobby-exciting"]
          },
          {
            fr: "Ce film était ennuyeux.",
            en: ["That", "film", "was", "boring"],
            wordIds: ["hobby-boring"]
          },
          {
            fr: "Nous allons au cinéma le samedi.",
            en: ["We", "go", "to", "the", "cinema", "on", "Saturday"],
            wordIds: ["hobby-cinema"]
          }
        ]
      },
      {
        id: "sports-hobbies-phrases-5",
        title: "Mon sport préféré",
        subtitle: "Gagner et essayer",
        description: "Essaie avec courage et amuse-toi avec ton équipe !",
        words: [
          ["hobby-team", "Team", "Équipe"],
          ["hobby-win", "Win", "Gagner"],
          ["hobby-try", "Try", "Essayer"],
          ["hobby-favourite", "Favourite", "Préféré"]
        ],
        phrases: [
          {
            fr: "Mon sport préféré est le tennis.",
            en: ["My", "favourite", "sport", "is", "tennis"],
            wordIds: ["hobby-favourite"]
          },
          {
            fr: "Notre équipe joue très bien.",
            en: ["Our", "team", "plays", "really", "well"],
            wordIds: ["hobby-team"]
          },
          {
            fr: "Je veux gagner la course.",
            en: ["I", "want", "to", "win", "the", "race"],
            wordIds: ["hobby-win"]
          },
          {
            fr: "Essayons un nouveau loisir !",
            en: ["Let's", "try", "a", "new", "hobby"],
            wordIds: ["hobby-try"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "sports-hobbies-chat-1",
        title: "Un match au parc",
        subtitle: "Une invitation amicale",
        description: "Ose inviter un ami et réponds avec enthousiasme !",
        context: "Tu retrouves ton ami près du parc après l'école.",
        words: [
          ["hobby-invite", "Invite", "Inviter"],
          ["hobby-kick", "Kick", "Taper du pied"],
          ["hobby-park", "Park", "Parc"],
          ["hobby-fun", "Fun", "Amusant"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "Do you want to play football in the park?",
            fr: "Tu veux jouer au football dans le parc ?",
            options: ["Yes, I'd love to!", "I usually play after lunch.", "The grass is very green."],
            answer: "Yes, I'd love to!",
            wordIds: ["hobby-invite", "hobby-park"]
          },
          {
            speaker: "Friend",
            en: "Great! Can you kick the ball to me?",
            fr: "Super ! Peux-tu me faire une passe du pied ?",
            options: ["Yes, I can kick the ball gently to you.", "I can see a bird.", "My shoes are new."],
            answer: "Yes, I can kick the ball gently to you.",
            wordIds: ["hobby-kick"]
          },
          {
            speaker: "Friend",
            en: "We are having fun! What do you like about football?",
            fr: "On s'amuse bien ! Qu'est-ce que tu aimes dans le football ?",
            options: ["I like running fast with my team after school.", "I like drawing at home.", "My team wears green."],
            answer: "I like running fast with my team after school.",
            wordIds: ["hobby-fun"]
          },
          {
            speaker: "Friend",
            en: "Awesome! Shall we play here again next Saturday?",
            fr: "Génial ! On revient jouer ici samedi prochain ?",
            options: ["Yes, I would really love to play here next Saturday.", "Maybe I will visit my grandma.", "The park closes at six."],
            answer: "Yes, I would really love to play here next Saturday.",
            wordIds: ["hobby-park"]
          }
        ]
      },
      {
        id: "sports-hobbies-chat-2",
        title: "À la piscine",
        subtitle: "Nager et s'entraider",
        description: "Écoute bien et choisis une réponse claire et gentille !",
        context: "Tu nages avec ta sœur et un ami.",
        words: [
          ["hobby-pool", "Pool", "Piscine"],
          ["hobby-splash", "Splash", "Éclabousser"],
          ["hobby-deep", "Deep", "Profond"],
          ["hobby-help", "Help", "Aider"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "Do you want to go swimming after lunch?",
            fr: "Tu veux aller nager après le déjeuner ?",
            options: ["Yes, let's go to the pool.", "I usually eat an apple.", "My towel is yellow."],
            answer: "Yes, let's go to the pool.",
            wordIds: ["hobby-pool"]
          },
          {
            speaker: "Friend",
            en: "Can you swim in the deep end?",
            fr: "Tu sais nager dans le grand bain ?",
            options: ["Yes, I can swim ten metres without stopping.", "Only in the bath, thank you.", "I usually swim on Fridays."],
            answer: "Yes, I can swim ten metres without stopping.",
            wordIds: ["hobby-deep"]
          },
          {
            speaker: "Friend",
            en: "Watch out! Don't splash your sister.",
            fr: "Attention ! N'éclabousse pas ta sœur.",
            options: ["Sorry, I will keep the water calm now.", "The water is very blue.", "Yes, she has a red hat."],
            answer: "Sorry, I will keep the water calm now.",
            wordIds: ["hobby-splash"]
          },
          {
            speaker: "Friend",
            en: "Thank you! Can you help her with her ball?",
            fr: "Merci ! Peux-tu l'aider avec son ballon ?",
            options: ["Of course, I will help her catch the ball.", "I hope it rains tomorrow.", "We need two pairs of shoes."],
            answer: "Of course, I will help her catch the ball.",
            wordIds: ["hobby-help"]
          }
        ]
      },
      {
        id: "sports-hobbies-chat-3",
        title: "Le spectacle de danse",
        subtitle: "Du trac à la joie",
        description: "Respire, souris et montre ce que tu sais faire !",
        context: "Tu prépares une petite danse avec tes amis.",
        words: [
          ["hobby-stage", "Stage", "Scène"],
          ["hobby-costume", "Costume", "Costume"],
          ["hobby-nervous", "Nervous", "Nerveux"],
          ["hobby-clap", "Clap", "Applaudir"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "Are you ready to dance on the stage?",
            fr: "Tout est prêt pour danser sur scène ?",
            options: ["Yes, I know my dance and I am ready.", "I play the violin.", "The room is very big."],
            answer: "Yes, I know my dance and I am ready.",
            wordIds: ["hobby-stage"]
          },
          {
            speaker: "Friend",
            en: "I am a little nervous. What will you do?",
            fr: "J'ai un peu le trac. Qu'est-ce que tu vas faire ?",
            options: ["I will take a deep breath and smile.", "I will eat a sandwich.", "My shoes are under the chair."],
            answer: "I will take a deep breath and smile.",
            wordIds: ["hobby-nervous"]
          },
          {
            speaker: "Friend",
            en: "Good idea! What costume will you wear?",
            fr: "Bonne idée ! Quel costume vas-tu porter ?",
            options: ["I will wear my bright blue superhero costume today.", "I will wear my pyjamas.", "My friend has a red hat."],
            answer: "I will wear my bright blue superhero costume today.",
            wordIds: ["hobby-costume"]
          },
          {
            speaker: "Friend",
            en: "The show was amazing! Did you hear everyone clap?",
            fr: "Le spectacle était super ! Tu as entendu tout le monde applaudir ?",
            options: ["Yes, I really loved hearing everyone clap after our dance.", "Yes, I can clap too.", "Yes, the music was loud."],
            answer: "Yes, I really loved hearing everyone clap after our dance.",
            wordIds: ["hobby-clap"]
          }
        ]
      },
      {
        id: "sports-hobbies-chat-4",
        title: "Un nouveau loisir",
        subtitle: "Créer et progresser",
        description: "Choisis un défi créatif et explique comment tu vas avancer !",
        context: "Tu hésites entre un loisir créatif et le sport.",
        words: [
          ["hobby-create", "Create", "Créer"],
          ["hobby-model", "Model", "Modèle"],
          ["hobby-patient", "Patient", "Patient"],
          ["hobby-improve", "Improve", "S'améliorer"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What new hobby would you like to try?",
            fr: "Quel nouveau loisir aimerais-tu essayer ?",
            options: ["I would like to create a small paper model.", "I would like a glass of water.", "I usually play tennis on Sunday."],
            answer: "I would like to create a small paper model.",
            wordIds: ["hobby-create", "hobby-model"]
          },
          {
            speaker: "Friend",
            en: "That sounds creative. Can you be patient with small pieces?",
            fr: "Ça a l'air créatif. Peux-tu être patient avec les petites pièces ?",
            options: ["Yes, I can take my time with each piece.", "Yes, the paper is white.", "I prefer playing outside."],
            answer: "Yes, I can take my time with each piece.",
            wordIds: ["hobby-patient"]
          },
          {
            speaker: "Friend",
            en: "How can you improve your first model?",
            fr: "Comment peux-tu améliorer ton premier modèle ?",
            options: ["I can watch a clear tutorial and try again.", "I can build it under my bed.", "I can ask my dad for a cake."],
            answer: "I can watch a clear tutorial and try again.",
            wordIds: ["hobby-improve"]
          },
          {
            speaker: "Friend",
            en: "Great! Will you show it to your family?",
            fr: "Génial ! Tu vas le montrer à ta famille ?",
            options: ["Yes, I will show them on Sunday and explain each step.", "Yes, my family lives in a house.", "I will show it to my cat."],
            answer: "Yes, I will show them on Sunday and explain each step.",
            wordIds: ["hobby-model"]
          }
        ]
      }
    ]
  },
  "school-jobs-tech": {
    phrases: [
      {
        id: "school-jobs-tech-phrases-1",
        title: "À l'école",
        subtitle: "Mes matières préférées",
        description: "Chaque nouvelle matière est une porte qui s'ouvre !",
        words: [
          ["school-subject", "Subject", "Matière scolaire"],
          ["school-science", "Science", "Sciences"],
          ["school-history", "History", "Histoire"],
          ["school-difficult", "Difficult", "Difficile"]
        ],
        phrases: [
          {
            fr: "La science est ma matière préférée.",
            en: ["My", "favourite", "subject", "is", "science"],
            wordIds: ["school-subject", "school-science"]
          },
          {
            fr: "L'histoire est intéressante le mardi.",
            en: ["History", "is", "interesting", "on", "Tuesdays"],
            wordIds: ["school-history"]
          },
          {
            fr: "Les maths sont difficiles aujourd'hui.",
            en: ["Maths", "is", "difficult", "today"],
            wordIds: ["school-difficult"]
          },
          {
            fr: "Je pose une question au professeur.",
            en: ["I", "ask", "the", "teacher", "a", "question"],
            wordIds: ["school-subject"]
          }
        ]
      },
      {
        id: "school-jobs-tech-phrases-2",
        title: "Dans la classe",
        subtitle: "Lire et bien écrire",
        description: "Prends ton temps et demande de l'aide quand tu en as besoin !",
        words: [
          ["school-library", "Library", "Bibliothèque"],
          ["school-notebook", "Notebook", "Cahier"],
          ["school-explain", "Explain", "Expliquer"],
          ["school-carefully", "Carefully", "Soigneusement"]
        ],
        phrases: [
          {
            fr: "Je lis une histoire dans la bibliothèque.",
            en: ["I", "read", "a", "story", "in", "the", "library"],
            wordIds: ["school-library"]
          },
          {
            fr: "Mon cahier est sur le bureau.",
            en: ["My", "notebook", "is", "on", "the", "desk"],
            wordIds: ["school-notebook"]
          },
          {
            fr: "S'il te plaît, explique-moi ce mot.",
            en: ["Please", "explain", "this", "word", "to", "me"],
            wordIds: ["school-explain"]
          },
          {
            fr: "J'écris soigneusement dans mon cahier.",
            en: ["I", "write", "carefully", "in", "my", "notebook"],
            wordIds: ["school-carefully", "school-notebook"]
          }
        ]
      },
      {
        id: "school-jobs-tech-phrases-3",
        title: "Les métiers qui aident",
        subtitle: "Des gens utiles autour de nous",
        description: "Découvre des métiers et imagine comment tu pourrais aider les autres !",
        words: [
          ["school-doctor", "Doctor", "Médecin"],
          ["school-nurse", "Nurse", "Infirmière"],
          ["school-baker", "Baker", "Boulanger"],
          ["school-helpful", "Helpful", "Serviable"]
        ],
        phrases: [
          {
            fr: "Un médecin aide les personnes malades.",
            en: ["A", "doctor", "helps", "sick", "people"],
            wordIds: ["school-doctor"]
          },
          {
            fr: "L'infirmière travaille dans notre école.",
            en: ["The", "nurse", "works", "at", "our", "school"],
            wordIds: ["school-nurse"]
          },
          {
            fr: "Mon oncle est boulanger.",
            en: ["My", "uncle", "is", "a", "baker"],
            wordIds: ["school-baker"]
          },
          {
            fr: "Les pompiers sont courageux et serviables.",
            en: ["Firefighters", "are", "brave", "and", "helpful"],
            wordIds: ["school-helpful"]
          }
        ]
      },
      {
        id: "school-jobs-tech-phrases-4",
        title: "La technologie",
        subtitle: "Des outils pour apprendre",
        description: "Utilise les écrans avec curiosité et fais des pauses régulières !",
        words: [
          ["school-computer", "Computer", "Ordinateur"],
          ["school-screen", "Screen", "Écran"],
          ["school-keyboard", "Keyboard", "Clavier"],
          ["school-type", "Type", "Taper"]
        ],
        phrases: [
          {
            fr: "J'utilise un ordinateur pour mes devoirs.",
            en: ["I", "use", "a", "computer", "for", "homework"],
            wordIds: ["school-computer"]
          },
          {
            fr: "L'écran est lumineux et net.",
            en: ["The", "screen", "is", "bright", "and", "clear"],
            wordIds: ["school-screen"]
          },
          {
            fr: "Je tape avec un clavier.",
            en: ["I", "type", "with", "a", "keyboard"],
            wordIds: ["school-type", "school-keyboard"]
          },
          {
            fr: "S'il te plaît, éteins l'écran.",
            en: ["Please", "turn", "off", "the", "screen"],
            wordIds: ["school-screen"]
          }
        ]
      },
      {
        id: "school-jobs-tech-phrases-5",
        title: "Mes rêves pour demain",
        subtitle: "Imaginer et inventer",
        description: "Les grandes idées commencent souvent par un petit rêve !",
        words: [
          ["school-dream", "Dream", "Rêve"],
          ["school-future", "Future", "Avenir"],
          ["school-robot", "Robot", "Robot"],
          ["school-invent", "Invent", "Inventer"]
        ],
        phrases: [
          {
            fr: "À l'avenir, je veux construire un robot.",
            en: ["In", "the", "future", "I", "want", "to", "build", "a", "robot"],
            wordIds: ["school-future", "school-robot"]
          },
          {
            fr: "Mon rêve est d'aider les gens.",
            en: ["My", "dream", "is", "to", "help", "people"],
            wordIds: ["school-dream"]
          },
          {
            fr: "Nous pouvons inventer une machine utile.",
            en: ["We", "can", "invent", "a", "useful", "machine"],
            wordIds: ["school-invent"]
          },
          {
            fr: "Les robots peuvent suivre des instructions simples.",
            en: ["Robots", "can", "follow", "simple", "instructions"],
            wordIds: ["school-robot"]
          }
        ]
      }
    ],
    conversations: [
      {
        id: "school-jobs-tech-chat-1",
        title: "Notre projet de classe",
        subtitle: "Des idées à partager",
        description: "Écoute tes amis et présente vos idées avec clarté !",
        context: "Tu travailles avec un nouveau groupe en classe.",
        words: [
          ["school-project", "Project", "Projet"],
          ["school-present", "Present", "Présenter"],
          ["school-share", "Share", "Partager"],
          ["school-idea", "Idea", "Idée"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What is your group making for the school project?",
            fr: "Que fabrique ton groupe pour le projet d'école ?",
            options: ["We are making a poster about healthy food.", "We are playing in the playground.", "My pencil case is purple."],
            answer: "We are making a poster about healthy food.",
            wordIds: ["school-project"]
          },
          {
            speaker: "Friend",
            en: "What is your favourite idea on the poster?",
            fr: "Quelle est ton idée préférée sur l'affiche ?",
            options: ["My favourite idea is to eat more fruit.", "My favourite colour is purple.", "The poster is very large."],
            answer: "My favourite idea is to eat more fruit.",
            wordIds: ["school-idea"]
          },
          {
            speaker: "Friend",
            en: "Can you share your colours with me?",
            fr: "Peux-tu me prêter quelques feutres de couleur ?",
            options: ["Yes, you can use my blue and green pencils.", "Yes, it is a sunny day.", "I have a yellow ruler."],
            answer: "Yes, you can use my blue and green pencils.",
            wordIds: ["school-share"]
          },
          {
            speaker: "Friend",
            en: "Would you like to present the poster tomorrow?",
            fr: "Tu aimerais présenter l'affiche demain ?",
            options: ["Yes, I will explain our ideas clearly to the class.", "Yes, tomorrow is Friday.", "I can draw a small dog."],
            answer: "Yes, I will explain our ideas clearly to the class.",
            wordIds: ["school-present"]
          }
        ]
      },
      {
        id: "school-jobs-tech-chat-2",
        title: "Le club de sciences",
        subtitle: "Essayer et apprendre",
        description: "Une erreur peut devenir une belle occasion d'apprendre !",
        context: "Tu parles d'un club scolaire avec un ami.",
        words: [
          ["school-club", "Club", "Club"],
          ["school-mistake", "Mistake", "Erreur"],
          ["school-correct", "Correct", "Corriger"],
          ["school-advice", "Advice", "Conseil"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "Did you join the science club last week?",
            fr: "Tu as rejoint le club de sciences la semaine dernière ?",
            options: ["Yes, I made a volcano at the club.", "Yes, I visited my grandmother.", "No, I played tennis instead."],
            answer: "Yes, I made a volcano at the club.",
            wordIds: ["school-club"]
          },
          {
            speaker: "Friend",
            en: "That sounds fun! Did anything go wrong?",
            fr: "Ça a l'air amusant ! Tu as eu un problème ?",
            options: ["Yes, I made one small mistake with the paper.", "Yes, I brought a red notebook.", "No, the volcano was very tall."],
            answer: "Yes, I made one small mistake with the paper.",
            wordIds: ["school-mistake"]
          },
          {
            speaker: "Friend",
            en: "What did your teacher tell you?",
            fr: "Qu'est-ce que ton professeur t'a dit ?",
            options: ["She told me to correct my mistake and try again.", "She asked me to open the window.", "She showed me a picture of the moon."],
            answer: "She told me to correct my mistake and try again.",
            wordIds: ["school-correct", "school-mistake"]
          },
          {
            speaker: "Friend",
            en: "What advice would you give a new club member?",
            fr: "Quel conseil donnerais-tu à un nouveau membre du club ?",
            options: ["Bring your ideas, ask lots of questions, and never fear mistakes.", "Bring a notebook and sit near the window.", "Ask the teacher to build it for you."],
            answer: "Bring your ideas, ask lots of questions, and never fear mistakes.",
            wordIds: ["school-advice"]
          }
        ]
      },
      {
        id: "school-jobs-tech-chat-3",
        title: "Rêves et sécurité en ligne",
        subtitle: "Grandir en confiance",
        description: "Parle de tes rêves et apprends à protéger tes informations !",
        context: "Tu parles de tes rêves et de ta sécurité en ligne.",
        words: [
          ["school-password", "Password", "Mot de passe"],
          ["school-private", "Private", "Privé"],
          ["school-stranger", "Stranger", "Inconnu"],
          ["school-engineer", "Engineer", "Ingénieur"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "What do you want to be in the future?",
            fr: "Que veux-tu devenir plus tard ?",
            options: ["I want to become a creative robot engineer.", "I want to buy a new bicycle.", "I want to play outside today."],
            answer: "I want to become a creative robot engineer.",
            wordIds: ["school-engineer"]
          },
          {
            speaker: "Friend",
            en: "That is a big dream! Why do you like robots?",
            fr: "C'est un grand rêve ! Pourquoi aimes-tu les robots ?",
            options: ["I like robots because they can help people solve problems.", "I like robots because they are silver.", "I like drawing pictures of houses."],
            answer: "I like robots because they can help people solve problems.",
            wordIds: ["school-engineer"]
          },
          {
            speaker: "Friend",
            en: "How do you stay safe on your school computer?",
            fr: "Comment restes-tu en sécurité sur l'ordinateur de l'école ?",
            options: ["I keep my password private and never share it online.", "I share my password with everyone.", "I keep the computer under my chair."],
            answer: "I keep my password private and never share it online.",
            wordIds: ["school-password", "school-private"]
          },
          {
            speaker: "Friend",
            en: "What would you do if a stranger sent a message?",
            fr: "Que ferais-tu si un inconnu t'envoyait un message ?",
            options: ["I would ignore a stranger and immediately tell a trusted adult.", "I would ignore it and tell my teacher tomorrow.", "I would show it to my parent after dinner."],
            answer: "I would ignore a stranger and immediately tell a trusted adult.",
            wordIds: ["school-stranger"]
          }
        ]
      },
      {
        id: "school-jobs-tech-chat-4",
        title: "Ma présentation",
        subtitle: "Parler avec assurance",
        description: "Prépare ta voix, ton public et une conclusion courte !",
        context: "Tu présentes ton projet à la classe.",
        words: [
          ["school-confident", "Confident", "Confiant"],
          ["school-invention", "Invention", "Invention"],
          ["school-audience", "Audience", "Public"],
          ["school-summarize", "Summarize", "Résumer"]
        ],
        turns: [
          {
            speaker: "Friend",
            en: "Are you ready to present your invention?",
            fr: "Est-ce que tout est prêt pour ta présentation ?",
            options: ["Yes, I have confidence and will show my invention.", "Yes, I can count to twenty.", "Yes, the windows are open."],
            answer: "Yes, I have confidence and will show my invention.",
            wordIds: ["school-confident"]
          },
          {
            speaker: "Friend",
            en: "What is your invention called?",
            fr: "Comment s'appelle ton invention ?",
            options: ["It is called the Helpful Hand, and it carries books.", "It is called my red pencil case.", "It is called today."],
            answer: "It is called the Helpful Hand, and it carries books.",
            wordIds: ["school-invention"]
          },
          {
            speaker: "Friend",
            en: "Who is your audience today?",
            fr: "Qui est ton public aujourd'hui ?",
            options: ["My audience today is our class, my teacher, and two parents.", "My audience is our class and my teacher.", "My audience is my family at home."],
            answer: "My audience today is our class, my teacher, and two parents.",
            wordIds: ["school-audience"]
          },
          {
            speaker: "Friend",
            en: "Can you finish with a short summary?",
            fr: "Peux-tu terminer par un petit résumé ?",
            options: ["In short, my useful invention saves time and helps every student learn.", "In short, I have drawn a blue circle.", "In short, the classroom is very quiet."],
            answer: "In short, my useful invention saves time and helps every student learn.",
            wordIds: ["school-summarize", "school-invention"]
          }
        ]
      }
    ]
  }
};

const PRACTICE_CONTENT = normalizePracticeValue({
  ...PRACTICE_CONTENT_CORE,
  ...PRACTICE_CONTENT_DAILY,
  ...PRACTICE_CONTENT_WORLD,
  ...PRACTICE_CONTENT_FLUENCY
});

function phraseText(phrase) {
  return phrase.en.join(" ");
}

function practiceWords(blueprint, stage) {
  const lines = stage === "phrases" ? blueprint.phrases : blueprint.turns;
  return blueprint.words.map(([id, en, fr]) => {
    const source = lines.find((line) => line.wordIds.includes(id)) || lines[0];
    return {
      id,
      en,
      fr,
      example: stage === "phrases" ? phraseText(source) : source.en,
      exampleFr: source.fr
    };
  });
}

function wordChoice(id, word, words, reverse = false) {
  const others = words.filter((item) => item.id !== word.id).slice(0, 3);
  const values = reverse ? others.map((item) => item.fr) : others.map((item) => item.en);
  const answer = reverse ? word.fr : word.en;
  return {
    id: `${id}-choice`,
    type: "choice",
    skill: reverse ? "Comprendre" : "Vocabulaire",
    prompt: reverse ? `Que veut dire « ${word.en} » ?` : `Comment dit-on « ${word.fr} » en anglais ?`,
    helper: reverse ? "Choisis la bonne traduction." : "Choisis le bon mot.",
    wordId: word.id,
    wordIds: [word.id],
    options: [answer, ...values.slice(0, 2), values[2]],
    answer
  };
}

function wordListen(id, word, words) {
  const others = words.filter((item) => item.id !== word.id).slice(0, 3);
  return {
    id: `${id}-listen`,
    type: "listen",
    skill: "À l’oreille",
    prompt: "Quel mot viens-tu d’entendre ?",
    helper: "Appuie sur le haut-parleur, puis choisis ta réponse.",
    audio: word.en,
    wordId: word.id,
    wordIds: [word.id],
    options: [others[2].en, word.en, others[0].en, others[1].en],
    answer: word.en
  };
}

function wordType(id, word) {
  return {
    id: `${id}-type`,
    type: "type",
    skill: "À toi d’écrire",
    prompt: `Écris « ${word.fr} » en anglais.`,
    helper: "Tape le mot, puis valide ta réponse.",
    wordId: word.id,
    wordIds: [word.id],
    answer: word.en,
    acceptedAnswers: [word.en.toLowerCase()]
  };
}

function matchWords(id, words) {
  return {
    id: `${id}-match`,
    type: "match",
    skill: "Relier les mots",
    prompt: "Relie chaque mot anglais à sa traduction.",
    helper: "Choisis un mot à gauche, puis sa traduction à droite.",
    wordIds: words.map((word) => word.id),
    pairs: words.map((word) => word.id),
    answer: "all"
  };
}

function buildPhrase(id, phrase, pool) {
  const answer = [...phrase.en];
  const extras = [];
  for (const candidate of pool.flatMap((item) => item.en)) {
    if (!answer.includes(candidate) && !extras.includes(candidate)) extras.push(candidate);
    if (extras.length === 2) break;
  }
  const tokens = [...answer];
  extras.forEach((token, index) => tokens.splice(Math.min(tokens.length, 1 + index * 2), 0, token));
  return {
    id: `${id}-build`,
    type: "build",
    skill: "Construire une phrase",
    prompt: `Forme la phrase « ${phrase.fr} ».`,
    helper: "Touche les mots dans le bon ordre.",
    wordIds: phrase.wordIds,
    tokens,
    answer
  };
}

function repeatPhrase(id, phrase) {
  return {
    id: `${id}-repeat`,
    type: "repeat",
    skill: "Parler à voix haute",
    prompt: "Écoute et répète cette petite phrase.",
    helper: "Appuie sur le haut-parleur, puis répète avec ta voix.",
    audio: phraseText(phrase),
    text: phraseText(phrase),
    translation: phrase.fr,
    wordIds: phrase.wordIds,
    answer: phraseText(phrase)
  };
}

function phraseListen(id, phrase, phrases) {
  const text = phraseText(phrase);
  const others = phrases.filter((item) => item !== phrase).map(phraseText);
  return {
    id: `${id}-listen`,
    type: "listen",
    skill: "Écouter une phrase",
    prompt: "Quelle phrase viens-tu d’entendre ?",
    helper: "Écoute bien les mots, puis choisis la phrase complète.",
    audio: text,
    wordIds: phrase.wordIds,
    options: [others[2], text, others[0], others[1]],
    answer: text
  };
}

function phraseType(id, phrase) {
  const text = phraseText(phrase);
  return {
    id: `${id}-type`,
    type: "type",
    skill: "Écrire une phrase",
    prompt: `Écris en anglais : « ${phrase.fr} »`,
    helper: "Tape la phrase, puis valide ta réponse.",
    wordIds: phrase.wordIds,
    answer: text,
    acceptedAnswers: [text.toLowerCase(), ...(phrase.accepts || [])]
  };
}

function dialogueExercise(id, blueprint, turnIndex) {
  const turn = blueprint.turns[turnIndex];
  const history = blueprint.turns.slice(0, turnIndex).flatMap((previous) => [
    { speaker: previous.speaker, en: previous.en, learner: false },
    { speaker: "", en: previous.answer, learner: true }
  ]);
  return {
    id: `${id}-dialogue-${turnIndex + 1}`,
    type: "dialogue",
    skill: "Mini-conversation",
    prompt: `Que réponds-tu à ${turn.speaker} ?`,
    helper: "Lis le message, écoute-le si tu veux, puis choisis ta réponse.",
    context: blueprint.context,
    history,
    speaker: turn.speaker,
    text: turn.en,
    translation: turn.fr,
    options: turn.options,
    answer: turn.answer,
    acceptedAnswers: turn.accepts || [],
    wordIds: turn.wordIds
  };
}

function buildPhraseLesson(unit, blueprint) {
  const words = practiceWords(blueprint, "phrases");
  const [first, second, third, fourth] = words;
  const [phraseOne, phraseTwo, , phraseFour] = blueprint.phrases;
  const exercises = [
    wordChoice(blueprint.id, first, words),
    wordListen(blueprint.id, second, words),
    wordChoice(`${blueprint.id}-reverse`, third, words, true),
    wordType(blueprint.id, fourth),
    repeatPhrase(blueprint.id, phraseOne),
    buildPhrase(blueprint.id, phraseOne, blueprint.phrases),
    phraseListen(`${blueprint.id}-phrase-two`, phraseTwo, blueprint.phrases),
    buildPhrase(`${blueprint.id}-phrase-three`, blueprint.phrases[2], blueprint.phrases),
    phraseType(`${blueprint.id}-phrase-four`, phraseFour)
  ];
  return {
    id: blueprint.id,
    unit: unit.id,
    stage: "phrases",
    title: blueprint.title,
    subtitle: blueprint.subtitle,
    description: blueprint.description,
    icon: "message",
    color: unit.color,
    minutes: 5,
    xp: exercises.length * 4 + 20,
    words,
    exercises
  };
}

function buildConversationLesson(unit, blueprint) {
  const words = practiceWords(blueprint, "conversation");
  const [first, second, third] = words;
  const replyPool = blueprint.turns.map((turn) => ({ fr: turn.answer, en: turn.answer.split(/\s+/), wordIds: turn.wordIds, accepts: turn.accepts || [] }));
  const exercises = [
    wordChoice(blueprint.id, first, words),
    wordListen(blueprint.id, second, words),
    dialogueExercise(blueprint.id, blueprint, 0),
    wordType(blueprint.id, third),
    dialogueExercise(blueprint.id, blueprint, 1),
    buildPhrase(`${blueprint.id}-reply`, replyPool[0], replyPool),
    dialogueExercise(blueprint.id, blueprint, 2),
    matchWords(blueprint.id, words),
    dialogueExercise(blueprint.id, blueprint, 3),
    phraseType(`${blueprint.id}-final-reply`, replyPool[3])
  ];
  return {
    id: blueprint.id,
    unit: unit.id,
    stage: "conversation",
    title: blueprint.title,
    subtitle: blueprint.subtitle,
    description: blueprint.description,
    icon: "users",
    color: unit.color,
    minutes: 6,
    xp: exercises.length * 4 + 20,
    words,
    exercises
  };
}

function buildPracticeLessons() {
  return COURSE_UNITS.flatMap((unit) => {
    const content = PRACTICE_CONTENT[unit.id] || { phrases: [], conversations: [] };
    const normalizeBlueprint = (blueprint) => {
      const wordIds = new Set(blueprint.words.map(([id]) => id));
      const normalizeLines = (lines) => lines.map((line) => ({
        ...line,
        wordIds: [...new Set(line.wordIds.filter((id) => wordIds.has(id)))]
      }));
      return blueprint.phrases
        ? { ...blueprint, phrases: normalizeLines(blueprint.phrases) }
        : { ...blueprint, turns: normalizeLines(blueprint.turns) };
    };
    return [
      ...content.phrases.map((blueprint) => buildPhraseLesson(unit, normalizeBlueprint(blueprint))),
      ...content.conversations.map((blueprint) => buildConversationLesson(unit, normalizeBlueprint(blueprint)))
    ];
  });
}

function buildVocabularyReview(lesson) {
  const words = lesson.words;
  const offset = lesson.number % 2 === 0 ? 2 : 1;
  const targetIndex = (lesson.number + offset) % words.length;
  const target = words[targetIndex];
  const rotated = words.map((_, index) => words[(targetIndex + index) % words.length]);
  const answerPosition = lesson.number % words.length;
  const options = [...rotated.slice(answerPosition), ...rotated.slice(0, answerPosition)];
  if (lesson.number % 2 === 0) {
    return {
      id: `${lesson.id}-word-review`, type: "listen", skill: "Revoir les mots",
      prompt: "Quel mot viens-tu d’entendre ?", helper: "Écoute encore et choisis le bon mot.",
      audio: target.en, wordId: target.id, wordIds: [target.id],
      options: options.map((word) => word.en), answer: target.en
    };
  }
  return {
    id: `${lesson.id}-word-review`, type: "choice", skill: "Revoir les mots",
    prompt: `Comment dit-on « ${target.fr} » en anglais ?`, helper: "Choisis le bon mot.",
    wordId: target.id, wordIds: [target.id],
    options: options.map((word) => word.en), answer: target.en
  };
}

function buildCourseLessons(baseLessons) {
  const stageOrder = Object.fromEntries(COURSE_STAGES.map((stage) => [stage.id, stage.number]));
  return [...baseLessons, ...buildPracticeLessons()]
    .sort((first, second) => {
      const stageDifference = (stageOrder[first.stage || "vocabulary"] - stageOrder[second.stage || "vocabulary"]);
      if (stageDifference) return stageDifference;
      const unitDifference = (COURSE_UNITS.find((unit) => unit.id === first.unit)?.number || 1) - (COURSE_UNITS.find((unit) => unit.id === second.unit)?.number || 1);
      if (unitDifference) return unitDifference;
      return (first.number || 999) - (second.number || 999);
    })
    .map((lesson, index) => {
      const numbered = { ...lesson, number: index + 1 };
      if (numbered.stage !== "vocabulary") return numbered;
      return {
        ...numbered,
        exercises: numbered.exercises.map((exercise) => exercise.type === "build" ? buildVocabularyReview(numbered) : exercise)
      };
    });
}

window.MINILINGO_DATA = {
  units: COURSE_UNITS,
  stages: COURSE_STAGES,
  lessons: buildCourseLessons([
    {
      id: "greetings",
      number: 1,
      unit: "essentials",
      stage: "vocabulary",
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
      unit: "essentials",
      stage: "vocabulary",
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
      unit: "essentials",
      stage: "vocabulary",
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
      unit: "essentials",
      stage: "vocabulary",
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
      unit: "essentials",
      stage: "vocabulary",
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
    },
    ...buildExtraLessons()
  ]),
  badges: [
    { id: "first-step", title: "Premier pas", description: "Terminer ta première leçon", icon: "flag", color: "green", metric: "lessons", target: 1 },
    { id: "explorer", title: "Petite exploration", description: "Terminer 3 leçons", icon: "compass", color: "blue", metric: "lessons", target: 3 },
    { id: "ten-lessons", title: "Décollement", description: "Terminer 10 leçons", icon: "play", color: "purple", metric: "lessons", target: 10 },
    { id: "quarter-course", title: "Un quart du chemin", description: "Terminer 35 leçons", icon: "flag", color: "orange", metric: "lessons", target: 35 },
    { id: "half-course", title: "À mi-parcours", description: "Terminer 70 leçons", icon: "compass", color: "blue", metric: "lessons", target: 70 },
    { id: "course-complete", title: "Grande aventure terminée", description: "Terminer les 140 leçons", icon: "trophy", color: "pink", metric: "lessons", target: 140 },
    { id: "first-phrase", title: "Première phrase", description: "Terminer une leçon de petites phrases", icon: "message", color: "green", metric: "phrases", target: 1 },
    { id: "phrase-explorer", title: "Petit bavard", description: "Terminer 10 leçons de phrases", icon: "message", color: "purple", metric: "phrases", target: 10 },
    { id: "phrase-master", title: "As des petites phrases", description: "Terminer les 50 leçons de phrases", icon: "sparkles", color: "pink", metric: "phrases", target: 50 },
    { id: "first-conversation", title: "Premier échange", description: "Terminer une mini-conversation", icon: "users", color: "blue", metric: "conversations", target: 1 },
    { id: "conversation-explorer", title: "Conversation facile", description: "Terminer 10 mini-conversations", icon: "users", color: "green", metric: "conversations", target: 10 },
    { id: "conversation-master", title: "Voix de l’anglais", description: "Terminer les 40 mini-conversations", icon: "trophy", color: "purple", metric: "conversations", target: 40 },
    { id: "word-starter", title: "Premiers mots", description: "Découvrir 20 mots anglais", icon: "book", color: "blue", metric: "words", target: 20 },
    { id: "word-collector", title: "Boîte à mots", description: "Découvrir 100 mots anglais", icon: "book", color: "green", metric: "words", target: 100 },
    { id: "word-explorer", title: "Grand explorateur de mots", description: "Découvrir 300 mots anglais", icon: "compass", color: "orange", metric: "words", target: 300 },
    { id: "word-master", title: "Trésor de vocabulaire", description: "Découvrir les 560 mots anglais", icon: "award", color: "pink", metric: "words", target: 560 },
    { id: "perfect", title: "Sans faute", description: "Terminer une leçon sans erreur", icon: "star", color: "yellow", metric: "perfectLessons", target: 1 },
    { id: "perfect-ten", title: "Dix sans faute", description: "Terminer 10 leçons sans erreur", icon: "star", color: "orange", metric: "perfectLessons", target: 10 },
    { id: "streak-three", title: "Trois jours de suite", description: "Apprendre pendant 3 jours", icon: "flame", color: "orange", metric: "streak", target: 3 },
    { id: "streak-seven", title: "Une semaine en anglais", description: "Apprendre pendant 7 jours", icon: "flame", color: "pink", metric: "streak", target: 7 },
    { id: "streak-thirty", title: "Belle régularité", description: "Apprendre pendant 30 jours", icon: "flame", color: "purple", metric: "streak", target: 30 },
    { id: "xp-fifty", title: "Récolte d’XP", description: "Gagner 50 points d’expérience", icon: "zap", color: "purple", metric: "xp", target: 50 },
    { id: "xp-five-hundred", title: "Cap des 500 XP", description: "Gagner 500 points d’expérience", icon: "zap", color: "blue", metric: "xp", target: 500 },
    { id: "xp-two-thousand", title: "Énergie de l’anglais", description: "Gagner 2 000 points d’expérience", icon: "sparkles", color: "green", metric: "xp", target: 2000 }
  ]
};
