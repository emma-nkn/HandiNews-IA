import { useState, useMemo } from "react";

const articlesData = [
  {
    id: 1,
    title: "Fauteuil roulant commandé par la pensée : une avancée majeure",
    categorie: "Innovation",
    date: "22 mars 2026",
    description:
      "Une startup française vient de lever 2 millions d'euros pour son interface cerveau-machine dédiée à la mobilité réduite.",
    urlToImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    source: { name: "Tech Access" },
    url: "",
  },
  {
    id: 2,
    title: "France 2030 : nouveaux appels à projets pour le handicap",
    categorie: "Public",
    date: "20 mars 2026",
    description:
      "Le gouvernement débloque de nouveaux fonds pour les solutions numériques favorisant l'inclusion scolaire et professionnelle.",
    urlToImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    source: { name: "Ministère" },
    url: "",
  },
  {
    id: 3,
    title: "Intelligence artificielle et dyslexie : l'outil révolutionnaire",
    categorie: "Privé",
    date: "18 mars 2026",
    description:
      "Découvrez comment cette nouvelle application utilise l'IA pour adapter les textes en temps réel pour les élèves DYS.",
    urlToImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    source: { name: "HandiTech News" },
    url: "",
  },
  {
    id: 4,
    title: "Saint-Denis : une journée portes ouvertes pour l'emploi inclusif",
    categorie: "Événements",
    date: "15 mars 2026",
    description:
      "La mairie organise un forum réunissant 40 entreprises engagées pour l'emploi des personnes en situation de handicap. Inscriptions ouvertes.",
    urlToImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    source: { name: "Mairie de Saint-Denis" },
    url: "",
  },
  {
    id: 5,
    title: "Exosquelette de marche : les premiers essais en milieu urbain",
    categorie: "Innovation",
    date: "12 mars 2026",
    description:
      "Une équipe de chercheurs de l'INRIA a testé avec succès un exosquelette léger dans les rues de Lyon. Une première mondiale en conditions réelles.",
    urlToImage:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
    source: { name: "INRIA Media" },
    url: "",
  },
  {
    id: 6,
    title: "La MDPH en ligne : simplification des démarches dès avril",
    categorie: "Public",
    date: "10 mars 2026",
    description:
      "Le nouveau portail numérique de la MDPH de Seine-Saint-Denis permet de déposer et suivre toutes ses demandes depuis chez soi, sans rendez-vous.",
    urlToImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    source: { name: "MDPH 93" },
    url: "",
  },
  {
    id: 7,
    title: "HandiSport 93 ouvre trois nouvelles sections sportives",
    categorie: "Événements",
    date: "8 mars 2026",
    description:
      "Basketball en fauteuil, para-athlétisme et natation adaptée : le club HandiSport 93 accueille ses nouvelles recrues dès le mois d'avril.",
    urlToImage:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800",
    source: { name: "HandiSport 93" },
    url: "",
  },
  {
    id: 8,
    title: "Des lunettes connectées pour guider les malvoyants en ville",
    categorie: "Innovation",
    date: "5 mars 2026",
    description:
      "Une jeune pousse parisienne lance des lunettes à retour haptique capables de détecter obstacles et feux de circulation en temps réel.",
    urlToImage:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
    source: { name: "Startup Inside" },
    url: "",
  },
  {
    id: 9,
    title: "Inclusion scolaire : un accompagnant pour chaque élève en besoin",
    categorie: "Public",
    date: "2 mars 2026",
    description:
      "Le rectorat de Créteil annonce un plan de recrutement de 600 AESH supplémentaires pour la rentrée 2026, avec une priorité donnée au département 93.",
    urlToImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    source: { name: "Rectorat de Créteil" },
    url: "",
  },
  {
    id: 10,
    title: "Application vocale : contrôle total du smartphone sans les mains",
    categorie: "Privé",
    date: "28 février 2026",
    description:
      "L'application HandsFree atteint 200 000 utilisateurs en France. Elle permet de piloter n'importe quelle app Android et iOS par la seule voix.",
    urlToImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    source: { name: "HandsFree App" },
    url: "",
  },
  {
    id: 11,
    title: "Hackathon Handitech : 48h pour imaginer la ville inclusive",
    categorie: "Événements",
    date: "25 février 2026",
    description:
      "Étudiants, designers et développeurs se retrouvent à la Plaine Saint-Denis pour concevoir des solutions numériques d'accessibilité urbaine.",
    urlToImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    source: { name: "Handitech Paris" },
    url: "",
  },
  {
    id: 12,
    title: "Traduction automatique en LSF : où en est la technologie ?",
    categorie: "Innovation",
    date: "20 février 2026",
    description:
      "Plusieurs startups misent sur la reconnaissance gestuelle par IA pour générer de la langue des signes française en temps réel depuis n'importe quel contenu vidéo.",
    urlToImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    source: { name: "LSF Digital" },
    url: "",
  },
];

