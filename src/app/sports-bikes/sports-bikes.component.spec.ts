import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBikesComponent } from './sports-bikes.component';

describe('SportsBikesComponent', () => {
  let component: SportsBikesComponent;
  let fixture: ComponentFixture<SportsBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
