
import React from 'react';
import type { Step } from '../types';
import { InfoIcon } from './Icons';

interface StepCardProps {
  step: Step;
  isCurrent: boolean;
  isCompleted: boolean;
  onSelectStep: () => void;
  onIngredientClick: (ingredientName: string) => void;
}

const StepCard: React.FC<StepCardProps> = ({ step, isCurrent, isCompleted, onSelectStep, onIngredientClick }) => {
  const borderColor = isCurrent ? 'border-orange-500' : isCompleted ? 'border-green-500' : 'border-stone-200';

  return (
    <div 
        onClick={onSelectStep}
        className={`bg-white rounded-lg shadow-md border-l-4 p-5 cursor-pointer transition-all duration-300 ${borderColor} ${isCurrent ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
    >
      <span className="text-sm font-bold uppercase text-stone-500">{`Passo ${step.id} - ${step.phase}`}</span>
      <h3 className="text-2xl font-bold font-serif text-orange-900 mt-1 mb-3">{step.title}</h3>
      <p className="text-stone-600 mb-4">{step.description}</p>
      
      <div className="mb-4">
        <h4 className="font-bold text-stone-700 mb-2">Ingredientes neste passo:</h4>
        <div className="flex flex-wrap gap-2">
            {step.ingredients.map(ing => (
                <button 
                    key={ing}
                    onClick={(e) => { e.stopPropagation(); onIngredientClick(ing); }}
                    className="flex items-center bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm hover:bg-orange-100 hover:text-orange-800 transition-colors"
                >
                    {ing}
                    <InfoIcon className="w-4 h-4 ml-2" />
                </button>
            ))}
        </div>
      </div>
      
      <ul className="space-y-2 list-inside list-decimal text-stone-700">
        {step.instructions.map((instruction, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: instruction }}></li>
        ))}
      </ul>

      {step.parallelHint && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg">
          <p><span className="font-bold">Dica de Mestre:</span> {step.parallelHint}</p>
        </div>
      )}
    </div>
  );
};

export default StepCard;
