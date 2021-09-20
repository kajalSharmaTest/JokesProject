import * as actions from '../src/redux/action/JokesAction';
import expect from 'expect';
import {JokeReducer} from '../src/redux/reducer/JokeReducer';
import {IntialState, Joke} from '../src/types/Types';

const jokeList: Joke[] = [
  {id: '1', joke: 'Test joke 1'},
  {id: '2', joke: 'Test joke 2'},
  {id: '3', joke: 'Test joke 3'},
];

const emptyJokeState: IntialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: false,
  error: undefined,
};

const requestJokeState: IntialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: true,
  error: undefined,
};

const successWithJokesListState: IntialState = {
  jokes: jokeList,
  page: 1,
  loading: false,
  error: undefined,
};
const failureState: IntialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: false,
  error: 'Something went wrong. Please try again later.',
};

const loadMoreState: IntialState = {
  jokes: [] as Joke[],
  page: 2,
  loading: false,
  error: undefined,
};

describe('post reducer', () => {
  it('should handle REQUEST', () => {
    const request = {
      type: actions.REQUEST,
    };
    // it's empty because it's just starting to fetch posts
    expect(JokeReducer(requestJokeState, request)).toEqual(requestJokeState);
  });

  it('should handle SUCCESS', () => {
    const success = {
      type: actions.SUCCESS,
      payload: successWithJokesListState.jokes, // success response paylod with list of jokes;
    };
    expect(JokeReducer(emptyJokeState, success)).toEqual(
      successWithJokesListState,
    );
  });

  it('should handle FAILURE', () => {
    const failure = {
      type: actions.FAILURE,
      payload: failureState.jokes, // fail response paylod with error message;
    };
    expect(JokeReducer(emptyJokeState, failure)).toEqual(failureState);
  });
  it('should handle LOAD_MORE', () => {
    const load_more = {
      type: actions.LOAD_MORE, // load more action will automatically increment page count to 1 which will lead to api call with updtaed page number.
    };
    expect(JokeReducer(emptyJokeState, load_more)).toEqual(loadMoreState);
  });
});
