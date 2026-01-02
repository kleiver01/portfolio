import React from 'react';

import NerdMartImg from '../image/NerdMart.png';
import TierMakerImg from '../image/Tier-maker.png';
import SnakeGameImg from '../image/Snake-game.png';
import ArkanoidImg from '../image/Arkanoid-game.png';
import TicTacToeImg from '../image/Tic-tac-toe.png';
import AhorcadoImg from '../image/Ahorcado.png';
import IpImg from '../image/ip.png';
import TranslatorImg from '../image/Translator.png';
import ConversorImg from '../image/Conversor.png';
import CalculadoraImg from '../image/Calculadora.png';
import SynonymImg from '../image/Synonym-finder.png';
import PaletaImg from '../image/paleta.png';
import CronometroImg from '../image/Cronometro.png';
import ResturanteImg from '../image/Restaurante.png';

const PortfolioProjects = () => {
  const projects = [
    {
      name: 'Nerdmart',
      description: '🎮 A gamers online store is a digital space specialized in offering everything a player needs.',
      link: 'https://kleiver01.github.io/Nerdmart/',
      device: 'PC',
      image: NerdMartImg
    },
    {
      name: 'Asados-ahumados',
      description: '🔥 Website of a Colombian restaurant specializing in smoked meats. Modern design, featured menu, easy reservations, and a location in Pereira.',
      link: 'https://kleiver01.github.io/Restaurante/',
      device: 'PC/Mobile',
      image: ResturanteImg
    },
      {
      name: 'Calculator',
      description: '🧮 A simple and functional web-based calculator for basic arithmetic operations.',
      link: 'https://kleiver01.github.io/calculadora/',
      device: 'PC/Mobile',
      image: CalculadoraImg
    },
    {
      name: 'Tier Maker',
      description: '📊 Tier Maker helps you create and share visual rankings of type tier-maker.',
      link: 'https://kleiver01.github.io/10-tier-maker/',
      device: 'PC/Mobile',
      image: TierMakerImg
    },
    {
      name: 'Snake game',
      description: '🐍 Snake Game is a classic game where you control a snake that grows when it eats food.',
      link: 'https://kleiver01.github.io/snake-game/',
      device: 'PC/Mobile',
      image: SnakeGameImg
    },
    {
      name: 'IP Locator',
      description: 'A simple and fast web application that allows you to look up information for any IP address.',
      link: 'https://kleiver01.github.io/IP-Locator/',
      device: 'PC/Mobile',
      image: IpImg
    },
    {
      name: 'Tic tac toe',
      description: '❌⭕ Classic three in a row game adapted for PC and mobile.',
      link: 'https://kleiver01.github.io/01-tic-tac-toe/',
      device: 'PC/Mobile',
      image: TicTacToeImg
    },
    {
      name: 'Unit converter',
      description: '📏 Web tool to quickly and easily convert units of measurement.',
      link: 'https://kleiver01.github.io/Conversor/',
      device: 'PC/Mobile',
      image: ConversorImg
    },
    {
      name: 'Ahorcado Pixel',
      description: '✏️ Hangman website: A classic online game, simple and responsive, where the user guesses words letter by letter.',
      link: 'https://kleiver01.github.io/ahorcado/',
      device: 'PC',
      image: AhorcadoImg
    },
    {
      name: 'Translator',
      description: '🌐 Real-time text translator: a web tool that allows you to translate text from Spanish to English.',
      link: 'https://kleiver01.github.io/translator/',
      device: 'PC/Mobile',
      image: TranslatorImg
    },
    {
     name: 'Arkanoid game',
      description: '🕹️ Retro web game inspired by the classic Arkanoid.',
      link: 'https://kleiver01.github.io/08-arkanoid-game/',
      device: 'PC',
      image: ArkanoidImg
    },
    {
     name: 'Synonym-finder',
      description: '📝 Synonym Finder: A web tool that helps you find synonyms for words quickly and easily.',
      link: 'https://kleiver01.github.io/Synonym-finder/',
      device: 'PC/Mobile',
      image: SynonymImg
    },
    {
     name: 'Palette generator',
      description: '🎨 Palette Generator: A web tool that helps you create and share color palettes.',
      link: 'https://kleiver01.github.io/paleta/',
      device: 'PC/Mobile',
      image: PaletaImg
    },
     {
     name: 'Chronometer',
      description: '⏰ Chronometer: A web tool that helps you create and share color palettes.',
      link: 'https://kleiver01.github.io/Chronometer/',
      device: 'PC/Mobile',
      image: CronometroImg
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-10 max-w-screen-xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 animate-fade-in-up overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-text-glow text-center">
        &lt;Projects /&gt;
      </h2>

      {/* Scroll vertical decorado sin scroll horizontal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-h-[70vh] overflow-y-scroll overflow-x-hidden pr-2 custom-scrollbar">
        {projects.map((project, index) => (
          <article
            key={index}
            className="relative bg-gray-700 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-600 overflow-hidden
                       transform hover:scale-105 transition-all duration-500 group"
          >
            <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold shadow-md
              ${project.device === 'PC'
                ? 'bg-yellow-500 text-white'
                : 'bg-green-500 text-white'}`}>
              {project.device}
            </div>

            <div className="mb-4 w-full aspect-video bg-gray-600 rounded-lg flex items-center justify-center overflow-hidden">
              {project.image
                ? <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                : <span className="text-gray-300 text-sm">Imagen del proyecto</span>
              }
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{project.name}</h3>
            <p className="text-sm sm:text-base text-gray-300">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-full font-semibold text-sm sm:text-base
                         transition-all duration-500 relative z-10
                         hover:bg-purple-700 shadow-md inline-block text-center"
            >
              Ver Proyecto
            </a>

            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          </article>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #8B5CF6;
          border-radius: 9999px;
          border: 2px solid #1F2937;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #8B5CF6 transparent;
        }
      `}</style>
    </section>
  );
};

export default PortfolioProjects;
