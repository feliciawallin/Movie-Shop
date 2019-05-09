import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductToCartComponent } from './add-product-to-cart.component';
import { MockService } from '../services/mock.service';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddProductToCartComponent', () => {
  let component: AddProductToCartComponent;
  let fixture: ComponentFixture<AddProductToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductToCartComponent ],
      imports: [HttpClientModule]
    })
     // SPC har providern DataService från spc.ts, här overridear vi den och använder MockdataService när vi gör våra tester.
    .overrideComponent(AddProductToCartComponent, { set: { providers: [{ provide: DataService, useClass: MockService }]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create a empty cart', () => {
  //   expect(component.cart.length).toEqual(0);
  // });

  // it('should add one movie to cart', () => {
  //   component.addMovieToCart();
  //   expect(component.cart.length).toEqual(1);
  // });

  // it('should add one movie to cart but amount should be two', () => {
  //   expect(component.cart.length).toEqual(1);
  // });
});
