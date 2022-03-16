import {select, SelectEffect} from 'redux-saga/effects';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {ReduxState} from './reducers';

export function selectState<T>(selector: (s: ReduxState) => T): SelectEffect {
  return select(selector);
}

export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
