import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesNotesComponent } from './objectives-notes.component';

describe('ObjectivesNotesComponent', () => {
  let component: ObjectivesNotesComponent;
  let fixture: ComponentFixture<ObjectivesNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectivesNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
