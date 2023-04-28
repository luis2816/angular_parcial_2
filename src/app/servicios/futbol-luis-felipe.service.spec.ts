import { TestBed } from '@angular/core/testing';

import { FutbolLuisFelipeService } from './futbol-luis-felipe.service';

describe('FutbolLuisFelipeService', () => {
  let service: FutbolLuisFelipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutbolLuisFelipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
