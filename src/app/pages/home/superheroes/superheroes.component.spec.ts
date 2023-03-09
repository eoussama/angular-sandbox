import { StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SuperheroesComponent } from './superheroes.component';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { FormsModule } from '@angular/forms';

describe('SuperheroesComponent', () => {
  let component: SuperheroesComponent;
  let fixture: ComponentFixture<SuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({}), LoaderModule, FormsModule],
      declarations: [SuperheroesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
