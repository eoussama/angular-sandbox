import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effect';
import { reducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), autoPause: true, trace: false, traceLimit: 75 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
