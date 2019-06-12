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
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent,
    ProductPresentationComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    CheckoutComponent,
    AdminComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
