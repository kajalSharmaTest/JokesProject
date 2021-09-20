/* eslint-disable no-shadow */
/* Placing server end point at a constant place and use same in all api requests. Easy to handle frequest end point changes
 Just 1 api call so placing it here . For big applications  , we can place it in app config .*/
export enum Constants {
  SERVER_URL = 'https://icanhazdadjoke.com/',
}

export const REQUEST_NAMES = new (class {
  REQUEST_JOKES = Constants.SERVER_URL + 'search?page=';
})();
