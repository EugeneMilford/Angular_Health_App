import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEditComponent } from './exercise-edit.component';

describe('ExerciseEditComponent', () => {
  let component: ExerciseEditComponent;
  let fixture: ComponentFixture<ExerciseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseEditComponent]
    });
    fixture = TestBed.createComponent(ExerciseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
