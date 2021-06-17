import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionUsuarioComponent } from './sesion.component';

describe('SesionComponent', () => {
  let component: IniciarSesionUsuarioComponent;
  let fixture: ComponentFixture<IniciarSesionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
