import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillsChartComponent } from './technical-skills-chart.component';

describe('TechnicalSkillsChartComponent', () => {
  let component: TechnicalSkillsChartComponent;
  let fixture: ComponentFixture<TechnicalSkillsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSkillsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSkillsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
