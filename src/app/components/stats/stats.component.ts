import { Component, Input } from '@angular/core';
import { Stats } from 'src/app/models/stats.model';

@Component({
  standalone: false,
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  //#region Properties

  @Input()
  stats: Stats;

  //#endregion

  //#region Lifecycle

  constructor() {
    this.stats = new Stats();
  }

  //#endregion
}
