import Parser from "rss-parser";
import pool from "./base_donnee/connection.js";

const parser = new Parser();

// Exemple de flux RSS pour le handicap (tu peux en ajouter d'autres)
const RSS_FEEDS = [
  "https://www.theverge.com/rss/index.xml", // flux public pour test
];

async function fetchArticles() {
  for (const feedUrl of RSS_FEEDS) {
    const feed = await parser.parseURL(feedUrl);
    for (const item of feed.items) {
      // Filtre par mots-clés
      /* const titleContent = (
        item.title +
        " " +
        (item.contentSnippet || "")
      ).toLowerCase();
      if (
        !titleContent.includes("handitech") &&
        !titleContent.includes("innovation")
      )
        continue;

      // Filtre par localisation
      if (
        !titleContent.includes("saint-denis") &&
        !titleContent.includes("saint denis")
      )
        continue; */

      try {
        await pool.query(
          `INSERT INTO articles
       (title, content_original, category, source_name, source_url, published_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (source_url) DO NOTHING`,
          [
            item.title,
            item.contentSnippet || item.content || "Pas de contenu",
            item.categories
              ? item.categories.join(", ")
              : "Innovation Handitech",
            feed.title,
            item.link,
            item.pubDate ? new Date(item.pubDate) : new Date(),
          ],
        );
      } catch (err) {
        console.error("Erreur insertion article :", err);
      }
    }
  }
  console.log("✅ Articles récupérés et insérés");
}

fetchArticles();
