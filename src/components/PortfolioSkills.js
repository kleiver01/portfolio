import React from 'react';
 
const PortfolioSkills = () => {
  const skills = [
    { name: 'HTML', level: 'Avanzado', color: 'orange' }, // Cambiado a Avanzado
    { name: 'CSS', level: 'Intermedio', color: 'blue' }, // Cambiado a Intermedio
    { name: 'CSS4', level: 'Bajo', color: 'indigo' }, // Cambiado a Intermedio
    { name: 'JavaScript', level: 'Intermedio', color: 'yellow' }, // Cambiado a Intermedio
    { name: 'React', level: 'Bajo', color: 'cyan' }, // Cambiado a Intermedio
  ];
 
  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-600';
      case 'yellow': return 'bg-yellow-500';
      case 'orange': return 'bg-orange-500';
      case 'cyan': return 'bg-cyan-500';
      case 'indigo': return 'bg-indigo-600';
      default: return 'bg-gray-600';
    }
  };
 
  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-text-glow">
        &lt;Habilidades /&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative p-4 md:p-6 rounded-xl shadow-lg border border-gray-700 overflow-hidden
                       transform hover:scale-105 transition-all duration-300 group
                       ${getColorClass(skill.color)}`}
          >
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h3 className="relative text-2xl md:text-3xl font-bold mb-2 text-white z-10">{skill.name}</h3>
            <p className="relative text-lg text-gray-200 z-10">{skill.level}</p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700">
              <div
                className={`h-full ${getColorClass(skill.color)}`}
                style={{ width: skill.level === 'Bajo' ? '25%' : skill.level === 'Avanzado' ? '75%' : '50%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default PortfolioSkills;