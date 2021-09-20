import {REQUEST_NAMES} from '../common/Requests';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchJokes = async (page = 1): Promise<any> => {
  const response = await fetch(REQUEST_NAMES.REQUEST_JOKES + page, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await response.json();
  return json.results;
};
