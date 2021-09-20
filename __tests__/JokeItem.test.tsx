import 'react-native';
import React from 'react';
import JokesItem from '../src/Components/JokeItem';

import renderer from 'react-test-renderer';
import {Joke} from '../src/types/Types';

const joke: Joke = {
  id: '1',
  joke: 'Test joke',
};

describe('Joke item test', () => {
  it('should render correctly', () => {
    // passing mock joke object as prop in JokeElement component.
    const {toJSON} = renderer.create(<JokesItem joke={joke} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
