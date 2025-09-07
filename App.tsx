
import React, { useState } from 'react';
import Header from './components/Header';
import IngredientDrawer from './components/IngredientDrawer';
import RecipeTimeline from './components/RecipeTimeline';
import IngredientInfoModal from './components/IngredientInfoModal';
import { RECIPE_STEPS, INGREDIENTS, INGREDIENT_INFO } from './data/recipe';
import type { IngredientDetail } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientDetail | null>(null);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, RECIPE_STEPS.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const handleSelectStep = (index: number) => {
    setCurrentStep(index);
  }

  const handleIngredientClick = (ingredientName: string) => {
    const infoKey = Object.keys(INGREDIENT_INFO).find(key => 
      ingredientName.toLowerCase().includes(key.toLowerCase())
    );
    if (infoKey && INGREDIENT_INFO[infoKey]) {
      setSelectedIngredient(INGREDIENT_INFO[infoKey]);
    }
  };

  const closeModal = () => {
    setSelectedIngredient(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <p className="text-center text-stone-600 mb-8 font-serif">
          Uma jornada culinária passo a passo para criar o autêntico e delicioso Baião de Dois, um tesouro do sertão brasileiro.
        </p>
        
        <IngredientDrawer ingredients={INGREDIENTS} onIngredientClick={handleIngredientClick} />

        <RecipeTimeline 
          steps={RECIPE_STEPS} 
          currentStep={currentStep}
          onSelectStep={handleSelectStep}
          onIngredientClick={handleIngredientClick}
        />

        <div className="flex justify-between mt-8">
          <button 
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-stone-300 text-stone-700 font-bold rounded-lg shadow hover:bg-stone-400 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>
          <button 
            onClick={handleNextStep}
            disabled={currentStep === RECIPE_STEPS.length - 1}
            className="px-6 py-2 bg-green-700 text-white font-bold rounded-lg shadow hover:bg-green-800 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors"
          >
            Próximo
          </button>
        </div>
      </main>

      {selectedIngredient && (
        <IngredientInfoModal 
          ingredient={selectedIngredient} 
          onClose={closeModal} 
        />
      )}

      <footer className="text-center p-6 text-stone-500 text-sm mt-8">
        <p>Criado com paixão pela culinária brasileira.</p>
      </footer>
    </div>
  );
};

export default App;
