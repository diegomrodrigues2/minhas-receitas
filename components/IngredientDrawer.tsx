import React, { useState } from 'react';
import type { Ingredient } from '../types';
import { ChevronDownIcon, InfoIcon } from './Icons';

interface IngredientDrawerProps {
  ingredients: Ingredient[];
  onIngredientClick: (ingredientName: string) => void;
}

const IngredientDrawer: React.FC<IngredientDrawerProps> = ({ ingredients, onIngredientClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  // FIX: The complex one-liner for reduce could cause type inference issues.
  // Rewriting it to be more explicit ensures correct type inference.
  const groupedIngredients = ingredients.reduce((acc, ingredient) => {
    const category = ingredient.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(ingredient);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md border border-stone-200 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-stone-100 hover:bg-stone-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold font-serif text-orange-900">Lista de Ingredientes</h3>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedIngredients).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-lg text-stone-700 mb-2 border-b-2 border-orange-200 pb-1">{category}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.name} className="flex items-start py-2 text-stone-600">
                    <span className="mr-2 text-xl">{item.emoji}</span>
                    <div>
                      <span className="font-semibold">{item.name}</span>: {item.quantity}
                      {item.notes && <em className="block text-sm text-stone-500">({item.notes})</em>}
                    </div>
                     <button onClick={() => onIngredientClick(item.name)} className="ml-auto pl-2 text-stone-400 hover:text-orange-600 transition-colors">
                        <InfoIcon className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientDrawer;