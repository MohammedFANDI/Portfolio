import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCommandLivreComponent } from './goal-command-livre.component';

describe('GoalCommandLivreComponent', () => {
  let component: GoalCommandLivreComponent;
  let fixture: ComponentFixture<GoalCommandLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalCommandLivreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalCommandLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
