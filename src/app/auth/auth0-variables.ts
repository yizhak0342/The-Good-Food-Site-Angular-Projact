interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Ydvl0bXVGSPolGOsHODVqkqIwfAscV8Z',
  domain: 'the-good-food-site.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};

