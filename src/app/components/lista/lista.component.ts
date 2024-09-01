import { Component,OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.services';
import { Movie } from '../../interfaces/movies.interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  movies: Movie[] = [];
  displayedColumns: string[] = ['id', 'name', 'releaseYear', 'gender', 'duration'];
  dataSource: Movie[] = [];
  moviesService: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (movies) => {
        console.log('Datos recibidos:', movies);
        this.dataSource = movies;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al cargar las películas', error);
      }
    );
  }

}
