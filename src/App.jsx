import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import PortfolioMenu from './components/PortfolioMenu';
import MobileMenu from './components/MobileMenu';
import PortfolioAbout from './components/PortfolioAbout';
import PortfolioSkills from './components/PortfolioSkills';
import PortfolioProjects from './components/PortfolioProjects';
import PortfolioContact from './components/PortfolioContact';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);
  const currentLanguage = currentParams.get("language") || "en";

  const switchLanguage = (lang) => {
    currentParams.set("language", lang);
    navigate({ pathname: "/", search: currentParams.toString() });
  };

  return (
    <div className="absolute top-4 right-4 z-50 flex space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded ${currentLanguage === "en" ? "bg-blue-600" : "bg-gray-800"} hover:bg-blue-500`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("es")}
        className={`px-3 py-1 rounded ${currentLanguage === "es" ? "bg-green-600" : "bg-gray-800"} hover:bg-green-500`}
      >
        ES
      </button>
    </div>
  );
};

const AppWrapper = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const languageParam = queryParams.get("language");
  const [currentPage, setCurrentPage] = useState("about");

  useEffect(() => {
    if (languageParam) {
      localStorage.setItem("preferredLanguage", languageParam);
    }
  }, [languageParam]);

  const savedLanguage = localStorage.getItem("preferredLanguage");
  const language = languageParam || savedLanguage || "en";

  const renderPage = (language) => {
    switch (currentPage) {
      case "about":
        return <PortfolioAbout language={language} />;
      case "skills":
        return <PortfolioSkills language={language} />;
      case "projects":
        return <PortfolioProjects language={language} />;
      case "contact":
        return <PortfolioContact language={language} />;
      default:
        return <PortfolioAbout language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Fondo con partículas */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes pulse-border { 0%,100%{border-color:#8B5CF6;} 50%{border-color:#EC4899;} }
        @keyframes bounce-once { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }
        @keyframes ping-slow { 0%{transform:scale(0.8);opacity:0.5;} 50%{transform:scale(1.2);opacity:1;} 100%{transform:scale(0.8);opacity:0.5;} }
        @keyframes text-glow { 0%,100%{text-shadow:0 0 5px rgba(255,255,255,0.5),0 0 10px rgba(255,255,255,0.3);} 50%{text-shadow:0 0 10px rgba(255,255,255,0.8),0 0 20px rgba(255,255,255,0.6);} }
        @keyframes fade-in-up { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        @keyframes tilt { 0%,100%{transform:rotate(0deg);} 25%{transform:rotate(0.5deg);} 75%{transform:rotate(-0.5deg);} }
        @keyframes pulse-button { 0%,100%{transform:scale(1);} 50%{transform:scale(1.02);} }
        @keyframes blob { 0%{transform:translate(0,0) scale(1);} 33%{transform:translate(30px,-50px) scale(1.1);} 66%{transform:translate(-20px,20px) scale(0.9);} 100%{transform:translate(0,0) scale(1);} }
        .animate-pulse-border{animation:pulse-border 4s infinite ease-in-out;}
        .animate-bounce-once{animation:bounce-once 0.6s ease-out;}
        .animate-ping-slow{animation:ping-slow 2s infinite ease-in-out;}
        .animate-text-glow{animation:text-glow 3s infinite alternate;}
        .animate-fade-in-up{animation:fade-in-up 0.8s ease-out forwards;}
        .animate-tilt{animation:tilt 3s infinite ease-in-out;}
        .animate-pulse-button{animation:pulse-button 2s infinite ease-in-out;}
        .animate-blob{animation:blob 7s infinite cubic-bezier(0.6,-0.28,0.735,0.045);}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}
        .group:hover > div { transform: scale(1.01) rotateZ(0.5deg); transition: transform 0.3s ease-out; }
      `}</style>

      {/* Selector de idioma */}
      <LanguageSwitcher />

      {/* Menú hamburguesa primero (solo móvil) */}
      <div className="block md:hidden w-full z-50">
        <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage} language={language} />
      </div>

      {/* Menú lateral solo en desktop */}
      <div className="hidden md:block relative z-10 md:mr-16 mb-12 md:mb-0">
        <PortfolioMenu currentPage={currentPage} setCurrentPage={setCurrentPage} language={language} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 w-full max-w-4xl group">
        {renderPage(language)}
      </div>
    </div>
  );
};

const App = () => (
  <Router basename="/portfolio">
    <Routes>
      <Route path="/" element={<AppWrapper />} />
      <Route path="/es" element={<Navigate to="/?language=es" />} />
      <Route path="/en" element={<Navigate to="/?language=en" />} />
    </Routes>
  </Router>
);

export default App;
