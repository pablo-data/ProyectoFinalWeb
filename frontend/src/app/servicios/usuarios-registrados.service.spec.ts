import { TestBed } from '@angular/core/testing';

import { UsuariosRegistradosService } from './usuarios-registrados.service';

describe('UsuariosRegistradosService', () => {
  let service: UsuariosRegistradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosRegistradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
