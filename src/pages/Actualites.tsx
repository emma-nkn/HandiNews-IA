import { ArticleData } from "../data/articles";

const dummyArticles = [
  {
    id: 1,
    titre: "Fauteuil roulant commandé par la pensée : une avancée majeure",
    categorie: "Innovation",
    date: "22 Mars 2026",
    description:
      "Une startup française vient de lever 2 millions d'euros pour son interface cerveau-machine dédiée à la mobilité réduite.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    source: "Tech Access",
  },
  {
    id: 2,
    titre: "France 2030 : Nouveaux appels à projets pour le handicap",
    categorie: "Public",
    date: "20 Mars 2026",
    description:
      "Le gouvernement débloque de nouveaux fonds pour les solutions numériques favorisant l'inclusion scolaire.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    source: "Ministère",
  },
  {
    id: 3,
    titre: "Intelligence Artificielle et dyslexie : l'outil révolutionnaire",
    categorie: "Privé",
    date: "18 Mars 2026",
    description:
      "Découvrez comment cette nouvelle application utilise l'IA pour adapter les textes en temps réel pour les élèves DYS.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    source: "HandiTech News",
  },
];

const Actualites = () => {
  return (
    <div className="max-w-7xl mx-auto pt-32 pb-20  overflow-hidden py-12 px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white">
      {/* SECTION FILTRES (STIQUE À GAUCHE) */}
      <aside className="lg:col-span-3 h-fit lg:sticky lg:top-24 space-y-8">
        <div>
          <h2 className="text-2xl font-black text-[#1e40af] uppercase mb-6">
            Filtres
          </h2>

          {/* Recherche */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-[#ff7f11] outline-none transition-all italic text-sm"
            />
          </div>

          {/* Catégories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Catégories
            </h4>
            {[
              "Tous",
              "Technologie et Innovation",
              "Accessibilité",
              "Privé",
              "Evénements",
            ].map((cat) => (
              <button
                key={cat}
                className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-slate-50 text-[#1e40af] font-medium transition-all group"
              >
                <span>{cat}</span>
                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#ff7f11]"></div>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* SECTION ARTICLES (GRILLE À DROITE) */}
      <main className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image de l'article */}
              <figure className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt=""
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#ff7f11] uppercase shadow-sm">
                    {article.categorie}
                  </span>
                </div>
              </figure>

              {/* Contenu */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[#1e40af]">{article.source}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1e40af] leading-tight mb-4 group-hover:text-[#ff7f11] transition-colors">
                  {article.titre}
                </h3>

                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {article.description}
                </p>

                <button className="flex items-center gap-2 text-[#1e40af] font-black text-xs uppercase tracking-widest group/btn">
                  Lire la suite
                  <div className="w-8 h-[2px] bg-[#ff7f11] group-hover/btn:w-12 transition-all"></div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Actualites;
