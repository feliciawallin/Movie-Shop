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
  totalSum: number;
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
        this.countTotalPrice()
      }
    )
     this.printCartFromLocalStorage();
     this.countTotalPrice()
  }

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    // movieToAdd.id = id på klickade film
    //this.cart[i].movie.id = id på den som finns i cart]
    for (let i = 0; i < this.cart.length; i++) {
      if (movieToAdd.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        addedMovie = true;
        this.cart[i].totalPrice += this.cart[i].movie.price;
      }
    }

    if (addedMovie === false) {
      this.cart.push({ movie: movieToAdd, amount: 1, totalPrice: movieToAdd.price});
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
    this.countTotalPrice()
  }

  cartDropDown(){
    this.showShoppingCart = !this.showShoppingCart;
    this.countTotalPrice()
  }

  countTotalPrice(){

    this.totalSum = 0;
    console.log('Count total: ', this.cart);
 
    for(let i = 0; i < this.cart.length; i++){
      console.log('In loop: ', this.cart[i]);
 
      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount;
 
    }
 
  }
  
  addOneMoreMovie(id: number){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].movie.id === id){
        this.cart[i].amount++;
        this.cart[i].totalPrice += this.cart[i].movie.price;
      }
    }
    this.saveCartToLocalStorage();
  }
 
  subtractMovie(id: number){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].movie.id === id){
        if(this.cart[i].amount > 0){
          this.cart[i].amount--;
          this.cart[i].totalPrice -= this.cart[i].movie.price;
        }
 
        if(this.cart[i].amount === 0){
          this.cart.splice(i, 1);
        }
      }
    }
    this.saveCartToLocalStorage();
  }
  }
