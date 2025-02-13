import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortLevelComponent } from './effort-level.component';

describe('EffortLevelComponent', () => {
  let component: EffortLevelComponent;
  let fixture: ComponentFixture<EffortLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffortLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffortLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
