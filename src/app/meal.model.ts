export interface Meal {
  _id: string;
  title: string;
  ingredients: string[];
  timeToCook: number; // in minutes
  effortLevel: number; // 1 to 3
  imageUrl: string;
}
