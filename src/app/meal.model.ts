export interface Meal {
  id: number;
  title: string;
  ingredients: string[];
  timeToCook: number; // in minutes
  effortLevel: number; // 1 to 3
  imageUrl: string;
}
