import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { InteractionService } from '../services/interaction.service';

@Component({
 selector: 'app-details',
 templateUrl: './details.component.html',
 styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 singleMovie: IMovie =
  {id:0,
  description: '',
  name:'',
  price: 0,
  imageUrl: '',
  year: 0,
  added:'',
  productCategory:[] 
};

 constructor(private route: ActivatedRoute, private service: DataService, private interactionService: InteractionService, private router: Router) { }

 ngOnInit() {

  this.router.events.subscribe((evt) => {
    if (!(evt instanceof NavigationEnd)) {
        return;
    }
    window.scrollTo(0, 0)
  });

  //När du clickar på bilden så skickas de ett id
   this.route.paramMap.subscribe(myParams => {
     let id = myParams.get("id");
     this.service.fetchSingleMovie(id).subscribe((data) => {
       this.singleMovie = data;
     });
   });
 }

 //Ropar på funktionen senCart som ligger i interactionservice
 addMovieToCart(product){
  this.interactionService.sendCart(product);
}

}