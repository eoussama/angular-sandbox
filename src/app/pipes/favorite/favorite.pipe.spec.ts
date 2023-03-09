import { StoreModule } from '@ngrx/store';
import { FavoritePipe } from './favorite.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

import { } from '@angular/core/testing';

describe('FavoritePipe', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot({})]
        });
    });

    it('create an instance', inject([FavoritesService], (favorites: FavoritesService) => {
        let pipe = new FavoritePipe(favorites);
        expect(pipe).toBeTruthy();
    }));
});
