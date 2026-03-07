import { useEffect, useState } from "react";

// Définir le type d'un article
interface Article {
  id: number;
  title: string;
  content_original: string;
  category: string;
  source_name: string;
  source_url: string;
  published_at: string;
  created_at: string;
  ai_processed: boolean;
}

export default function Actualites() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((res) => res.json())
      .then((data: Article[]) => setArticles(data))
      .catch((err) => console.error("Erreur fetch articles :", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-700">
        Chargement des articles...
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Actualités HandiNews
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-600">
          Aucun article disponible pour le moment.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-2">
                {article.content_original.length > 200
                  ? article.content_original.slice(0, 200) + "..."
                  : article.content_original}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Source : {article.source_name} | Publié le{" "}
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <a
                href={article.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Lire l'article
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
