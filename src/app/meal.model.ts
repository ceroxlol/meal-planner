export interface Meal {
  id: number;
  title: string;
  ingredients: string[];
  cookTime: number; // in minutes
  effortLevel: number; // 1 to 5
}
