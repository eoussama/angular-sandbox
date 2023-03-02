import { TestBed } from '@angular/core/testing';

import { SuperheroResolver } from './superhero.resolver';

describe('SuperheroResolver', () => {
  let resolver: SuperheroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SuperheroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
