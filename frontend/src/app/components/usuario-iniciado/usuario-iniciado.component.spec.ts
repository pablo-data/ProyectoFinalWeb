import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIniciadoComponent } from './usuario-iniciado.component';

describe('UsuarioIniciadoComponent', () => {
  let component: UsuarioIniciadoComponent;
  let fixture: ComponentFixture<UsuarioIniciadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioIniciadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIniciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
