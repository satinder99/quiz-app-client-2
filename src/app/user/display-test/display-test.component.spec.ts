import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestComponent } from './display-test.component';

describe('DisplayTestComponent', () => {
  let component: DisplayTestComponent;
  let fixture: ComponentFixture<DisplayTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
