import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials)
      .pipe(
        map(response => {
          if (response && response['token']) {
            localStorage.setItem('token', response['token']);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedId() {
    let token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return this.jwtHelper.decodeToken(token);
  }

}
