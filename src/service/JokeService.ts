import {REQUEST_NAMES} from '../common/Requests';
import {Joke} from '../types/Types';

export const fetchJokes = async (page = 1): Promise<Joke[]> => {
  const response = await fetch(REQUEST_NAMES.REQUEST_JOKES + page, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await response.json();
  return json.results;
};
