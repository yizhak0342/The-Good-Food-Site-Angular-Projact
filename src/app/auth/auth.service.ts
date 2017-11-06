import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()

export class AuthService {

role: boolean = false;

  auth0 = new auth0.WebAuth({

    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email userinfo read:messages',

  });

  userProfile: any;
  profileid;
  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {

        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        console.log(self.userProfile);
      }
      cb(err, profile);
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at

    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.getProfile((err, profile) => {
      this.profileid = profile;
      localStorage.setItem('email', this.userProfile.email);
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');

    // Go back to the home route
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  isAdmin() {
    setTimeout(() => {
      console.log(localStorage.getItem("email"));
    this.role =  localStorage.getItem("email") == "yizhak0342@gmail.com";
  }, 1000);
  }
}