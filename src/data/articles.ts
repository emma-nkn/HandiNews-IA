export interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
  publishedAt?: string; // Optionnel pour l'instant
}

export const ArticleData: Article[] = [
  {
    id: 1,
    title: "L'essor de l'IA en 2026",
    description:
      "Comment l'intelligence artificielle transforme le développement web cette année.",
    url: "https://exemple.com/article1",
    urlToImage: "https://picsum.photos/400/250",
    source: { name: "Tech Hebdo" },
  },
  {
    id: 2, // ID unique ici
    title: "La vie de mon proche après moi",
    description:
      "Une soirée animée par Philippe Bourdel, ancien notaire, et Frère Marc...",
    url: "https://www.och.fr/31495-2/",
    urlToImage: "https://picsum.photos/400/250",
    source: { name: "Fondation OCH" },
  },
];
