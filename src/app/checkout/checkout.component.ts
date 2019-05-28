import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { Router, NavigationEnd } from '@angular/router';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: ICartProduct[] = [];
  totalSum: number;
  showShoppingCart = false;
  totalAmount: number;


   //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private router: Router, private interactionService: InteractionService) { }

  
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });


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