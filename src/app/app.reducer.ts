import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset} from './app.actions';

export const initialState = 9;

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ++state),
    on(decrement, state => --state),
    on(reset, _ => initialState)
);
