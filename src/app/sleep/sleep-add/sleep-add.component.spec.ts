import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepAddComponent } from './sleep-add.component';

describe('SleepAddComponent', () => {
  let component: SleepAddComponent;
  let fixture: ComponentFixture<SleepAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepAddComponent]
    });
    fixture = TestBed.createComponent(SleepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
