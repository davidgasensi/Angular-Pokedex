import { TestBed } from '@angular/core/testing';

import { PokedexapiService } from './pokedexapi.service';

describe('PokedexapiService', () => {
  let service: PokedexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
