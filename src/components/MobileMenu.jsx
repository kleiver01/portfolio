import React, { useState } from 'react';

const MobileMenu = ({ currentPage, setCurrentPage, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    en: {
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    es: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
  };

  const t = translations[language] || translations.en;

  const menuItems = [
    { id: 'about', name: t.about },
    { id: 'skills', name: t.skills },
    { id: 'projects', name: t.projects },
    { id: 'contact', name: t.contact },
  ];

  const handleSelect = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
  };

  return (
    <div className="menu-mobile fixed top-4 left-4 z-50">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-purple-700 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="mt-2 bg-gray-900 border border-purple-600 rounded-xl shadow-xl p-4 space-y-3 animate-fade-in-up">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg font-bold uppercase tracking-wide
                ${currentPage === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
