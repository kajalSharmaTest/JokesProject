export interface Joke {
  id: string;
  joke: string;
}
export interface IntialState {
  jokes?: Array<Joke>;
  page: number;
  loading: boolean;
  error?: string;
}
export interface Action {
  type: string;
  payload?: Array<Joke>;
}
