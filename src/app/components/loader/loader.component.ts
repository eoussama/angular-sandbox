import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnChanges {

  //#region Properties

  /**
   * @description
   * The number of cards to show
   */
  items: Array<number>;

  /**
   * @description
   * The number of the loading cards
   */
  @Input()
  count: number;

  //#endregion

  //#region Lifecycle

  constructor() {
    this.items = [];
    this.count = environment.pageSize;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('count' in changes) {
      this.generateCards();
    }
  }

  //#endregion

  //#region Methods

  private generateCards(): void {
    this.items = [...Array(this.count)];
  }

  //#endregion
}
