import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  //#region Properties

  /**
   * @description
   * List of superheroes
   */
  superheroes$: BehaviorSubject<Array<Superhero>>;

  //#endregion

  //#region Lifecycle

  constructor(
    private superhero: SuperheroService
  ) {
    this.superheroes$ = new BehaviorSubject<Array<Superhero>>([]);
  }

  ngOnInit(): void {
    this.loadSuperheroes();
  }

  //#endregion

  //#region Event listeners

  //#endregion

  //#region Methods

  /**
   * @description
   * Loads the list of superheroes
   */
  private loadSuperheroes(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.superheroes$.next(await this.superhero.getSuperheroes(1));
    });
  }

  //#endregion
}
