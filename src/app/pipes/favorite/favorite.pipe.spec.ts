import { StoreModule } from '@ngrx/store';
import { FavoritePipe } from './favorite.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

import { } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';

describe('FavoritePipe', () => {
    const favoritesServiceMock = {
        async loadFavorites(favorites: Array<number>): Promise<Array<Superhero>> {
            return Promise.resolve([
                new Superhero({ id: '1', name: 'Superhero 1' } as any),
                new Superhero({ id: '2', name: 'Superhero 2' } as any),
                new Superhero({ id: '3', name: 'Superhero 3' } as any),
            ]);
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot({})],
            providers: [
                { provide: FavoritesService, useValue: favoritesServiceMock }
            ]
        });
    });

    it('create an instance', inject([FavoritesService], (favorites: FavoritesService) => {
        let pipe = new FavoritePipe(favorites);
        expect(pipe).toBeTruthy();
    }));

    it('transforms an observable of array of numbers to an observable of superhero objects', inject([FavoritesService], async (favorites: FavoritesService) => {
        let pipe = new FavoritePipe(favorites);

        const input = [1, 2, 3];
        const output = await firstValueFrom(pipe.transform(input)) as Array<Superhero>;

        expect(output[1].name).toEqual('Superhero 2');
    }));
});
