import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepComponent } from './sleep.component';

describe('SleepComponent', () => {
  let component: SleepComponent;
  let fixture: ComponentFixture<SleepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepComponent]
    });
    fixture = TestBed.createComponent(SleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
