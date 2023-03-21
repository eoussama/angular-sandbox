import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  //#region Properties

  /**
   * @description
   * The button's lavel
   */
  @Input()
  label: string

  /**
   * @description
   * The button's icon
   */
  @Input()
  icon: string;

  /**
   * @description
   * The loading state
   */
  @Input()
  loading: boolean;

  /**
   * @description
   * The loading icon
   */
  @Input()
  loadingIcon: string;

  /**
   * @description
   * The loading label
   */
  @Input()
  loadingLabel: string;

  /**
   * @description
   * Thhe click event
   */
  @Output()
  click: EventEmitter<void>;

  //#endregion

  //#region Lifecycle

  constructor() {
    this.icon = '';
    this.label = '';
    this.loading = false;
    this.loadingLabel = '';
    this.loadingIcon = 'hourglass_top';

    this.click = new EventEmitter();
  }

  //#endregion
}
