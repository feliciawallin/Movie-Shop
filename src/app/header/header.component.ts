import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];

  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) { }

  //addMovie(movie: ICartProduct) {//Hjälp av filip
  // this.cart.push(movie);
  // }

  ngOnInit() {
    this.interactionService.movieSource$.subscribe(
      movieInfo => {
        this.addToCart(movieInfo)
      }
    )
  }

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (movieToAdd.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        addedMovie = true;
        console.log(movieToAdd.id);
        console.log(movieToAdd.name);
      }
    }
    if (addedMovie === false) {
      this.cart.push({ movie: movieToAdd, amount: 1 });
      console.log(movieToAdd.id);
      console.log(movieToAdd.name);
    }

    //this.saveCartToLocalStorage();
  }

//   saveCartToLocalStorage(){
//     localStorage.setItem("mySavedCart", JSON.stringify(this.cart));
//   }
// }
}
