import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySpendComponent } from './daily-spend.component';

describe('DailySpendComponent', () => {
  let component: DailySpendComponent;
  let fixture: ComponentFixture<DailySpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySpendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
