import {combineReducers} from 'redux';
import {all, AllEffect, ForkEffect} from 'redux-saga/effects';
import RestaurantReducer from './restaurant-reducer/restaurant.reducer';
import restaurantSaga from './restaurant-reducer/restaurant.saga';

export const Reducers = combineReducers({
  restaurant: RestaurantReducer.reducer,
});

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([...restaurantSaga]);
}

export type ReduxState = ReturnType<typeof Reducers>;
