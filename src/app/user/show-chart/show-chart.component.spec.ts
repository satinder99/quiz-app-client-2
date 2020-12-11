import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChartComponent } from './show-chart.component';

describe('ShowChartComponent', () => {
  let component: ShowChartComponent;
  let fixture: ComponentFixture<ShowChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
