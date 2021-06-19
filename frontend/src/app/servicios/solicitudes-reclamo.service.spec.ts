import { TestBed } from '@angular/core/testing';

import { SolicitudesReclamoService } from './solicitudes-reclamo.service';

describe('SolicitudesReclamoService', () => {
  let service: SolicitudesReclamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesReclamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
