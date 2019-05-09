import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPresentationComponent } from './product-presentation/product-presentation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductToCartComponent } from './add-product-to-cart/add-product-to-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent,
    ProductPresentationComponent,
    HeaderComponent,
    FooterComponent,
    AddProductToCartComponent,
    
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
