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
  totalAmount: number;

  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {

    this.interactionService.getCartFromLocalStorage();
    this.cart = this.interactionService.getCart();
    this.countTotalPrice();
    this.countTotalAmount();

    this.interactionService.movieSource$.subscribe(
      cartInfo => {
        this.print(cartInfo);
  
        
      }
    )
   
  }

  cartDropDown(){
    this.showShoppingCart = !this.showShoppingCart;
  
  }

  addSingleMovieToCart(singleMovie: IMovie) {

    this.interactionService.sendCart(singleMovie);
 
    this.cart = this.interactionService.cart;
 
    this.countTotalAmount();
    this.countTotalPrice();
 
  }

  subtractMovie(id) {

    this.interactionService.delete(id);
 
    this.countTotalAmount();
    this.countTotalPrice();
 
  }

  print(cart) {

    console.log('movie: ' + cart);
 
    this.cart = cart;
 
    this.countTotalAmount();
    this.countTotalPrice();
 
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

  countTotalAmount(){
    this.totalAmount = 0;

    for(let i = 0; i < this.cart.length; i++){
      // console.log('In loop: ', this.cart[i]);
 
      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalAmount += this.cart[i].amount;
 
      console.log("total amount is: " + this.totalAmount);
 
    }
  }
 
  
  }
