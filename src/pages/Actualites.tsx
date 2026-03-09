import { ArticleData } from "../data/articles";

const Actualites = () => {
  return (
    <main
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
        }}
      >
        Actualités
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {ArticleData.map((article) => (
          <article
            key={article.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "20px", flexGrow: 1 }}>
              <span
                style={{
                  color: "#007bff",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                {article.source.name}
              </span>
              <h2
                style={{ fontSize: "1.25rem", margin: "10px 0", color: "#333" }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                {article.description}
              </p>
            </div>

            <div style={{ padding: "20px", borderTop: "1px solid #eee" }}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Lire l'article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Actualites;
