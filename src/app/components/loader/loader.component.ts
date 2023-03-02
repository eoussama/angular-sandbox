import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  //#region Properties

  /**
   * @description
   * The number of cards to show
   */
  items: Array<number>;

  //#endregion

  //#region Lifecycle

  constructor() {
    this.items = [...Array(environment.pageSize)];
  }

  //#endregion
}
