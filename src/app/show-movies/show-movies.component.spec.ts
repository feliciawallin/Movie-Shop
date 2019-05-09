import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowMoviesComponent } from './show-movies.component';
import { DataService } from '../services/data.service';
import { MockService } from '../services/mock.service';
import { AddProductToCartComponent } from '../add-product-to-cart/add-product-to-cart.component';
import { ProductPresentationComponent } from '../product-presentation/product-presentation.component';

describe('ShowMoviesComponent', () => {
  let component: ShowMoviesComponent;
  let fixture: ComponentFixture<ShowMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMoviesComponent, AddProductToCartComponent, ProductPresentationComponent ]
    })
     // SPC har providern DataService från spc.ts, här overridear vi den och använder MockdataService när vi gör våra tester.
    .overrideComponent(ShowMoviesComponent, { set: { providers: [{ provide: DataService, useClass: MockService }]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain three movies`, () => {
    
    expect(component.movieArray.length).toEqual(3);

  });
});
