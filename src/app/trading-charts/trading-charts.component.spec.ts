import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TradingChartsComponent } from './trading-charts.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

describe('TradingChartsComponent', () => {
  let component: TradingChartsComponent;
  let fixture: ComponentFixture<TradingChartsComponent>;
  let route: ActivatedRoute;
  let currentRoute: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingChartsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingChartsComponent);
    route = TestBed.inject(ActivatedRoute);
    currentRoute = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the -What is new?- modal appear once the page is loaded', () => {
    
    let modalToggleClassName = 'toggle-modal';

    component.showModal();
    
    expect(component.modal.classList.contains(modalToggleClassName)).toBe(true);
  });

  it('should check if the -What is new?- modal remove once the X button is clicked', () => {
    let modalToggleClassName = 'toggle-modal';

    component.hideModal();

    expect(component.modal.classList.contains(modalToggleClassName)).toBe(false);
  });
});
