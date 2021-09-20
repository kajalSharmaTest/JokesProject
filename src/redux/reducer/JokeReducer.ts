/* Reducer to handle communicate between UI and application state. */
import {IntialState, Action} from '../../types/Types';
import {REQUEST, SUCCESS, FAILURE, LOAD_MORE} from '../action/JokesAction';

export const JokeReducer = (
  state: IntialState,
  action: Action,
): IntialState => {
  switch (action.type) {
    case REQUEST:
      return {...state, loading: true};
    case SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: action.payload && state.jokes?.concat(action.payload),
        error: undefined,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong. Please try again later.',
      };
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      throw new Error();
  }
};
