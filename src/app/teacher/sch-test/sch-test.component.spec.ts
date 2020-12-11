import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchTestComponent } from './sch-test.component';

describe('SchTestComponent', () => {
  let component: SchTestComponent;
  let fixture: ComponentFixture<SchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
