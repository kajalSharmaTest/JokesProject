/* eslint-disable react-native/no-color-literals */
import React, {useEffect, useReducer} from 'react';
import {JokeReducer} from '../redux/reducer/JokeReducer';
import {IntialState, Joke} from '../types/Types';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_MORE,
} from '../redux/action/JokesAction';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import JokeItem from '../components/JokeItem';
import {fetchJokes} from '../service/JokeService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // vertical allignment
    justifyContent: 'center', // horizontal alignment because flex-direction is row
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  message: {
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const initialState: IntialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: false,
  error: undefined,
};

const DadJokes = (): JSX.Element => {
  const [state, dispatch] = useReducer(JokeReducer, initialState);

  const getJokes = async (): Promise<void> => {
    try {
      dispatch({type: REQUEST});
      const response = await fetchJokes(state.page);
      dispatch({type: SUCCESS, payload: response});
    } catch (error) {
      dispatch({type: FAILURE});
    }
  };

  useEffect(() => {
    getJokes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page]);

  const loadMoreJokes = (): void => {
    if (!state.loading) {
      dispatch({type: LOAD_MORE});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {state.error && <Text style={styles.message}>{state.error}</Text>}
      {state.loading && (
        <View style={styles.loader}>
          <ActivityIndicator color="orange" />
        </View>
      )}
      <FlatList<Joke>
        testID="flat-list"
        data={state.jokes}
        keyExtractor={({id}, index) => id + index}
        renderItem={({item}) => <JokeItem joke={item} />}
        onEndReachedThreshold={0}
        onEndReached={() => loadMoreJokes()}
      />
    </SafeAreaView>
  );
};

export default DadJokes;
