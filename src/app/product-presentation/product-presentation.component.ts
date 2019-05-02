import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';


@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() product: IMovie;
  @Output() remove = new EventEmitter <number>();
  constructor() { }

  ngOnInit() {
  }

  addMovieToCart(){
    //Här ska vi lägga till i kundkorgen
  }
}
