import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealComponent } from './daily-meal.component';

describe('DailyMealComponent', () => {
  let component: DailyMealComponent;
  let fixture: ComponentFixture<DailyMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
