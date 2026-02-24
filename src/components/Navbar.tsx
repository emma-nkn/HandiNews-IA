import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

// 1. On sort SocialBar pour que le code soit plus lisible
const SocialBar = () => {
  return (
    <div className="flex gap-2">
      <a
        href="#"
        className="btn btn-circle btn-xs border-bg-[#ff7f11] text-white bg-[#ff7f11] hover:bg-[#e66e00] "
      >
        <Instagram size={14} />
      </a>
      <a
        href="#"
        className="btn btn-circle btn-xs border-bg-[#ff7f11] text-white bg-[#ff7f11] hover:bg-[#e66e00]"
      >
        <Facebook size={14} />
      </a>
      <a
        href="#"
        className="btn btn-circle btn-xs border-bg-[#ff7f11] text-white bg-[#ff7f11] hover:bg-[#e66e00]"
      >
        <Linkedin size={14} />
      </a>
      <a
        href="#"
        className="btn btn-circle btn-xs border-bg-[#ff7f11] text-white bg-[#ff7f11] hover:bg-[#e66e00]"
      >
        <Twitter size={14} />
      </a>
    </div>
  );
};

const Navbar = () => {
  const inscription = () => {
    alert("Inscription Newsletter !");
  };

  return (
    <nav className=" top-0 z-50 shadow-md">
      {/* --- PREMIER ÉTAGE : INFOS VILLE --- */}
      <div className="bg-with-50 py-2 px-4 lg:px-20 flex justify-between items-center border-b border-base-200">
        <div className="flex items-center gap-4">
          <img
            src="/logopview.png"
            alt="Logo Saint-Denis"
            className="h-8 w-auto"
          />
          <p className="text-xs text-black-500 font-medium hidden sm:block">
            La commune nouvelle vous informe
          </p>
        </div>
        <SocialBar />
      </div>

      {/* --- DEUXIÈME ÉTAGE : NAVIGATION --- */}
      <div className="sticky navbar bg-[#1e40af] text-primary-content px-4 lg:px-20">
        <div className="navbar-start">
          <Link to="/" className="text-4xl font-light tracking-tight italic">
            Handi<strong className="font-black text-[#ff7f11]">News</strong>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-white">
            <li>
              <Link to="/" className="hover:bg-white/10 active:bg-[#e66e00]">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/actualites"
                className="hover:bg-white/10 active:bg-[#e66e00]"
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                to="/innovation"
                className="hover:bg-white/10 active:bg-[#e66e00]"
              >
                Innovation
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:bg-white/10 active:bg-[#e66e00]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={inscription}
            className="btn bg-[#ff7f11] hover:bg-[#e66e00] border-transparent btn-sm rounded-full font-bold text-white shadow-lg"
          >
            NEWSLETTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
