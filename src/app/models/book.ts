export interface Book {
  id: number;
  name: string;
  genre: string[];
  authors: string[];
  rating?: number;
  followers?: number;
}
