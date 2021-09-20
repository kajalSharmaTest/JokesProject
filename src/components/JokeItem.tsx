/* eslint-disable react-native/no-color-literals */
/* Reusable Flat List element */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Joke} from '../types/Types';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFA500',
  },
  joke: {
    fontSize: 15,
  },
});

interface Props {
  joke: Joke;
}

const JokeItem = ({joke}: Props): JSX.Element => {
  return (
    <View style={styles.item}>
      <Text style={styles.joke}>{joke.joke}</Text>
    </View>
  );
};

export default JokeItem;
