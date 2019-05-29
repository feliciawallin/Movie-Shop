import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { Router, NavigationEnd } from '@angular/router';
import { IMovie } from '../interfaces/IMovie';
import { FormBuilder, Validators, FormArray} from '@angular/forms';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  timeNow = moment().format('lll');
  cart: ICartProduct[] = [];
  totalSum: number;
  showShoppingCart = false;
  totalAmount: number;
  orderForm = this.fb.group({
    
    emailAdress: ['', Validators.required],
    paymentOptions: ['', Validators.required]

  });

   //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private router: Router, private interactionService: InteractionService, private fb: FormBuilder, private dataService: DataService) { }

  
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

  postOrder(){

    let orderRowsContent = [];

    for (let i = 0; i < this.cart.length; i++) {
     
      let amount = this.cart[i].amount;
      let id = this.cart[i].movie.id;

      orderRowsContent.push({productId: id, amount: amount});
    
    }
    console.log('variabel orderrows ', orderRowsContent);
    console.log('bajs ' + this.timeNow);
    

    let order: IOrder = {
      id: 0,
      companyId: 15,
      created: this.timeNow, //timegrejen
      createdBy: this.orderForm.get('emailAdress').value,
      paymentMethod: this.orderForm.get('paymentOptions').value,
      totalPrice: this.totalSum,
      status: 0,
      orderRows: orderRowsContent

    }

    this.dataService.postOrder(order).subscribe()

   
  }
}