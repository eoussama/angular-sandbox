import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Injectable({
  providedIn: 'root'
})
export class SuperheroResolver implements Resolve<Superhero> {

  //#region Lifecycle

  constructor(private superheroes: SuperheroService) { }

  //#endregion

  //#region Methods

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Superhero> {
    return new Observable(observe => {
      const id = parseInt(route.paramMap.get('id') ?? '');
      this.superheroes.getSuperheroById(id)
        .then(superhero => observe.next(superhero))
        .catch(err => observe.error(err));
    });
  }

  //#endregion
}
