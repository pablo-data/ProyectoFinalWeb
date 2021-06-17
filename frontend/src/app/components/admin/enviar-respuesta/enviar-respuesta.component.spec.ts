import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarRespuestaComponent } from './enviar-respuesta.component';

describe('EnviarRespuestaComponent', () => {
  let component: EnviarRespuestaComponent;
  let fixture: ComponentFixture<EnviarRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarRespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
