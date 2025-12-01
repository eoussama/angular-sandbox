import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/slide.animation';


@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  //#region Lifecycle

  constructor(private contexts: ChildrenOutletContexts) { }

  //#endregion

  //#region Methods

  /**
   * @description
   * Fetches contextual animation data
   *
   * @param outlet The target global outlet
   */
  getRouteAnimationData(outlet: RouterOutlet): void {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  //#endregion
}
