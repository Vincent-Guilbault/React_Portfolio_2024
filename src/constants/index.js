import projectReactPortfolio from "../assets/ReactPortfolio_Thumbnail_Large.png";
import projectHarmonize from "../assets/Harmonize_Thumbnail_Large.png";
import projectMealPlanner from "../assets/MealPlanner_Thumbnail_Large.png";

export const HERO_CONTENT = `Possèdant de bonnes connaissances en HTML, CSS, JavaScript, et
              bien plus, je suis un maillon fort qui transforme les concepts en
              réalités digitales dynamiques. Curieux et proactif, je m'adapte
              aux dernières tendances pour mener vos projets vers le succès!`;

export const ABOUT_TEXT = `Bonjour, je m'appelle Vincent Guilbault et je suis diplômé en
              Techniques d'intégration multimédia au Cégep de Saint-Jérôme! Spécialisé en 
              développement front-end, je suis passionné par la création d’interfaces web 
              modernes, accessibles et bien pensées.
              J’aime concevoir des expériences utilisateurs fluides et esthétiques à l’aide 
              de technologies comme React, Tailwind CSS et JavaScript. J'ai donc hâte d'avoir 
              la chance d'enrichir mes compétences ainsi que mes connaissances à vos côtés!`;

export const EXPERIENCES = [
  {
    year: "2018 - 2024 | 2025 - Présent",
    role: "Commis fruits et légumes",
    company: "Super C",
    description: `En tant que commis en fruits et légumes pendant plusieurs années, j’ai acquis une solide expérience en service à la clientèle, en m’assurant de maintenir un haut niveau de satisfaction et d’adapter mon approche selon les besoins des consommateurs.`,
    skills: ["Travail d'équipe", "Service client", "Satisfaction client"],
  },
  {
    year: "2024",
    role: "Stage, Développeur Back-end",
    company: "Codems",
    description: `En tant que stagiaire développeur web back-end, j'ai conçu et développé des applications similaires aux 'to-do apps,' en utilisant Laravel, Livewire, PHP, Docker et Tailwind. Ce stage m'a permis de renforcer mes compétences techniques en environnement back-end tout en maîtrisant l'intégration d'outils modernes pour le développement et le déploiement d'applications.`,
    skills: ["Laravel", "Livewire", "Docker", "PHP", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "React Portfolio",
    image: projectReactPortfolio,
    category: "Projet Personnel",
    description:
      "Un portfolio personnel developpé avec React et Tailwind, présentant mes projets, mes compétences et des informations afin de me contacter.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
    liveDemo: "",
    sourceCode: "https://github.com/Vincent-Guilbault/React_Portfolio_2024",
  },
  {
    title: "Meal Planner",
    image: projectMealPlanner,
    category: "Projet Personnel",
    description:
      "Une application de planification de repas permettant aux utilisateurs de créer des plans de repas personnalisés en fonction de leurs préférences.",
    technologies: ["HTML", "CSS", "Laravel", "React", "MySQL"],
    liveDemo: "https://mealplanner.vincentguilbault.com/",
    sourceCode: "https://github.com/Vincent-Guilbault/Recipe-App",
  },
  {
    title: "Harmonize",
    image: projectHarmonize,
    category: "Projet Scolaire",
    description:
      "Une application de gestion musicale entièrement fonctionnelle permettant aux utilisateurs d'écouter leurs chansons préférées, ainsi que de créer, modifier et gérer leurs playlists.",
    technologies: ["HTML", "JavaScript", "React", "Firebase"],
    liveDemo: "https://harmonize2000.netlify.app",
    sourceCode: "https://github.com/Vincent-Guilbault/Web5-Synthese/tree/main",
  },
  {
    title: "Tomb Survivor",
    video: "https://player.vimeo.com/video/1028216495",
    category: "Projet Scolaire",
    description:
      "Un jeu de survie en 3D, où les joueurs doivent naviguer dans un monde sombre et dangereux rempli de créatures mortes-vivantes.",
    technologies: ["Unity", "C#", "Blender"],
    liveDemo:
      "https://drive.google.com/file/d/17AQxvMKtU1jSTyyMtLvMnCgIwPZ613PQ/view",
    sourceCode: "",
  },
];

export const CONTACT = {
  address: "Terrebonne, Québec, Canada",
  phoneNo: "+1 (514) 891-1353",
  email: "guilbault190@gmail.com",
};