const CATEGORIES = ["Tous", "Innovation", "Public", "Privé", "Événements"];

const BADGE_COLORS: Record<string, string> = {
  Innovation: "bg-blue-50 text-blue-800 border border-blue-200",
  Public: "bg-amber-50 text-amber-800 border border-amber-200",
  Privé: "bg-purple-50 text-purple-800 border border-purple-200",
  Événements: "bg-green-50 text-green-800 border border-green-200",
};

const getBadgeClass = (cat: string) =>
  BADGE_COLORS[cat] ?? "bg-slate-100 text-slate-700 border border-slate-200";

export default function Actualites() {
  const [activeCat, setActiveCat] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return articlesData.filter((a) => {
      const catOk = activeCat === "Tous" || a.categorie === activeCat;
      const q = search.toLowerCase();
      const searchOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.categorie.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [activeCat, search]);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ff7f11] mb-3">
            Saint-Denis · Île-de-France
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-[#1e40af] leading-tight mb-4 uppercase tracking-tight">
            Actualités
            <br />
            du handicap
          </h1>
          <p className="text-slate-500 text-base leading-relaxed max-w-md">
            Innovations handitech, initiatives locales et projets qui améliorent
            concrètement la vie des personnes en situation de handicap.
          </p>
        </div>

        {/* Collage d'images asymétrique */}
        <div
          className="grid grid-cols-2 gap-2"
          style={{ gridTemplateRows: "120px 120px" }}
        >
          <div className="rounded-2xl overflow-hidden row-span-1">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="rounded-2xl overflow-hidden row-span-2">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="rounded-2xl overflow-hidden row-span-1">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <hr className="border-slate-100 max-w-7xl mx-auto" />

      {/* ── TOOLBAR ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 mr-2 font-medium uppercase tracking-widest">
          Filtrer
        </span>

        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 font-medium ${
              activeCat === cat
                ? "bg-[#1e40af] text-white border-[#1e40af]"
                : "bg-white text-slate-500 border-slate-200 hover:border-[#1e40af] hover:text-[#1e40af]"
            }`}
          >
            {cat}
          </button>
        ))}

        <div className="ml-auto">
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm px-4 py-2 rounded-full border border-slate-200 bg-slate-50 outline-none focus:border-[#1e40af] transition-colors w-44"
          />
        </div>
      </section>

      {/* ── GRILLE ÉDITORIALE ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {/* Compteur */}
        <p className="text-xs text-slate-400 mb-4">
          <span className="font-semibold text-slate-700">
            {filtered.length}
          </span>{" "}
          article{filtered.length !== 1 ? "s" : ""} affiché
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-sm">
            Aucun article trouvé.
          </div>
        )}

        {filtered.length > 0 && (
          <div
            className={`grid gap-4 ${
              filtered.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 lg:grid-cols-3"
            }`}
          >
            {/* Article vedette */}
            <article
              className={`group bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col hover:border-slate-200 transition-all duration-300 ${
                filtered.length > 1 ? "lg:col-span-2" : ""
              }`}
            >
              <figure className="relative overflow-hidden h-64">
                <img
                  src={featured.urlToImage}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full ${getBadgeClass(
                    featured.categorie,
                  )}`}
                >
                  {featured.categorie}
                </span>
              </figure>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-3">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 inline-block" />
                  <span className="text-[#1e40af] font-medium">
                    {featured.source.name}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1e40af] leading-snug mb-3 group-hover:text-[#ff7f11] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
                  {featured.description}
                </p>
                <a
                  href={featured.url || "#"}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1e40af] group/cta"
                >
                  Lire la suite
                  <span className="h-[2px] w-5 bg-[#ff7f11] inline-block transition-all duration-200 group-hover/cta:w-8" />
                </a>
              </div>
            </article>

            {/* Articles secondaires empilés */}
            {rest.length > 0 && (
              <div className="flex flex-col gap-4">
                {rest.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-2xl border border-slate-100 overflow-hidden flex hover:border-slate-200 transition-all duration-300"
                  >
                    <figure className="w-28 flex-shrink-0 overflow-hidden">
                      <img
                        src={article.urlToImage}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt=""
                      />
                    </figure>
                    <div className="p-4 flex flex-col justify-between flex-grow min-w-0">
                      <div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getBadgeClass(
                            article.categorie,
                          )}`}
                        >
                          {article.categorie}
                        </span>
                        <h3 className="text-sm font-bold text-slate-800 leading-snug mt-2 mb-1 line-clamp-2 group-hover:text-[#1e40af] transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 inline-block" />
                        <span className="text-[#1e40af]">
                          {article.source.name}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
