import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomebodyComponent } from './user-homebody.component';

describe('UserHomebodyComponent', () => {
  let component: UserHomebodyComponent;
  let fixture: ComponentFixture<UserHomebodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomebodyComponent]
    });
    fixture = TestBed.createComponent(UserHomebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
