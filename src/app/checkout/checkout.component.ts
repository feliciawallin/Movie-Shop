import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: ICartProduct[];

  constructor(private router: Router, private interactionService: InteractionService) { }

  ngOnInit() {
   // this.cart = this.interactionService.getCart();
  //   this.route.paramMap.subscribe(myParams => {
  //     let id = myParams.get('id');
  //     console.log(id);
  //     this.service.fetchSingleMovie(id).subscribe((data) => {
  //       this.singleMovie = data;
  //     });
  //   });
  // }
  }

  // printCartFromLocalStorage(){
  //   let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
  //   if(fetchLocalStorageCart === null){
  //     this.cart = [];
  //   } else{
  //     this.cart = JSON.parse(fetchLocalStorageCart);
  //   }
  //   this.countTotalPrice()
  // }
  
}
