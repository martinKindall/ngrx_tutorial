import {Action, createReducer, on, State} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, props) => {
    console.log(props.message);
    return state + 1;
  }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: number, action: Action): number {
  return _counterReducer(state, action);
}
