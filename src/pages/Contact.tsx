import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section className="min-h-screen bg-slate-50 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* EN-TÊTE DESIGN */}
          <div className="text-center mb-16">
            <span className="text-[#ff7f11] font-black uppercase tracking-[0.3em] text-sm">
              Contact
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#1e40af] mt-4 mb-6">
              Parlons d'un futur <br />{" "}
              <span className="text-slate-900">sans barrières.</span>
            </h1>
            <div className="h-1.5 w-24 bg-[#ff7f11] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* COLONNE INFOS : L'aspect "Tech & Humain" */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Nos coordonnées
              </h2>

              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-3 bg-[#1e40af]/10 rounded-xl text-[#1e40af]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500">
                    contact@innovation-handitech.fr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-3 bg-[#ff7f11]/10 rounded-xl text-[#ff7f11]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Téléphone</h3>
                  <p className="text-slate-500">01 23 45 67 89</p>
                </div>
              </div>
            </div>

            {/* COLONNE FORMULAIRE : Le coeur de l'interaction */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-slate-700 ml-1"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-slate-700 ml-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none appearance-none"
                  >
                    <option>Partenariat Innovation</option>
                    <option>Question sur l'Accessibilité</option>
                    <option>Autre demande</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                {/* VOTRE BOUTON AVEC BORDURE NOIRE */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-transparent hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white border-2 border-black text-black font-extrabold rounded-full transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Envoyer le message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
