import React from 'react';

const PortfolioAbout = ({ language }) => {
  const translations = {
    en: {
      title: "<About me />",
      greeting: "Greetings, friend! I'm a digital experience programmer, a code wizard.",
      intro: "My name is Kleiver Uzcategui, and I'm a web developer specializing in web technologies. I primarily work with HTML, CSS, JavaScript, TypeScript, Next.js, and React, creating modern, functional, and responsive interfaces. I'm passionate about transforming ideas into intuitive digital experiences, paying close attention to both aesthetics and performance. I'm always looking for new challenges that allow me to continue learning and contribute creative solutions.",
      githubLabel: "My Code",
      githubButton: "View on GitHub",
    },
    es: {
      title: "<Sobre mí />",
      greeting: "¡Saludos, amigo! Soy un programador de experiencias digitales, un mago del código.",
      intro: "Mi nombre es Kleiver Uzcategui y soy desarrollador web especializado en tecnologías modernas. Trabajo principalmente con HTML, CSS, JavaScript, TypeScript, Next.js y React, creando interfaces modernas, funcionales y responsivas. Me apasiona transformar ideas en experiencias digitales intuitivas, cuidando tanto la estética como el rendimiento. Siempre busco nuevos retos que me permitan seguir aprendiendo y aportar soluciones creativas.",
      githubLabel: "Mi Código",
      githubButton: "Ver en GitHub",
    },
  };

  const t = translations[language];

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text-glow">
        {t.title}
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200 group-hover:text-white transition-colors duration-300 typing-effect">
        {Array.from(t.greeting).map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
        ))}
      </p>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in delay-500 group-hover:text-white transition-colors duration-300">
        {t.intro}
      </p>

      <div className="mt-8 flex justify-center space-x-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://github.com/kleiver01"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
          >
            <span className="flex items-center space-x-5">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <span className="pr-6 text-gray-100 text-lg font-bold">{t.githubLabel}</span>
            </span>
            <span className="pl-6 text-purple-400 group-hover:text-gray-100 transition duration-200 text-lg font-bold">
              {t.githubButton}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;
