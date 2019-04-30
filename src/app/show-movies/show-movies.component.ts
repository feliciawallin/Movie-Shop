import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movieArray:IMovie[] = [];

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    //getData är en funktion i classen DataService från data.service.ts. här subscribear vi på datan som vi får ifårn funktion getData. All data vi får, sparas i fetchedMovies variabeln
    this.dataService.getData().subscribe(fetchedMovies => this.movieArray = fetchedMovies)
  }

}
