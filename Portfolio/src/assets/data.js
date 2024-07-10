export const professionalProjects = [
    {
        title: "ArgentBank",
        descriptionEn: "Implement a Redux store & MongoDB paths for a banking app",
        descriptionFr: "Implémenter un store Redux & des routes MongoDB pour une application bancaire",
        tags: ["html5", "css3", "javascript", "redux", "mongodb", "react", "react-router", "vite", "sass", "git"],
        imgSrc: "/Portfolio/OpenClassrooms.webp",
        url: "https://github.com/ZigZob/ArgentBank-website",
        isLive: true,
    },
    {
        title: "Kasa",
        descriptionEn: "Implement the front end of a C2C property rental app with React Router",
        descriptionFr: "Implémenter le front end d'une application de location entre particuliers avec React Router",
        tags: ["html5", "css3", "javascript", "vite", "react-router", "react", "sass", "git"],
        imgSrc: "/Portfolio/OpenClassrooms.webp",
        url: "https://github.com/ZigZob/Projet8",
        isLive: true,
    },
    {
        title: "724 Events",
        descriptionEn: "Debugging a website with Jest & React Dev Tools",
        descriptionFr: "Déboggage d'un site web avec Jest & React Dev Tools",
        tags: ["html5", "css3", "javascript", "jest", "react", "git"],
        imgSrc: "/Portfolio/OpenClassrooms.webp",
        url: "https://github.com/ZigZob/Projet10",
        isLive: true,
    },
];

export const gamingProjects = [
    {
        title: "BO Discount Helper",
        descriptionEn: "A web app that displays the state of your district discount for the game Civilization VI",
        descriptionFr: "Une web app affichant l'état actuel de votre BO discount pour le jeu Civilization VI",
        tags: ["html5", "css3", "javascript", "redux", "react", "vite", "sass", "git"],
        imgSrc: "/Portfolio/civ6.webp",
        isLive: false,
    },
    {
        title: "World Congress Calculator",
        descriptionEn: "An online calculator to help you split diplomatic favors evenly among teammates for the game Civilization VI",
        descriptionFr: "Un calculateur en ligne pour vous aider à partager correctement vos faveurs diplomatiques entre chaque coéquipier pour le jeu Civilization VI",
        tags: ["html5", "css3", "javascript", "redux", "react", "vite", "sass", "git"],
        imgSrc: "/Portfolio/civ6.webp",
        isLive: false,
    }
];

export const database = {
    "fr_day": {
        headerBtn: "La page affiche actuellement les projets professionels, appuyer içi pour afficher les projets liés au monde du jeu vidéo",
        hero: ["Faites la connaissance d'",
            "Alexandre AMALRIC",
            "mais vous pouvez m'appeler",
            "Alex"
        ],
        heading2: "Projets de formation",
    },
    "fr_night": {
        headerBtn: "La page affiche actuellement les projets liés au monde du jeu vidéo, appuyer içi pour afficher les projets professionels",
        hero: ["Faites la connaissance de ",
            "ZigZog",
            "mais vous pouvez m'appeler",
            "Zig",
        ],
        heading2: "Projets Gaming",
    },
    "en_day": {
        headerBtn: "The page is currently displaying the professional projects, press here if you want to display the gaming projects",

        hero: ["Meet ",
            "Alexandre AMALRIC",
            "but you can call me",
            "Alex",
        ],
        heading2: "Bootcamp projects",
    },
    "en_night": {
        headerBtn: "The page is currently displaying the gaming projects, press here if you want to display the professional projects",
        hero: ["Meet ",
            "ZigZog",
            "but you can call me",
            "Zig",
        ],
        heading2: "Gaming projects",
    },
}