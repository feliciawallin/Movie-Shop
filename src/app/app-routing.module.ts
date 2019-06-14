import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';


const routes: Routes = [
  { path: '', component: ShowMoviesComponent }, //detta kommer vara våran index sida
  { path: 'details/:id', component: DetailsComponent },
  { path: 'submit', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'confirmed', component: ConfirmedComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
