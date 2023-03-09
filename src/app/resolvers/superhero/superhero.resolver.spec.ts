import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SuperheroResolver } from './superhero.resolver';

describe('SuperheroResolver', () => {
  let resolver: SuperheroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})]
    });
    resolver = TestBed.inject(SuperheroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
