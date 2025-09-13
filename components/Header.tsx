
import React from 'react';
import type { RecipeKey } from '../data/recipe';

interface HeaderProps {
  title: string;
  subtitle: string;
  selectedRecipe: RecipeKey;
  onRecipeChange: (recipe: RecipeKey) => void;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, selectedRecipe, onRecipeChange }) => {
  const baseButtonClass = "px-4 py-2 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white";
  const activeButtonClass = "bg-white text-orange-800 shadow-md";
  const inactiveButtonClass = "bg-transparent text-white border border-white/50 hover:bg-white/20";
  
  return (
    <header className="bg-orange-800 text-white p-6 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-serif">{title}</h1>
        <h2 className="text-lg font-light opacity-90 mt-1">{subtitle}</h2>
        <nav className="mt-6 flex justify-center items-center space-x-4" aria-label="Seleção de Receitas">
          <button
            onClick={() => onRecipeChange('baiaoDeDois')}
            className={`${baseButtonClass} ${selectedRecipe === 'baiaoDeDois' ? activeButtonClass : inactiveButtonClass}`}
            aria-pressed={selectedRecipe === 'baiaoDeDois'}
          >
            Baião de Dois
          </button>
          <button
            onClick={() => onRecipeChange('vacaAtolada')}
            className={`${baseButtonClass} ${selectedRecipe === 'vacaAtolada' ? activeButtonClass : inactiveButtonClass}`}
            aria-pressed={selectedRecipe === 'vacaAtolada'}
          >
            Vaca Atolada
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
