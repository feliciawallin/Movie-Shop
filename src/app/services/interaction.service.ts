import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartProduct } from '../interfaces/ICartProduct';

@Injectable({
 providedIn: 'root'
})
export class InteractionService {
 private movieSource = new Subject<IMovie>();

 cart: ICartProduct[] = [];

 movieSource$ = this.movieSource.asObservable();

 sendMovie(product: IMovie) {
   this.movieSource.next(product);
 }

 constructor() { }
}