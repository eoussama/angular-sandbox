import { StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ThumbComponent } from './thumb.component';
import { Superhero } from 'src/app/models/superhero.model';

describe('ThumbComponent', () => {
  let component: ThumbComponent;
  let fixture: ComponentFixture<ThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      declarations: [ThumbComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThumbComponent);
    component = fixture.componentInstance;
    component.superhero = new Superhero({ id: '1', name: 'Test Superhero' } as any);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
