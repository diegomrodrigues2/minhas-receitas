
export interface Ingredient {
  category: string;
  name: string;
  quantity: string;
  notes?: string;
  emoji: string;
}

export interface Step {
  id: number;
  phase: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  emoji: string;
  parallelHint?: string;
}

export interface IngredientDetail {
  title: string;
  description: string;
  emoji: string;
}
