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
      wordIds: blueprint.sentence.wordIds, tokens: blueprint.sentence.tokens, answer: blueprint.sentence.answer
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
      id: blueprint.id, number: index + 6, unit: unit.id,
      title: blueprint.title, subtitle: blueprint.subtitle || unit.title, description: blueprint.description,
      icon: blueprint.icon || unit.icon, color: unit.color, minutes: 4, xp: 44,
      words, exercises
    };
  });
}

window.MINILINGO_DATA = {
  units: COURSE_UNITS,
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
    },
    ...buildExtraLessons()
  ],
  badges: [
    { id: "first-step", title: "Premier pas", description: "Terminer ta première leçon", icon: "flag", color: "green", metric: "lessons", target: 1 },
    { id: "explorer", title: "Petite exploratrice", description: "Terminer 3 leçons", icon: "compass", color: "blue", metric: "lessons", target: 3 },
    { id: "ten-lessons", title: "Décollement", description: "Terminer 10 leçons", icon: "play", color: "purple", metric: "lessons", target: 10 },
    { id: "quarter-course", title: "Un quart du chemin", description: "Terminer 25 leçons", icon: "flag", color: "orange", metric: "lessons", target: 25 },
    { id: "perfect", title: "Sans faute", description: "Terminer une leçon sans erreur", icon: "star", color: "yellow", metric: "perfectLessons", target: 1 },
    { id: "streak-three", title: "Trois jours de suite", description: "Apprendre pendant 3 jours", icon: "flame", color: "orange", metric: "streak", target: 3 },
    { id: "xp-fifty", title: "Collectionneuse d’XP", description: "Gagner 50 points d’expérience", icon: "zap", color: "purple", metric: "xp", target: 50 },
    { id: "word-collector", title: "Boîte à mots", description: "Découvrir 50 mots anglais", icon: "book", color: "blue", metric: "words", target: 50 },
    { id: "xp-two-hundred", title: "Grande voyageuse", description: "Gagner 200 points d’expérience", icon: "sparkles", color: "pink", metric: "xp", target: 200 },
    { id: "english-star", title: "Étoile de l’anglais", description: "Terminer les 50 leçons", icon: "trophy", color: "pink", metric: "lessons", target: 50 }
  ]
};
