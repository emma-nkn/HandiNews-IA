import type { url } from "inspector";
import { ArticleData } from "../data/articles";

const ArticlesData = [
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
    titre: "France 2030 : Nouveaux appels à projets pour le handicap",
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
    titre: "Intelligence Artificielle et dyslexie : l'outil révolutionnaire",
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

const Actualites = () => {
  return (
    <>
      <section className="px-6 pt-32 items-center py-20 max-w-7xl mx-auto">
        {/* TEXTE CENTRÉ : Ajout de flex-col et items-center */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e40af] mb-6 uppercase tracking-tight">
            Actualités du handicap <br className="hidden md:block" /> à
            Saint-Denis
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Découvrez les dernières innovations handitech, initiatives locales
            et projets qui améliorent concrètement la vie des personnes en
            situation de handicap.
          </p>
        </div>

        {/* GRILLE D'IMAGES : On utilise des hauteurs fixes Tailwind standards */}
        <div className="flex items-end justify-center gap-4 overflow-x-auto scrollbar-hide">
          <img
            src="/downloauditif.jpg"
            alt="Handicap auditif"
            className="w-40 h-56 object-cover rounded-[2rem] shadow-md hover:-translate-y-2 transition-transform duration-300"
          />

          <img
            src="/downloamental.jpg"
            alt="Handicap mental"
            className="w-40 h-72 object-cover rounded-[2rem] shadow-md hover:-translate-y-2 transition-transform duration-300"
          />

          {/* L'image centrale est la plus grande */}
          <img
            src="/downloavisuel.jpg"
            alt="Handicap visuel"
            className="w-48 h-96 object-cover rounded-[2rem] shadow-2xl border-4 border-[#ff7f11]/10 hover:-translate-y-2 transition-transform duration-300"
          />

          <img
            src="/downloauditif.jpg"
            alt="Soutien"
            className="w-40 h-72 object-cover rounded-[2rem] shadow-md hover:-translate-y-2 transition-transform duration-300"
          />

          <img
            src="/download.jpg"
            alt="Mobilité"
            className="w-40 h-56 object-cover rounded-[2rem] shadow-md hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-10 overflow-hidden px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white">
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
                  <input
                    type="checkbox"
                    className=" w-4 h-4 rounded-full bg-slate-200 group-hover:bg-[#ff7f11] transition-colors"
                  />
                  <label>{cat}</label>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* SECTION ARTICLES (GRILLE À DROITE) */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ArticlesData.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image de l'article */}
                <figure className="relative h-56 overflow-hidden">
                  <img
                    src={article.urlToImage}
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
                    <span className="text-[#1e40af]">
                      {article.source.name}
                    </span>
                  </div>

                  <a
                    href=""
                    className="text-xl font-bold text-[#1e40af] leading-tight mb-4 group-hover:text-[#ff7f11] transition-colors"
                  >
                    {article.title}
                  </a>

                  <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {article.description}
                  </p>

                  <button className="flex items-center gap-2 text-[#1e40af] font-black text-xs uppercase tracking-widest group/btn">
                    <a href="">Lire la suite</a>
                    <div className="w-8 h-[2px] bg-[#ff7f11] group-hover/btn:w-12 transition-all"></div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Actualites;
