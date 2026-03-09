import {
  ArrowRight,
  Newspaper,
  Lightbulb,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const Partenaires = [
  {
    id: 1,
    nom: "Cantoo",
    categorie: "Technologique",
    image: "/Cantoo-Logos-06-1-1024x519.png",
    description:
      "entreprise sociale et solidaire,  qui développe des outils d’aide technologique pour favoriser l’inclusion des élèves et apprenants à besoins éducatifs particuliers. ",
    lien: "https://www.cantoo.fr/",
  },
  {
    id: 2,
    nom: "Tomo",
    categorie: "Santé",
    image: "/Tomo8.jpg",
    description:
      "Des solution permetant d’humaniser les parcours de vie, de soins et de réduire les ruptures de parcours en offrant un accès à un soutien empathique, validé et encadré.",
    lien: "https://www.jointomo.com/",
  },
  {
    id: 3,
    nom: "Neutralit",
    categorie: "Santé",
    image: "/logo-neutralit.jpg",
    description:
      "Neutralit soulage la contrainte des aidants et des familles avec une personne ayant un trouble du handicap ou maladies neurodégénératives.",
    lien: "https://www.neutralit.fr/",
  },
  {
    id: 4,
    nom: "Inclusion Conseil",
    categorie: "innovation sociale",
    image: "/inclusion_conseil.png",
    description:
      "Organisme de formation, avec une pédagogie basée sur une méthode de design sociale qui a aujourd'hui largement fait ses preuves.",
    lien: "https://inclusionconseil.fr/",
  },
  {
    id: 5,
    nom: "Neutralit",
    categorie: "Santé",
    image: "/logo-neutralit.jpg",
    description:
      "Neutralit soulage la contrainte des aidants et des familles avec une personne ayant un trouble du handicap ou maladies neurodégénératives.",
    lien: "https://www.neutralit.fr/",
  },
  {
    id: 6,
    nom: "Neutralit",
    categorie: "Santé",
    image: "/logo-neutralit.jpg",
    description:
      "Neutralit soulage la contrainte des aidants et des familles avec une personne ayant un trouble du handicap ou maladies neurodégénératives.",
    lien: "https://www.neutralit.fr/",
  },
  {
    id: 7,
    nom: "Neutralit",
    categorie: "Santé",
    image: "/logo-neutralit.jpg",
    description:
      "Neutralit soulage la contrainte des aidants et des familles avec une personne ayant un trouble du handicap ou maladies neurodégénératives.",
    lien: "https://www.neutralit.fr/",
  },
];

const Accueil = () => {
  return (
    <main className="flex flex-col w-full">
      {/* SECTION HERO -*/}
      <section className="relative bg-[#1e40af] text-primary-content py-20 px-4 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-22">
          <div className="flex-1 text-left z-10">
            <h1 className="text-9xl lg:text-5xl font-black leading-none mb-6">
              TOUTE L'ACTUALITE <br />
              SUR
              <span className="text-[#ff7f11] italic"> LE HANDICAP</span> <br />
              ET L'INNOVATION.
            </h1>
            <p className="text-xl opacity-90 max-w-lg mb-8">
              Découvrez l'actualité de l'accessibilité et les innovations
              inclusives au cœur de la commune de Saint-Denis.
            </p>
            <div className="flex gap-4">
              <button className="btn  bg-[#ff7f11] hover:bg-white hover:text-black border-transparent btn-lg text-white rounded-full shadow-xl">
                Dernières Actus
              </button>
              <button className="btn btn-outline btn-[#ff7f11]  btn-lg rounded-full">
                S'inscrire
              </button>
            </div>
          </div>

          {/* Image app à faire sur photoShop*/}
          <div className="flex-1 relative">
            <div className="w-sm  flex items-center justify-center">
              <img src="/phone01-1.png" alt="HandiNews" className="w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/*  SECTION APROPOS-  */}
      <section className="max-w-6xl mx-auto my-18 flex flex-col lg:flex-row items-center gap-12 ">
        <div className="flex-1 relative">
          <div className="w-full h-80 bg-slate-200 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center border-6 border-[#ff7f11] overflow-hidden">
            <img src="/inno_handilab.jpg" alt="HandiNews" className="w-xl" />
          </div>
        </div>
        <div className="max-w-xl">
          <span className="text-sm text-[#ff7f11] underline italic">
            HANDINEWS
          </span>
          <h2 className="text-2xl lg:text-3xl text-[#1e40af] font-bold leading-none mb-6">
            UNE PLATEFORME DEDIEE A L'INFORMATION SUR LE HANDICAP
          </h2>
          <p className=" max-w-xl text-sm  text-justify">
            HandiNews centralise les informations essentielles liées au
            handicap, à l’accessibilité numérique et aux innovations inclusives.
            Nous mettons en avant les innovations, les avancées médicales et les
            initiatives positives qui font évoluer la société.
          </p>
          <p className=" max-w-xl text-sm py-3 text-justify font-bold italic">
            Notre plateforme a été pensée pour être utile, accessible et
            inspirante pour plusieurs types de publics :
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 mt-2">
            {[
              "Personnes en situation de handicap",
              "Les familles et les aidants",
              "Développeurs et passionnés d'innovation",
              "Professionnels de la santé et du social",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <CheckCircle2
                  className="text-[#ff7f11] group-hover:scale-110 transition-transform"
                  size={20}
                  strokeWidth={3}
                />
                <span className="text-sm font-medium opacity-90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button className="btn btn-outline  text-[#ff7f11] hover:bg-[#ff7f11] hover:text-white hover:border-[#ff7f11] rounded-full px-8 group">
              En savoir plus
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1  transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION CHIFFRES -  */}
      <section className=" bg-base-500 px-4 flex justify-center ">
        <div className="w-auto mx-auto stats  shadow">
          <div className="stat w-sm">
            <div className="stat-figure text-[#1e40af]">
              <Newspaper size={52} />
            </div>
            <div className="stat-title font-bold text-lg text-black">
              Articles publiés
            </div>
            <div className="stat-value text-[#1e40af]">124</div>
            <div className="stat-desc">Depuis le début de l'année</div>
          </div>
          <div className="stat w-sm">
            <div className="stat-figure text-[#ff7f11]">
              <Lightbulb size={52} />
            </div>
            <div className="stat-title font-bold text-lg text-black">
              Innovations
            </div>
            <div className="stat-value text-[#ff7f11]">12</div>
            <div className="stat-desc text-[#ff7f11]">
              Projets à Saint-Denis
            </div>
          </div>
          <div className="stat w-sm">
            <div className="stat-figure text-accent">
              <Users size={52} />
            </div>
            <div className="stat-title font-bold text-lg text-black">
              Lecteurs
            </div>
            <div className="stat-value text-accent">5.2k</div>
            <div className="stat-desc">Membres engagés</div>
          </div>
        </div>
      </section>

      {/* SECTION PARTENAIRES LABDAY */}
      <section className="bg-slate-100 py-16 px-4 lg:px-20 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black text-[#1e40af] leading-tight">
                LES PARTENAIRES DU{" "}
                <span className="text-[#ff7f11]">HANDILAB</span>
              </h2>
              <p className="text-slate-600 mt-2">
                Ils soutiennent l'innovation inclusive et l'accessibilité au
                sein de la commune de Saint-Denis.
              </p>
            </div>

            <button className="btn btn-outline  text-[#ff7f11] hover:bg-[#ff7f11] hover:text-white hover:border-[#ff7f11] rounded-full px-8 group">
              En savoir plus
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1  transition-transform"
              />
            </button>
          </div>

          {/* LE CARROUSEL DE CARTES */}
          {/* Boutons de navigation du carrousel */}
          <div className="flex gap-2">
            <button className="btn btn-circle btn-outline bg-[#1e40af]  hover:bg-[#1e40af] hover:border-[#1e40af] text-white  shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button className="btn btn-circle btn-[#1e40af] hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white  shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="carousel carousel-center w-full p-4 space-x-6 rounded-box bg-slate-50/50">
            {Partenaires.map((entreprise) => (
              <div key={entreprise.id} className="carousel-item w-full md:w-89">
                <div className="card bg-white shadow-xl border border-slate-200 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                  {/* Figure : Conteneur d'image fixe pour l'alignement */}
                  <figure className="px-6 pt-6 h-48 bg-white shrink-0">
                    <img
                      src={entreprise.image}
                      alt={`Logo de ${entreprise.nom}`}
                      className="w-full h-full object-contain rounded-xl border border-slate-50 p-2"
                    />
                  </figure>

                  <div className="card-body flex flex-col justify-between">
                    <div>
                      {/* Badge de catégorie */}
                      <div className="badge border-[#ff7f11] text-[#ff7f11] badge-outline text-[10px] uppercase font-black px-3">
                        {entreprise.categorie}
                      </div>

                      {/* Nom de l'entreprise */}
                      <h3 className="card-title text-[#1e40af] text-xl font-black mt-3">
                        {entreprise.nom}
                      </h3>

                      {/* Description avec limite de 3 lignes pour garder l'alignement */}
                      <p className="text-sm text-slate-500 line-clamp-3 mt-2 leading-relaxed italic">
                        "{entreprise.description}"
                      </p>
                    </div>

                    {/* Action : Lien dynamique */}
                    <div className="card-actions justify-end mt-6 pt-4 border-t border-slate-100">
                      <a
                        href={entreprise.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm gap-2 text-[#1e40af] font-bold normal-case hover:bg-blue-50 group"
                        aria-label={`Visiter le site de ${entreprise.nom} (nouvelle fenêtre)`}
                      >
                        Voir le site{" "}
                        <ExternalLink
                          size={14}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center">
          NOS{" "}
          <span className="text-[#ff7f11] underline decoration-4 underline-offset-8">
            RUBRIQUES
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Actualités */}
          <a
            href="/actualites"
            className="card bg-base-100 shadow-xl border-t-8 border-[#1e40af] hover:shadow-2xl transition-all cursor-pointer group"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold group-hover:text-[#1e40af] transition-colors">
                Actualités
              </h3>
              <p>
                Restez informé des dernières décisions et événements sur
                l'accessibilité locale.
              </p>
              <div className="card-actions justify-end mt-4">
                <div className="badge bg-[#1e40af] p-4 text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>

          {/* Carte Innovation */}
          <a
            href="/innovation"
            className="card bg-base-100 shadow-xl border-t-8 border-[#ff7f11] hover:shadow-2xl transition-all cursor-pointer group"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold hover:text-[#ff7f11] transition-colors">
                Innovation
              </h3>
              <p>
                Focus sur les startups et technologies qui changent le
                quotidien.
              </p>
              <div className="card-actions justify-end mt-4">
                <div className="badge bg-[#ff7f11] p-4 text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>

          {/* Carte Contact */}
          <a
            href="/contact"
            className="card bg-base-100 shadow-xl border-t-8 border-accent hover:shadow-2xl transition-all cursor-pointer group"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold group-hover:text-accent transition-colors">
                Communauté
              </h3>
              <p>
                Partagez votre témoignage et suggérez des sujets à notre
                rédaction.
              </p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-accent p-4 text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Accueil;
