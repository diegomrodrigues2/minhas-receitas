
import React from 'react';
import type { IngredientDetail } from '../types';
import { XIcon } from './Icons';

interface IngredientInfoModalProps {
  ingredient: IngredientDetail;
  onClose: () => void;
}

const IngredientInfoModal: React.FC<IngredientInfoModalProps> = ({ ingredient, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 text-center relative transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-stone-400 hover:text-stone-600 transition-colors"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <div className="text-6xl mb-4">{ingredient.emoji}</div>
        <h3 className="text-2xl font-bold font-serif text-orange-900 mb-2">{ingredient.title}</h3>
        <p className="text-stone-600">{ingredient.description}</p>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default IngredientInfoModal;
