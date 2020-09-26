import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressOfSkillsComponent } from './progress-of-skills.component';

describe('ProgressOfSkillsComponent', () => {
  let component: ProgressOfSkillsComponent;
  let fixture: ComponentFixture<ProgressOfSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressOfSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressOfSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
