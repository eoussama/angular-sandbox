import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  //#region Properties

  /**
   * @description
   * The title of the card
   */
  @Input()
  title: string;

  //#endregion

  //#region Lifefcycle

  constructor() {
    this.title = '';
  }

  //#endregion
}
