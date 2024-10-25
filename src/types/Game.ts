export interface Game {
  id: string;
  name: string;
  img: string;
  category: string;
  provider: string;
  description?: string; // Optional description of the game
  releaseDate?: string; // Optional release date
  rating?: number; // Optional rating, e.g., from 1 to 5
  providerId: string; // ID of the provider to facilitate filtering
  isFavorite?: boolean; // Optional flag to track favorites
}
