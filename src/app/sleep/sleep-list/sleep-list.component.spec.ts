import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepListComponent } from './sleep-list.component';

describe('SleepListComponent', () => {
  let component: SleepListComponent;
  let fixture: ComponentFixture<SleepListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepListComponent]
    });
    fixture = TestBed.createComponent(SleepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
