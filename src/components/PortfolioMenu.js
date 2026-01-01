import React, { useEffect, useRef } from 'react';
 
const PortfolioMenu = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'about', name: 'Sobre Mí' },
    { id: 'skills', name: 'Habilidades' },
    { id: 'projects', name: 'Proyectos' },
    { id: 'contact', name: 'Contacto' },
  ];
 
  const selectSound = useRef(null);
  const navigateSound = useRef(null);
 
  useEffect(() => {
   
    selectSound.current = new Audio('https://www.soundjay.com/buttons/button-3.mp3'); // Sonido mause
    navigateSound.current = new Audio('https://www.soundjay.com/buttons/button-3.mp3'); // Sonido flechas del teclado
 
    
    if (selectSound.current) selectSound.current.volume = 0.3;
    if (navigateSound.current) navigateSound.current.volume = 0.3;
  }, []);
 
  const playSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reiniciar sonido
      audioRef.current.play();
    }
  };
 
  const handleKeyDown = (event) => {
    const currentIndex = menuItems.findIndex(item => item.id === currentPage);
    let newIndex = currentIndex;
 
    if (event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % menuItems.length;
      playSound(navigateSound);
    } else if (event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      playSound(navigateSound);
    } else if (event.key === 'Enter') {
      playSound(selectSound);
    }
    setCurrentPage(menuItems[newIndex].id);
  };
 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);
 
  return (
    <nav className="flex flex-col p-4 space-y-3 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-2xl border border-purple-700 transform perspective-1000 rotate-x-6 animate-pulse-border">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setCurrentPage(item.id);
            playSound(selectSound);
          }}
          className={`
            relative px-8 py-4 text-xl font-extrabold rounded-full transition-all duration-500 ease-in-out
            transform hover:scale-110 hover:rotate-1 hover:shadow-purple-glow
            ${currentPage === item.id
              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg animate-bounce-once'
              : 'bg-gray-800 text-gray-300 hover:text-white border border-gray-700'
            }
            focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-75
            w-full text-center uppercase tracking-wider
          `}
        >
          {item.name}
          {currentPage === item.id && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-ping-slow">
              ACTIVO
            </span>
          )}
        </button>
      ))}
    </nav>
  );
};
 
export default PortfolioMenu;