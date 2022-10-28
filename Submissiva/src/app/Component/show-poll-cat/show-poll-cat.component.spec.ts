import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPollCatComponent } from './show-poll-cat.component';

describe('ShowPollCatComponent', () => {
  let component: ShowPollCatComponent;
  let fixture: ComponentFixture<ShowPollCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPollCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPollCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
