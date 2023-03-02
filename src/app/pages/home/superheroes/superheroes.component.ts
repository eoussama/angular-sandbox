import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';


@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Properties

  /**
   * @description
   * List of superheroes
   */
  superheroes$: BehaviorSubject<Array<Superhero>>;

  /**
   * @description
   * The current page
   */
  page: number;

  //#endregion

  //#region Lifecycle

  constructor(
    private superhero: SuperheroService
  ) {
    this.page = 1;
    this.superheroes$ = new BehaviorSubject<Array<Superhero>>([]);
  }

  ngOnInit(): void {
    this.loadSuperheroes();
  }

  ngAfterViewInit(): void {
    this.scrollListen();
  }

  ngOnDestroy(): void {
    this.page = 1;
  }

  //#endregion

  //#region Event listeners

  //#endregion

  //#region Methods

  /**
   * @description
   * Loads the list of superheroes
   */
  private async loadSuperheroes(): Promise<void> {
    const data = await this.superhero.getSuperheroes(this.page++);
    const superheroes = [...this.superheroes$.getValue(), ...data]

    this.superheroes$.next(superheroes);
  }

  /**
   * @description
   * Listens to page scroll
   */
  private scrollListen(): void {
    const cardLoader = document.querySelector('#cardLoader') as HTMLElement;
    const options = {
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadSuperheroes();
        }
      });
    }, options);

    observer.observe(cardLoader);
  }
  //#endregion
}
