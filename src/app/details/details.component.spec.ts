import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from '../testing/activatedRouteStub';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MockService } from '../services/mock.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let stub = new ActivatedRouteStub({
    id: 76
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, 
       ],
      imports: [ RouterTestingModule, HttpClientModule],
      providers: [{provide: ActivatedRoute, useValue: stub},
      {provide: DataService, useClass: MockService}]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
