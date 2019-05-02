import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMoviesComponent } from './show-movies/show-movies.component';

const routes: Routes = [
  { path: '', component: ShowMoviesComponent }, //detta kommer vara våran index sida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
