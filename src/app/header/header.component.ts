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

  showShoppingCart = false;

  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) { }

  //addMovie(movie: ICartProduct) {//Hjälp av filip
  // this.cart.push(movie);
  // }

  ngOnInit() {
    this.interactionService.movieSource$.subscribe(
      movieInfo => {
        this.addToCart(movieInfo);
      }
    )

     this.printCartFromLocalStorage();
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
      this.cart.push({ movie: movieToAdd, amount: 1, totalPrice: movieToAdd.price});
      console.log(movieToAdd.id);
      console.log(movieToAdd.name);
    }

    this.saveCartToLocalStorage();

  }

  saveCartToLocalStorage(){
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));
    this.printCartFromLocalStorage();
  }
  
  printCartFromLocalStorage(){
    let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
    if(fetchLocalStorageCart === null){
      this.cart = [];
    } else{
      this.cart = JSON.parse(fetchLocalStorageCart);
    }

  }
  cartDropDown(){
    this.showShoppingCart = !this.showShoppingCart;
    this.countTotalPrice()
  }
  countTotalPrice(){
    for (let i = 0; i < this.cart.length; i++) {
      let totalSingleMovie = 0
      let amount = this.cart[i].amount
      let price =  this.cart[i].movie.price;

        totalSingleMovie += (amount * price);

        console.log( totalSingleMovie);
        
      }
      
    }
  }
