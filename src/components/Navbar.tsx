import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";

const SocialBar = () => {
  return (
    <div className="flex gap-2">
      {[
        { Icon: Instagram, label: "Instagram" },
        { Icon: Facebook, label: "Facebook" },
        { Icon: Linkedin, label: "LinkedIn" },
        { Icon: Twitter, label: "Twitter" },
      ].map(({ Icon, label }) => (
        <a
          key={label}
          href="#"
          aria-label={`Suivez-nous sur ${label}`}
          className="btn btn-circle btn-xs border-none text-white bg-[#ff7f11] hover:bg-[#e66e00] transition-colors"
        >
          <Icon size={14} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Actualités", path: "/actualites" },
    { name: "Innovation", path: "/innovation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md">
      <div className="bg-white py-2 px-4 lg:px-20 flex justify-between items-center border-b border-base-200">
        <div className="flex items-center gap-4">
          <img
            src="/logopview.png"
            alt="Logo Saint-Denis"
            className="h-6 sm:h-8 w-auto"
          />
          <p className="text-[10px] sm:text-xs text-slate-500 font-medium hidden xs:block">
            La commune nouvelle vous informe
          </p>
        </div>
        <SocialBar />
      </div>

      {/* --- NAVIGATION --- */}
      <div className="navbar bg-[#1e40af] text-white px-4 lg:px-20 relative">
        <div className="navbar-start">
          {/* MENU BURGER  */}
          <div className="dropdown lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-circle"
              aria-label="Ouvrir le menu de navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <Link
            to="/"
            className="text-2xl sm:text-4xl font-light tracking-tight italic"
            aria-label="HandiNews - Accueil"
          >
            Handi<strong className="font-black text-[#f57c00]">News</strong>
          </Link>
        </div>

        {/* LIENS DESKTOP */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:bg-white/10 active:bg-[#e66e00]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-[#ff7f11] hover:bg-[#e66e00] border-none btn-xs sm:btn-sm rounded-full font-bold text-[#1e40af] shadow-lg"
          >
            NEWSLETTER
          </button>
        </div>

        {/* MENU MOBILE (DROPDOWN) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1e40af] border-t border-white/10 lg:hidden animate-in slide-in-from-top duration-300">
            <ul className="menu p-4 font-bold">
              {navLinks.map((link) => (
                <li key={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to={link.path} className="py-4 border-b border-white/5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* --- MODALE NEWSLETTER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e40af]/40 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white w-full max-w-md rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative animate-in zoom-in duration-300"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-[#ff7f11]"
              aria-label="Fermer la fenêtre"
            >
              <X size={24} />
            </button>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#ff7f11]/10 rounded-full flex items-center justify-center mx-auto text-[#ff7f11]">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-black text-[#1e40af] uppercase">
                Restez connecté
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Recevez une fois par mois l'actualité de la commune sur le
                handicap.
              </p>
              <form
                className="space-y-3 pt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#ff7f11] outline-none text-[#1e40af]"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#ff7f11] text-[#1e40af] font-black rounded-2xl shadow-lg uppercase tracking-widest hover:scale-[1.02] transition-transform"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
