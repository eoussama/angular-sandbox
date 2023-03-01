import { Component, Input } from '@angular/core';
import { Superhero } from 'src/app/models/superhero.model';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent {

  //#region Properties

  /**
   * @description
   * The superhero in question
   */
  @Input() superhero!: Superhero;

  //#endregion

}
