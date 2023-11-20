import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsAddComponent } from './foods-add.component';

describe('FoodsAddComponent', () => {
  let component: FoodsAddComponent;
  let fixture: ComponentFixture<FoodsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodsAddComponent]
    });
    fixture = TestBed.createComponent(FoodsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
