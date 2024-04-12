import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonalComponent } from './detalles-personal.component';

describe('DetallesPersonalComponent', () => {
  let component: DetallesPersonalComponent;
  let fixture: ComponentFixture<DetallesPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPersonalComponent]
    });
    fixture = TestBed.createComponent(DetallesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
