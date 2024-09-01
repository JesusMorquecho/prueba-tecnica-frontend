import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Movie } from '../interfaces/movies.interfaces';
import { environment } from 'enviroments/enviroments.development';
@Injectable({ providedIn: 'root' })
export class MoviesService {
  private apiUrl = 'http://localhost:503/api/Movies/lista'; // URL de tu API

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<{ mensaje: string, response: Movie[] }>(`${environment.urlApi}Movies/lista`)
      .pipe(
        map(response => response.response) // Extrae el array de películas de la respuesta
      );
  }
}
