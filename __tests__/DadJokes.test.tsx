/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-native';
import DadJokes from '../src/screens/DadJokes';
import {IntialState, Joke} from '../src/types/Types';
import * as actions from '../src/redux/action/JokesAction';
import renderer from 'react-test-renderer';
import React from 'react';
import {act} from 'react-test-renderer';
import {FlatList} from 'react-native';

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

const successWithJokesListState: IntialState = {
  jokes: jokeList,
  page: 1,
  loading: false,
  error: undefined,
};

describe('DadJokes screen test', () => {
  let wrapper: any;
  let testInstance: any;

  // block of code to be executed before each test (render DadJokes with initial empty state, call useEffect to call api)
  beforeEach(() => {
    wrapper = renderer.create(<DadJokes />);
    testInstance = wrapper.root;
    const useReducer = jest.spyOn(React, 'useReducer');
    useReducer.mockImplementationOnce(callback => {
      const success = {
        type: actions.SUCCESS,
        payload: successWithJokesListState.jokes,
      };
      return callback(emptyJokeState, success);
    });
    const useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementationOnce(f => f());
  });

  it('should render correctly with success response of jokes list', async () => {
    // wait for response and update the component UI
    await act(() => new Promise(setImmediate));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly with with LoadMore', async () => {
    // wait for response and update the component UI
    await act(() => new Promise(setImmediate));
    // verify FlatList is visible in update UI
    expect(testInstance.findByType(FlatList).props.data).toBeTruthy();
    // trigger onEndReached() on flatlist which will call onLoadMore()
    act(() => {
      testInstance.findByType(FlatList).props.onEndReached();
    });
    // wait for response and update the component UI
    await act(() => new Promise(setImmediate));
    // verify update UI
    expect(wrapper).toMatchSnapshot();
  });
});
