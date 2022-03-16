import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {Restaurant} from '../../../interfaces/restaurant.interface';
import {apiService} from '../../../services';
import RestaurantReducer from './restaurant.reducer';

function* fetchRestaurant(action: PayloadAction<undefined>) {
  try {
    const restaurantId = 4072702673999819;

    const restaurant: Restaurant = yield apiService.restaurant.fetchRestaurant(
      restaurantId,
    );

    yield put(RestaurantReducer.actions.fetchRestaurantSuccess(restaurant));
  } catch (error) {
    yield put(
      RestaurantReducer.actions.fetchRestaurantError(
        'Oops, an error occured. Try again.',
      ),
    );
  }
}

const loginSaga = [
  takeLatest(RestaurantReducer.actions.fetchRestaurant, fetchRestaurant),
];

export default loginSaga;
