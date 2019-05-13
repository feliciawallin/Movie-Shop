import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MockService } from '../services/mock.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one movie', () => {
    expect(component.cart.length).toEqual(0);

    const service = new MockService();

    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);

      expect(component.cart.length).toEqual(1);
    });
  });

  it('should add two different movies to cart', () => {
    const service = new MockService();

    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);
      component.addToCart(movies[1]);

      expect(component.cart.length).toEqual(2);
    });
  });

  it('should add two duplicate movies and increase amount to 2', () => {
    const service = new MockService();

    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);
      component.addToCart(movies[0]);
      expect(component.cart.length).toEqual(1);
    });
  });
});
