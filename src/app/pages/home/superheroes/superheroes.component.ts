import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, merge } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';


@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss', './../../../components/input/input.component.scss']
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

  /**
   * @description
   * The search query
   */
  search: string;

  /**
   * @description
   * Reference of the searcg input
   */
  @ViewChild('input') input!: ElementRef;

  //#endregion

  //#region Lifecycle

  constructor(
    private superhero: SuperheroService
  ) {
    this.page = 1;
    this.search = '';
    this.superheroes$ = new BehaviorSubject<Array<Superhero>>([]);
  }

  ngOnInit(): void {
    this.loadSuperheroes();
  }

  ngAfterViewInit(): void {
    this.searchListen();
    this.scrollListen();
  }

  ngOnDestroy(): void {
    this.page = 1;
  }

  //#endregion

  //#region Event listeners

  /**
   * @description
   * Injects a searchh query
   *
   * @param e The search object
   */
  onSearch(): void {
    if (this.search.length > 0) {
      this.loadSuperheroes();
    }
  }

  //#endregion

  //#region Methods

  /**
   * @description
   * Loads the list of superheroes
   */
  private async loadSuperheroes(): Promise<void> {
    if (this.search.length > 0) {
      this.paginateSearch();
    } else {
      this.paginate();
    }
  }

  /**
   * @description
   * Paginates search results
   */
  private async paginateSearch(): Promise<void> {
    this.page = 1;
    this.superheroes$.next([]);

    try {
      const data = await this.superhero.getSuperheroBySearch(this.search);
      this.superheroes$.next(data);
    } catch (err) { }
  }

  /**
   * @description
   * Paginates the list
   */
  private async paginate(): Promise<void> {
    if (this.page === 1) {
      this.superheroes$.next([]);
    }

    const data = await this.superhero.getSuperheroes(this.page++);
    const superheroes = [...this.superheroes$.getValue(), ...data]

    this.superheroes$.next(superheroes);
  }

  /**
   * @description
   * Listens to search updates
   */
  private searchListen(): void {
    merge(
      fromEvent(this.input.nativeElement, 'search'),
      fromEvent(this.input.nativeElement, 'input')
    )
      .pipe(debounceTime(300))
      .subscribe(() => this.loadSuperheroes());
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
