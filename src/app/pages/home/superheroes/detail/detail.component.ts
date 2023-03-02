import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  //#region Properties

  /**
   * @description
   * The superhero in question
   */
  get superhero$(): Observable<Superhero> {
    return this.activatedRpute.data.pipe(map((e: any) => e.superhero))
  }

  //#endregion

  //#region Lifecycle

  constructor(private activatedRpute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRpute.data.subscribe(console.log);
  }

  //#endregion
}
