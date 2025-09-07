
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-orange-800 text-white p-6 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-serif">Baião de Dois</h1>
        <h2 className="text-lg font-light opacity-90 mt-1">Um Retrato Culinário do Sertão</h2>
      </div>
    </header>
  );
};

export default Header;
