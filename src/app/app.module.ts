import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPresentationComponent } from './product-presentation/product-presentation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent,
    ProductPresentationComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
