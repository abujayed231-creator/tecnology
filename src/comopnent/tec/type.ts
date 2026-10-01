 export interface ITechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Easy" | "Medium" | "Hard";
  badge?: string;
}