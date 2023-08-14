import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruserComponent } from './cruser.component';

describe('CruserComponent', () => {
  let component: CruserComponent;
  let fixture: ComponentFixture<CruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
