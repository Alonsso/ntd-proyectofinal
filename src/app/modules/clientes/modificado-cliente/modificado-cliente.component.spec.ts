import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificadoclienteComponent } from './modificado-cliente.component';

describe('ModificadoClienteComponent', () => {
  let component: ModificadoclienteComponent;
  let fixture: ComponentFixture<ModificadoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificadoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificadoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
