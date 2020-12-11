import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteredEventsComponent } from './user-registered-events.component';

describe('UserRegisteredEventsComponent', () => {
  let component: UserRegisteredEventsComponent;
  let fixture: ComponentFixture<UserRegisteredEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisteredEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteredEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
