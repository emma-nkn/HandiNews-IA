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
    nom: "HandiLab Innovation",
    categorie: "Recherche",
    image: "/downloavisuel.jpg",
    description:
      "Laboratoire dédié aux technologies d'assistance et à la domotique inclusive.",
    logo: "/logos/handilab.png",
    lien: "#",
  },
  {
    id: 2,
    nom: "Saint-Denis Connect",
    categorie: "Numérique",
    image: "/downloamental.jpg",
    description:
      "Accompagnement des citoyens dans l'accès aux services numériques de la ville.",
    logo: "/logos/sd-connect.png",
    lien: "#",
  },
  {
    id: 3,
    nom: "Inclusion Visuelle",
    categorie: "Accessibilité",
    image: "/downloamental.jpg",
    description:
      "Spécialiste de l'audiodescription et du balisage sonore pour les espaces publics.",
    logo: "/logos/visual.png",
    lien: "#",
  },
];

const Accueil = () => {
  return (
    <div className="flex flex-col w-full">
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
                <span className="text-[#ff7f11]">LABDAY</span>
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
          <div className="carousel carousel-center w-full p-4 space-x-6 rounded-box">
            {Partenaires.map((entreprise) => (
              <div key={entreprise.id} className="carousel-item w-full md:w-90">
                <div className="card bg-base-100 shadow-xl border border-slate-200">
                  <figure className="px-6 pt-6 h-40 bg-white">
                    <img
                      src="/inno_handilab.jpg"
                      className="w-full h-full bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <div className="badge badge-secondary badge-outline text-xs uppercase font-bold">
                      Innovation Tech
                    </div>
                    <h3 className="card-title text-[#1e40af] text-lg">
                      Entreprise Partenaire
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      Expertise en solutions d'accessibilité numérique pour les
                      services publics.
                    </p>
                    <div className="card-actions justify-end mt-4 pt-4 border-t border-slate-100">
                      <button className="btn btn-ghost btn-sm gap-2 text-[#1e40af] lowercase font-normal italic">
                        Voir le projet <ExternalLink size={14} />
                      </button>
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
          <div className="card bg-base-100 shadow-xl border-t-8 border-[#1e40af] hover:shadow-2xl transition-all cursor-pointer group">
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
          </div>

          {/* Carte Innovation */}
          <div className="card bg-base-100 shadow-xl border-t-8 border-[#ff7f11] hover:shadow-2xl transition-all cursor-pointer group">
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
          </div>

          {/* Carte Contact */}
          <div className="card bg-base-100 shadow-xl border-t-8 border-accent hover:shadow-2xl transition-all cursor-pointer group">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
