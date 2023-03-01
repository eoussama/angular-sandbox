import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestGuard } from './guards/guest/guest.guard';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        canActivateChild: [AuthenticationGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        canActivateChild: [GuestGuard],
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
