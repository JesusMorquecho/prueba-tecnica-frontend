import { Director } from "./directors.interfaces";

export interface Movie {
  id: number;
  name: string;
  releaseYear?: string; // Usa el formato de fecha ISO 8601
  gender?: string;
  duration?: string; // Usa el formato de tiempo ISO 8601
  fkDirector?: number;
  director?: Director; // Para la relación con Director
}
