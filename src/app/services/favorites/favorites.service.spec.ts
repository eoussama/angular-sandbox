import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FavoritesService } from './favorites.service';
import { of } from 'rxjs';
import { update } from 'src/app/state/favorites/favoritesd.action';
import { environment } from 'src/environments/environment';
import { Superhero } from 'src/app/models/superhero.model';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Superhero objects when given an array of valid superhero IDs', async () => {
    const superheroIds = [1, 2, 3];
    const expectedSuperheroes = [
      new Superhero({
        id: '1',
        name: 'Superman'
      } as any, true),
      new Superhero({
        id: '2',
        name: 'Batman'
      } as any, true),
      new Superhero({
        id: '3',
        name: 'Wonder Woman'
      } as any, true)
    ];

    jest.spyOn(service['http'], 'get')
      .mockReturnValueOnce(of({ id: 1, name: 'Superman' }))
      .mockReturnValueOnce(of({ id: 2, name: 'Batman' }))
      .mockReturnValueOnce(of({ id: 3, name: 'Wonder Woman' }));

    const actualSuperheroes = await service.loadFavorites(superheroIds);

    expect(actualSuperheroes).toEqual(expectedSuperheroes);
  });


  it('should update the user\'s favorites and dispatch an update action to the store when a superhero is favorited', async () => {
    const superheroId = 1;
    const userId = '123';
    const user = {
      id: userId,
      username: 'testuser',
      favorites: []
    };

    jest.spyOn(service['store'], 'select').mockReturnValue(of(userId));
    jest.spyOn(service['http'], 'get').mockReturnValue(of(user));
    jest.spyOn(service['http'], 'put').mockReturnValue(of(null));

    const updateSpy = jest.spyOn(service['store'], 'dispatch');

    await service.favoriteSuperhero(superheroId);

    expect(service['http'].put).toHaveBeenCalledWith(`${environment.api.auth}/users/${userId}`, { ...user, favorites: [superheroId] });
    expect(updateSpy).toHaveBeenCalledWith(update({ favorites: [superheroId] }));
  });

  it('should update the user\'s favorites and dispatch an update action to the store when a superhero is unfavorited', async () => {
    const superheroId = 1;
    const userId = '123';
    const user = {
      id: userId,
      username: 'testuser',
      favorites: [1, 2, 3]
    };

    jest.spyOn(service['store'], 'select').mockReturnValue(of(userId));
    jest.spyOn(service['http'], 'get').mockReturnValue(of(user));
    jest.spyOn(service['http'], 'put').mockReturnValue(of(null));

    const updateSpy = jest.spyOn(service['store'], 'dispatch');

    await service.unfavoriteSuperhero(superheroId);

    expect(service['http'].put).toHaveBeenCalledWith(`${environment.api.auth}/users/${userId}`, { ...user, favorites: [2, 3] });
    expect(updateSpy).toHaveBeenCalledWith(update({ favorites: [2, 3] }));
  });
});