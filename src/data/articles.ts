export interface Article {
  id: number;
  title: string;
  categorie: string;
  date: string;
  description: string;
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
  publishedAt?: string;
}

export const ArticleData: Article[] = [
  {
    id: 1,
    title: "Fauteuil roulant commandé par la pensée : une avancée majeure",
    categorie: "Innovation",
    date: "22 Mars 2026",
    description:
      "Une startup française vient de lever 2 millions d'euros pour son interface cerveau-machine dédiée à la mobilité réduite.",
    urlToImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    source: {
      name: "Tech Access",
    },
    url: "",
  },
  {
    id: 2,
    title: "France 2030 : Nouveaux appels à projets pour le handicap",
    categorie: "Public",
    date: "20 Mars 2026",
    description:
      "Le gouvernement débloque de nouveaux fonds pour les solutions numériques favorisant l'inclusion scolaire.",
    urlToImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    source: {
      name: "Ministère",
    },
    url: "",
  },
  {
    id: 3,
    title: "Intelligence Artificielle et dyslexie : l'outil révolutionnaire",
    categorie: "Privé",
    date: "18 Mars 2026",
    description:
      "Découvrez comment cette nouvelle application utilise l'IA pour adapter les textes en temps réel pour les élèves DYS.",
    urlToImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    source: {
      name: "HandiTech News",
    },
    url: "",
  },
];
