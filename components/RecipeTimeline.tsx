
import React from 'react';
import type { Step } from '../types';
import StepCard from './StepCard';

interface RecipeTimelineProps {
  steps: Step[];
  currentStep: number;
  onSelectStep: (index: number) => void;
  onIngredientClick: (ingredientName: string) => void;
}

const RecipeTimeline: React.FC<RecipeTimelineProps> = ({ steps, currentStep, onSelectStep, onIngredientClick }) => {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-8 top-0 h-full w-0.5 bg-stone-200" aria-hidden="true"></div>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-12 md:pl-16">
             <div className="absolute left-0 top-2 flex items-center justify-center">
               <span 
                className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-2xl rounded-full font-bold transition-all duration-300 ${
                    currentStep === index
                    ? 'bg-orange-500 text-white scale-110 shadow-lg'
                    : index < currentStep
                    ? 'bg-green-600 text-white'
                    : 'bg-stone-300 text-stone-600'
                }`}
               >
                 {step.emoji}
               </span>
             </div>
            <StepCard 
              step={step}
              isCurrent={currentStep === index}
              isCompleted={index < currentStep}
              onSelectStep={() => onSelectStep(index)}
              onIngredientClick={onIngredientClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeTimeline;
