import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActiveUsersComponent } from './all-active-users.component';

describe('AllActiveUsersComponent', () => {
  let component: AllActiveUsersComponent;
  let fixture: ComponentFixture<AllActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
