import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealDialogComponent } from './edit-meal-dialog.component';

describe('EditMealDialogComponent', () => {
  let component: EditMealDialogComponent;
  let fixture: ComponentFixture<EditMealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMealDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
