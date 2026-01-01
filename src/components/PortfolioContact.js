import React from 'react';
 
const PortfolioContact = () => {
  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: (
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.584 27.168 15.783 28 18.168 28 24.627 28 30 22.627 30 16S24.627 3 18.168 3zm0 22c-2.09 0-4.07-.646-5.72-1.75l-.41-.26-4.13 1.08 1.1-4.02-.27-.42C6.65 19.07 6 17.09 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.77.36-.27.29-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.18 2.99.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
        </svg>
      ), 
      url: 'https://api.whatsapp.com/send?phone=584269388720&text=%C2%A1Hola!%20tengo%20inter%C3%A9s%20en%20tu%20trabajo.',
      color: 'hover:bg-green-500 focus:ring-green-500'
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2.2C4.6 4.2 4.2 4.6 4.2 7.8v8.4c0 3.2.4 3.6 3.6 3.6h8.4c3.2 0 3.6-.4 3.6-3.6V7.8c0-3.2-.4-3.6-3.6-3.6H7.6zM12 6.8c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2zm0 8.4c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm5.2-8.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"/>
        </svg>
      ), 
      url: 'https://www.instagram.com/kleiveruz01/',
      color: 'hover:bg-pink-500 focus:ring-pink-500'
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2.04C6.477 2.04 2 6.517 2 12.04c0 5.084 3.708 9.287 8.56 9.95V14.73H8.08v-2.69h2.48V9.62c0-2.45 1.46-3.8 3.71-3.8 1.06 0 2.16.19 2.16.19v2.37h-1.21c-1.2 0-1.58.74-1.58 1.51v1.81h2.64l-.42 2.69h-2.22v7.26c4.85-0.663 8.56-4.866 8.56-9.95 0-5.523-4.477-10-10-10z"/>
        </svg>
      ), 
      url: 'https://www.facebook.com/kleiveralejandro.uzcateguisanchez/',
      color: 'hover:bg-blue-600 focus:ring-blue-600'
    },
    { 
      name: 'GitHub', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 0.599 0.111 0.793-0.261 0.793-0.577 0-0.285-0.01-1.040-0.017-2.040-3.237 0.703-3.956-1.566-3.956-1.566-0.523-1.328-1.278-1.688-1.278-1.688-1.045-0.719 0.086-0.704 0.086-0.704 1.158 0.081 1.769 1.125 1.769 1.125 1.030 1.765 2.709 1.259 3.369 0.964 0.100-0.752 0.405-1.259 0.739-1.548-2.585-0.295-5.293-1.292-5.293-5.774 0-1.278 0.459-2.339 1.205-3.164-0.121-0.295-0.521-1.494 0.114-3.124 0 0 0.983-0.316 3.223 1.204 0.936-0.259 1.942-0.389 2.949-0.389 1.007 0 2.013 0.130 2.949 0.389 2.240-1.520 3.223-1.204 3.223-1.204 0.636 1.630 0.236 2.829 0.114 3.124 0.747 0.825 1.205 1.886 1.205 3.164 0 4.492-2.714 5.475-5.300 5.770 0.410 0.354 0.790 1.170 0.790 2.362 0 1.721-0.015 3.104-0.015 3.530 0 0.309 0.190 0.694 0.801 0.576 4.765-1.589 8.203-6.086 8.203-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      url: 'https://github.com/kleiver01',
      color: 'hover:bg-gray-900 focus:ring-gray-900'
    },
  ];
 
  return (
    <div className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 animate-text-glow">
        &lt;Contacto /&gt;
      </h2>
      <p className="text-xl leading-relaxed mb-8 text-gray-200">
        ¡Encuéntrame en mis redes sociales y conectemos!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-4 bg-gray-700 rounded-xl shadow-lg
                       transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-opacity-75 ${link.color}`}
          >
            {link.icon}
            <span className="ml-4 text-xl font-semibold text-white">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
 
export default PortfolioContact;