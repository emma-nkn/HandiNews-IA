import { useState, useEffect } from "react";
import { videosData } from "../data/videos";
import "../styles/innovation.css";

import {
  Cpu,
  Smartphone,
  Accessibility,
  ArrowRight,
  Tv,
  Play,
  User,
  Calendar,
} from "lucide-react";
const Innovation = () => {
  const phrases = [
    "Innovation dionysienne pure",
    "Mobilité sans aucune limite",
    "L'inclusion au quotidien",
    "La technologie pour tous",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [activeVideo, setActiveVideo] = useState(videosData[0]);
  const assistanceVideos = videosData.filter(
    (v) => v.theme?.trim() === "Technologies d'Assistance",
  );
  const accesVideos = videosData.filter(
    (v) => v.theme?.trim() === "Accessibilité",
  );
  return (
    <div>
      <section className="max-w-7xl  py-16 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          {/* Badge animé */}
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#ff7f11]/10 text-[#ff7f11] rounded-lg">
              <Cpu size={20} strokeWidth={2.5} />
            </span>
            <p className="text-[#ff7f11] font-bold uppercase tracking-widest text-sm transition-all duration-500">
              {phrases[index]}
            </p>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-[#1e40af] leading-tight">
            Le Handibox au service de votre{" "}
            <span className="text-[#ff7f11] italic">mobilité</span> sans faille
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Découvrez la révolution urbaine de Saint-Denis. Un dispositif
            intelligent qui transforme chaque obstacle en opportunité pour les
            citoyens en situation de handicap.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="p-3 bg-[#1e40af] text-white rounded-xl">
                <Smartphone size={24} />
              </span>
              <div>
                <h2 className="font-black text-[#1e40af] text-lg">Mobile</h2>
                <p className="text-sm text-slate-500">
                  La solution connectée pour votre mobilité.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="p-3 bg-[#ff7f11] text-white rounded-xl">
                <Accessibility size={24} />
              </span>
              <div>
                <h2 className="font-black text-[#ff7f11] text-lg">
                  Accessible
                </h2>
                <p className="text-sm text-slate-500">
                  Pensé pour tous les usagers .
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="btn bg-[#ff7f11] hover:bg-[#e66e00] text-white border-none btn-lg rounded-full px-10 shadow-xl group">
              Commander
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-6 gap-4 h-150">
          <figure className="row-span-4 col-span-1 overflow-hidden rounded-3xl shadow-lg group">
            <img
              src="/phandibox-qui.jpg"
              alt="Handibox Close up"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </figure>

          <figure className="row-span-2 col-span-1 overflow-hidden rounded-3xl shadow-lg group">
            <img
              src="/download.jpg"
              alt="Handibox Usage"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </figure>

          <figure className="row-span-2 col-span-1 overflow-hidden rounded-3xl shadow-lg group border-4 border-secondary/20">
            <img
              src="/Handibox-2-708x1024-1.jpg"
              alt="Handibox Street View"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </figure>

          <figure className="row-span-2 col-span-2 overflow-hidden rounded-3xl shadow-lg group">
            <img
              src="/presentatiohandibox-qui.jpg"
              alt="Handibox Detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </figure>
        </div>
      </section>

      <section className="flex flex-row gap-8 m-10 lg:m-20 items-start">
        {/* ASIDE - Ressources */}
        <aside className="basis-1/4 flex flex-col gap-6">
          {[1, 2].map((_, i) => (
            <article
              key={i}
              className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">
                Ressource
              </div>

              <h3 className="text-slate-900 font-semibold text-base mb-2 leading-tight">
                Guide RGAA 4.1 — Concevoir des services accessibles
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Le Référentiel Général d'Amélioration de l'Accessibilité
                s'applique à tous les services numériques publics.
              </p>

              <a
                href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#ff7f11] text-xs font-bold hover:translate-x-1 transition-transform focus-visible:ring-2 focus-visible:ring-[#ff7f11] focus-visible:ring-offset-2 rounded-md py-1"
                aria-label="Consulter le guide RGAA 4.1 (nouvel onglet)"
              >
                Consulter le guide
                <ArrowRight size={14} className="ml-1" aria-hidden="true" />
              </a>
            </article>
          ))}
        </aside>

        {/* VIDEO PRINCIPALE */}
        {/* COLONNE DU MILIEU - LECTEUR */}
        <div className="basis-1/2 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7f11] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff7f11]"></span>
            </span>
            Propulsé par l'innovation inclusive
          </h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Infos de la vidéo active sous le lecteur */}
          <div className="px-2">
            <h2 className="text-xl font-bold text-[#1e40af]">
              {activeVideo.title}
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Diffusé par {activeVideo.author} • {activeVideo.date}
            </p>
          </div>
        </div>

        {/* PLAYLIST */}
        <div className="basis-1/4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          <div
            className="flex flex-col gap-3"
            role="list"
            aria-label="Playlist de vidéos"
          >
            {videosData.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`group w-full text-left p-2 rounded-lg transition-all border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm ${
                  activeVideo?.id === video.id
                    ? "bg-white border-slate-200 shadow-sm ring-1 ring-[#ff7f11]/20"
                    : ""
                }`}
              >
                <div className="flex flex-row gap-3">
                  <figure className="shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                      alt=""
                      className="w-24 h-14 object-cover rounded-md transition-transform group-hover:scale-105"
                    />
                  </figure>
                  <div className="flex flex-col justify-between py-0.5">
                    <h5 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-[#ff7f11] transition-colors">
                      {video.title}
                    </h5>
                    <div className="flex flex-row items-center gap-3 text-[10px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <User size={10} /> {video.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> {video.date}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* section presentation par catégories*/}

      <section className="px-10 lg:px-20 py-10 bg-white">
        {/* TITRE AVEC DESIGN HR */}
        <div className="flex items-center gap-6 mb-12">
          <hr className="flex-grow border-t-2 border-[#ff7f11]" />
          <h2 className="text-2xl lg:text-4xl font-black text-[#1e40af] leading-tight">
            Technologies d'Assistance
          </h2>
          <hr className="flex-grow border-t-2 border-[#ff7f11]" />
        </div>

        {/* GRILLE DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {assistanceVideos.map((video) => (
            <article key={video.id} className="flex flex-col group">
              {/* IMAGE / MINIATURE */}
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-sm ring-1 ring-slate-200">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* TITRE CLIQUABLE */}
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-slate-900 leading-tight mb-3 hover:text-[#ff7f11] transition-colors line-clamp-2"
              >
                {video.title}
              </a>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-500 mb-4 line-clamp-3 leading-relaxed">
                {video.description}
              </p>

              {/* AUTEUR */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#1e40af]/10 flex items-center justify-center">
                  <User size={12} className="text-[#1e40af]" />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {video.author}
                </span>
              </div>

              {/* DIV DEUX COLONNES : DATE ET CATÉGORIE */}
              <div className="mt-auto pt-4  flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[11px] font-medium">{video.date}</span>
                </div>

                {/* CATÉGORIE DESIGNÉE AVEC BG */}
                <span className="px-3 py-1 bg-[#ff7f11] text-white text-[15px] font-bold tracking-wider  ring-1 ring-[#ff7f11]/20">
                  {video.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-10 lg:px-20 py-10 bg-white">
        {/* TITRE AVEC DESIGN HR */}
        <div className="flex items-center gap-6 mb-12">
          <hr className="flex-grow border-t-2 border-[#ff7f11]" />
          <h2 className="text-2xl lg:text-4xl font-black text-[#1e40af] leading-tight">
            Accessibilité Numérique
          </h2>
          <hr className="flex-grow border-t-2 border-[#ff7f11]" />
        </div>

        {/* GRILLE DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {accesVideos.map((video) => (
            <article key={video.id} className="flex flex-col group">
              {/* IMAGE / MINIATURE */}
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-sm ring-1 ring-slate-200">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* TITRE CLIQUABLE */}
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-slate-900 leading-tight mb-3 hover:text-[#ff7f11] transition-colors line-clamp-2"
              >
                {video.title}
              </a>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-500 mb-4 line-clamp-3 leading-relaxed">
                {video.description}
              </p>

              {/* AUTEUR */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#1e40af]/10 flex items-center justify-center">
                  <User size={12} className="text-[#1e40af]" />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {video.author}
                </span>
              </div>

              {/* DIV DEUX COLONNES : DATE ET CATÉGORIE */}
              <div className="mt-auto pt-4  flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[11px] font-medium">{video.date}</span>
                </div>

                {/* CATÉGORIE DESIGNÉE AVEC BG */}
                <span className="px-3 py-1 bg-[#ff7f11] text-white text-[15px] font-bold tracking-wider  ring-1 ring-[#ff7f11]/20">
                  {video.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Section call to action */}
      <section className="m-10 lg:m-20 p-12 bg-[#1e40af]/10 rounded-[0.2rem] text-white relative overflow-hidden shadow-2xl">
        {/* Élément décoratif orange en arrière-plan */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff7f11] rounded-full blur-[80px] opacity-20"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#ff7f11] font-black uppercase tracking-[0.3em] text-sm mb-4">
            Horizon 2026
          </span>

          <h2 className="text-3xl md:text-5xl text-black font-bold not-last:mb-6 leading-tight">
            L'innovation n'a de sens que si elle est{" "}
            <span className="underline decoration-[#ff7f11] decoration-4 underline-offset-8">
              partagée
            </span>
            .
          </h2>

          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Le futur de la Handitech se construit aujourd'hui. Que vous soyez
            développeur, utilisateur ou curieux, contribuez à un web sans
            barrières.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#ff7f11] hover:bg-[#e66e00] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-[#ff7f11]/40 flex items-center gap-2">
              Rejoindre
              <ArrowRight size={20} />
            </button>

            <button className="btn-outline px-8 py-4 bg-white/10 hover:bg-white hover:text-[#e66e00] backdrop-blur-md border border-black text-black font-bold rounded-full transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
