/* Placing server end point at a constant place and use same in all api requests. Easy to handle frequent end point changes
 Just 1 api call so placing it here . For big applications  , we can place it in app config .*/

export const REQUEST_NAMES = {
  REQUEST_JOKES: 'https://icanhazdadjoke.com/search?page=',
};
