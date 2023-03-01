import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestGuard } from './guards/guest/guest.guard';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'dash',
        data: { animation: 'HomePage' },
        canActivateChild: [AuthenticationGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        canActivateChild: [GuestGuard],
        data: { animation: 'LoginPage' },
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dash'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
