import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicaleDetailsComponent } from './vehicale-details.component';

describe('VehicaleDetailsComponent', () => {
  let component: VehicaleDetailsComponent;
  let fixture: ComponentFixture<VehicaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicaleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
