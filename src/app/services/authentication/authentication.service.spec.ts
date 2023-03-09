import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';
import { of } from 'rxjs';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when user is logged in', (done) => {
    // Mock the store to return a user object
    jest.spyOn(service['store'], 'select').mockReturnValue(of({ username: 'admin' }));

    service.isLoggedIn().subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(true);
      done();
    });
  });

  it('should return false when user is not logged in', (done) => {
    // Mock the store to return an empty user object
    jest.spyOn(service['store'], 'select').mockReturnValue(of({}));

    service.isLoggedIn().subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
      done();
    });
  });

  it('should log out a user', () => {
    // Spy on the store.dispatch method to verify that logout and reset actions are dispatched
    const dispatchSpy = jest.spyOn(service['store'], 'dispatch').mockImplementation();

    service.logout();

    expect(dispatchSpy).toHaveBeenCalledWith({ type: '[Auth] Logout' });
    expect(dispatchSpy).toHaveBeenCalledWith({ type: '[Favorites] Reset' });
  });
});
