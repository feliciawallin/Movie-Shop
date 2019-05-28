import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() product: IMovie;
  //@Output() remove = new EventEmitter <number>();
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

  addMovieToCart(product){
    
    this.interactionService.sendCart(product);
  }
}
