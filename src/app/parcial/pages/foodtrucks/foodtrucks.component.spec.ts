import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtrucksComponent } from './foodtrucks.component';

describe('FoodtrucksComponent', () => {
  let component: FoodtrucksComponent;
  let fixture: ComponentFixture<FoodtrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtrucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodtrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
