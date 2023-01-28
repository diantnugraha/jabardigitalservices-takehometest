import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePerairanComponent } from './pie-perairan.component';

describe('PiePerairanComponent', () => {
  let component: PiePerairanComponent;
  let fixture: ComponentFixture<PiePerairanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePerairanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePerairanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
