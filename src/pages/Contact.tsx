import { Mail, Phone, MapPin, Send, ChevronRight, Home } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Fonction pour mettre à jour les données quand on tape au clavier
  const handleChange = (e) => {
    // On utilise l'id de l'input pour savoir quel champ modifier
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour envoyer les données au serveur
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Projet Innovation",
          message: "",
        }); // Vide le formulaire
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full flex flex-col items-center justify-center text-white overflow-hidden">
        {/* BACKGROUND IMAGE AVEC OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Innovation Lab"
            className="w-full h-full object-cover"
          />
          {/* Overlay pour assurer la lisibilité du texte (mélange de votre bleu) */}
          <div className="absolute inset-0 bg-[#1e40af]/80 mix-blend-multiply"></div>
        </div>

        {/* CONTENU TEXTE */}
        <div className="relative z-10 flex flex-col items-center">
          {/* FIL D'ARIANE (Breadcrumb) */}
          <nav className="mb-6" aria-label="Fil d'ariane">
            <ul className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm font-medium hover:text-[#ff7f11] transition-colors"
                >
                  <Home size={16} />
                  Accueil
                </Link>
              </li>
              <ChevronRight size={14} className="text-white/50" />
              <Link
                to="/contact"
                className="text-[#ff7f11] hover:text-white transition-colors duration-300 ease-in-out"
              >
                Contactez-nous
              </Link>
            </ul>
          </nav>

          {/* TITRE H2 */}
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
            Contactez-<span className="text-[#ff7f11]">nous</span>
          </h2>
        </div>

        {/* LE DESIGN DE FORME (SVG Shape Divider) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[80px] fill-slate-50"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/*INFOS DE CONTACT  */}
      <section className="py-20 px-6 lg:px-20 bg-slate-50">
        <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Localisation",
                info: "12 Rue de l'Innovation, 75013 Paris",
                color: "hover:border-[#1e40af]",
              },
              {
                icon: <Mail size={24} />,
                title: "Mail Officiel",
                info: "contact@handitech-innov.fr",
                color: "hover:border-[#ff7f11]",
              },
              {
                icon: <Phone size={24} />,
                title: "Appel Direct",
                info: "+33 1 23 45 67 89",
                color: "hover:border-[#1e40af]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 w-xs px-6 py-13 bg-white border-2 border-transparent rounded-sm shadow-sm transition-all duration-300 group ${item.color} hover:shadow-md hover:-translate-y-1 cursor-default`}
              >
                <div className="p-3 bg-slate-50 text-[#1e40af] rounded-sm group-hover:bg-[#1e40af] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-widest text-slate-400 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-slate-800">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DIV DE DROITE : FORMULAIRE (7 colonnes sur 12 + 1 gap) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-8 rounded-[0.5rem] shadow-xl border border-slate-100">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-[#1e40af] mb-4">
                Propulsez votre <span className="text-[#ff7f11]">projet</span>
              </h2>
              <p className="text-slate-500 leading-relaxed italic">
                " Écrivons ensemble le prochain chapitre de votre innovation."
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name" // Identique à formData.name
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-xl outline-none transition-all"
                />
                <input
                  type="email"
                  name="email" // Identique à formData.email
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-xl outline-none transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet"
                required
                className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-xl outline-none transition-all"
              />

              <textarea
                name="message" // Identique à formData.message
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="message..."
                required
                className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-xl outline-none transition-all resize-none"
              ></textarea>

              {/* LE BOUTON AVEC BORDURE NOIRE (comme demandé précédemment) */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-transparent border-2 border-black text-black font-black uppercase rounded-full hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
              {status === "success" && (
                <p className="text-green-600 font-bold text-center mt-2">
                  Message envoyé !
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-bold text-center mt-2">
                  Erreur lors de l'envoi. Réessayez.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
