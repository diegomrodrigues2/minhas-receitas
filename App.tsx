
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IngredientDrawer from './components/IngredientDrawer';
import RecipeTimeline from './components/RecipeTimeline';
import IngredientInfoModal from './components/IngredientInfoModal';
import { RECIPES, RecipeKey } from './data/recipe';
import type { IngredientDetail } from './types';

const App: React.FC = () => {
  const [selectedRecipeKey, setSelectedRecipeKey] = useState<RecipeKey>('baiaoDeDois');
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientDetail | null>(null);
  
  const activeRecipe = RECIPES[selectedRecipeKey];

  // Reseta o passo atual quando a receita muda para evitar inconsistências.
  useEffect(() => {
    setCurrentStep(0);
    setSelectedIngredient(null);
  }, [selectedRecipeKey]);

  const handleRecipeChange = (recipeKey: RecipeKey) => {
    setSelectedRecipeKey(recipeKey);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, activeRecipe.steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const handleSelectStep = (index: number) => {
    setCurrentStep(index);
  }

  const handleIngredientClick = (ingredientName: string) => {
    const infoKey = Object.keys(activeRecipe.ingredientInfo).find(key => 
      ingredientName.toLowerCase().includes(key.toLowerCase())
    );
    if (infoKey && activeRecipe.ingredientInfo[infoKey]) {
      setSelectedIngredient(activeRecipe.ingredientInfo[infoKey]);
    }
  };

  const closeModal = () => {
    setSelectedIngredient(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header 
        title={activeRecipe.title}
        subtitle={activeRecipe.subtitle}
        selectedRecipe={selectedRecipeKey}
        onRecipeChange={handleRecipeChange}
      />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <p className="text-center text-stone-600 mb-8 font-serif">
          {activeRecipe.intro}
        </p>
        
        <IngredientDrawer ingredients={activeRecipe.ingredients} onIngredientClick={handleIngredientClick} />

        <RecipeTimeline 
          steps={activeRecipe.steps} 
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
            disabled={currentStep === activeRecipe.steps.length - 1}
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
