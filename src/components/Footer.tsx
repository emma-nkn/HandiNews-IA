import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Copyright,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  const inscription = () => alert("Redirection contact...");

  return (
    <footer className="w-full">
      {/* --- PREMIÈRE BANDE : BLEU INCLUSIF --- */}
      <div className="bg-[#1e40af] text-white pt-12 pb-8 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Haut du footer : Appel à l'action */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <p className="text-2xl font-bold italic">
              Restez connecté à HandiNews
            </p>
            <button
              onClick={inscription}
              className="btn bg-[#ff7f11] hover:bg-[#e66e00] border-none rounded-full font-bold text-white shadow-lg px-8"
            >
              Contactez-nous
            </button>
          </div>

          <hr className="border-white/20 mb-10" />

          {/* Grille principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Colonne 1 : Logo et Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/logopview.png"
                  alt="Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
                <Link to="/" className="text-3xl font-light italic">
                  Handi
                  <strong className="font-black text-[#ff7f11]">News</strong>
                </Link>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Le premier média local dédié à l'innovation inclusive et à
                l'accessibilité au cœur de Saint-Denis. Ensemble, bâtissons une
                ville pour tous.
              </p>
              {/* On réutilise ta SocialBar ici */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#ff7f11] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#ff7f11] transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#ff7f11] transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Navigation */}
            <div>
              <h2 className="text-[#ff7f11] font-bold uppercase tracking-widest mb-6">
                Navigation
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#ff7f11] transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/actualites"
                    className="hover:text-[#ff7f11] transition-colors"
                  >
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innovation"
                    className="hover:text-[#ff7f11] transition-colors"
                  >
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-[#ff7f11] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Contact Direct */}
            <div>
              <h2 className="text-[#ff7f11] font-bold uppercase tracking-widest mb-6">
                Contact
              </h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 opacity-80">
                  <Mail size={16} /> handinews@handi.fr
                </li>
                <li className="flex items-center gap-3 opacity-80">
                  <Phone size={16} /> +33 1 23 45 67 89
                </li>
                <li className="flex items-center gap-3 opacity-80">
                  <MapPin size={16} /> Saint-Denis, France
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Newsletter */}
            <div>
              <h2 className="text-[#ff7f11] font-bold uppercase tracking-widest mb-6">
                Newsletter
              </h2>
              <p className="text-xs mb-4 opacity-80">
                Recevez nos dernières enquêtes et innovations par mail.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="input input-bordered w-full rounded-full bg-white/5 border-white/20 focus:border-[#ff7f11] text-white"
                />
                <button className="absolute right-1 top-1 btn btn-circle btn-sm bg-[#ff7f11] border-none hover:bg-white hover:text-[#ff7f11]">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- DEUXIÈME BANDE : ORANGE --- */}
      <div className="bg-[#ff7f11] text-white py-4 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Copyright size={16} />
            <span>2026 HandiNews - Tous droits réservés</span>
          </div>
          <div className="flex gap-6 opacity-90">
            <a href="#" className="hover:underline">
              Mentions légales
            </a>
            <a href="#" className="hover:underline">
              CGU
            </a>
            <a href="#" className="hover:underline">
              Accessibilité : Totalement conforme
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
