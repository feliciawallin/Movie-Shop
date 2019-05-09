import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';

@Component({
  selector: 'app-add-product-to-cart',
  templateUrl: './add-product-to-cart.component.html',
  styleUrls: ['./add-product-to-cart.component.css']
})
export class AddProductToCartComponent implements OnInit {

  cart: ICartProduct[] = []
  
  constructor() { }

  ngOnInit() {
  }

}
