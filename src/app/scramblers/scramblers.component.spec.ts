import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScramblersComponent } from './scramblers.component';

describe('ScramblersComponent', () => {
  let component: ScramblersComponent;
  let fixture: ComponentFixture<ScramblersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScramblersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScramblersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
