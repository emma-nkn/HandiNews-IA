export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  theme?: string;
  author: string;
  date: string;
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "Innovation touristique et handicap - Ezymob.",
    description:
      "Application utilisant l'IA pour guider les personnes malvoyantes...",
    youtubeId: "iQ6W_H76dGM",
    category: "Mobilité dans les transports",
    theme: "lire",
    author: "Paris Region",
    date: "10/04/2024",
  },
  {
    id: 2,
    title: "Pitch Handépassement - Trophy 2025",
    description: "Solution d'accompagnement sur mesure...",
    youtubeId: "ZMDixV3f8hQ",
    category: "Éducation et Aidants",
    theme: "lire",
    author: "JobinLive",
    date: "15/04/2023",
  },
  {
    id: 3,
    title: "Reportage La Handitech - Focus Elioz.",
    description:
      "Service de relais téléphonique et d'accueil physique en Langue des Signes Française (LSF) ou Transcription Instantanée de la Parole.",
    youtubeId: "6MxGuwKj2L8",
    category: "Accessibilité téléphonique et physique",
    theme: "lire",
    author: "Elioz",
    date: "15/04/2023",
  },
  {
    id: 4,
    title: "L'innovation par et pour les personnes handicapées.",
    description:
      "Association fabriquant des aides techniques (prothèses bioniques, fauteuils motorisés) via l'impression 3D et le 'do it yourself'.",
    youtubeId: "2_nAIteM-1c",
    category: "Innovation collaborative",
    theme: "lire",
    author: "FRANCE 24",
    date: "15/04/2023",
  },

  {
    id: 5,
    title: "Reportage La Handitech - Focus Elioz.",
    description:
      "Service de relais téléphonique et d'accueil physique en Langue des Signes Française (LSF) ou Transcription Instantanée de la Parole.",
    youtubeId: "6MxGuwKj2L8",
    category: "Accessibilité téléphonique et physique",
    theme: "lire",
    author: "Elioz",
    date: "15/04/2023",
  },

  {
    id: 6,
    title: "Conférence e-Handi Tour : Les nouveaux enjeux du numérique",
    description:
      "Marco D'Amico explore comment le Digital Learning et les nouvelles technologies peuvent ouvrir le dialogue sur l'inclusion numérique.",
    youtubeId: "KjlfW3-tlro",
    category: "Digital Learning",
    theme: "Accessibilité",
    author: "e-Handi Tour",
    date: "15/04/2023",
  },
  {
    id: 7,
    title: "L'engagement pour un web inclusif : Projet 2024",
    description:
      "Présentation d'un projet ambitieux lancé en 2024 visant à transformer l'expérience utilisateur sur le web grâce à des interfaces adaptatives.",
    youtubeId: "bOgoH6QOlwM",
    category: "Accessibilité Web ",
    theme: "Accessibilité",
    author: "Evolucare Technologies",
    date: "15/04/2023",
  },

  {
    id: 8,
    title: "L'IA et l'expertise humaine dans l'accessibilité",
    description:
      "Comment intégrer l'accessibilité dès la conception (Shift Left) en utilisant des outils modernes pour dépasser le simple cadre du RGAA.",
    youtubeId: "rUajlng6_yc",
    category: "Normes RGAA ",
    theme: "Accessibilité",
    author: "Warren Walter",
    date: "15/04/2023",
  },

  ////////////////////////////////

  {
    id: 9,
    title: "Wandercraft (Exosquelette de marche aux paraplégiques)",
    description:
      "Présentation d'Atalante, un exosquelette auto-équilibré qui permet aux paraplégiques de remarcher de manière autonome sans béquilles.",
    youtubeId: "4C0kF9GeXJg",
    category: "Temoignage",
    theme: "Technologies d'Assistance ",
    author: "JobinLive",
    date: "17/11/2025",
  },
  {
    id: 10,
    title: "Scewo (Fauteuil roulant grimpeur d'escaliers)",
    description:
      "Présentation du Scewo Bro, un fauteuil roulant électrique capable de monter et descendre des escaliers en toute sécurité.",
    youtubeId: "Y60WoiGETxI",
    category: "Innovation",
    theme: "Technologies d'Assistance ",
    author: "The Wall Street Journal",
    date: "02/12/2023",
  },
  {
    id: 11,
    title: "Xander (Lunettes avec sous-titres en direct)",
    description:
      "Lunettes de réalité augmentée qui affichent en temps réel ce que disent les interlocuteurs pour les personnes malentendantes.",
    youtubeId: "HOB280OaAEo",
    category: "Innovation",
    theme: "Technologies d'Assistance ",
    author: "The Wall Street Journal",
    date: "02/12/2023",
  },
];
