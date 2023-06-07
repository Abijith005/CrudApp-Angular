import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeBodyComponent } from './admin-home-body.component';

describe('AdminHomeBodyComponent', () => {
  let component: AdminHomeBodyComponent;
  let fixture: ComponentFixture<AdminHomeBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHomeBodyComponent]
    });
    fixture = TestBed.createComponent(AdminHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
