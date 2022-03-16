import {PayloadAction} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {put, takeLatest} from 'redux-saga/effects';
import {IRestaurant} from '../../../interfaces/restaurant.interface';
import {apiService} from '../../../services';
import RestaurantReducer from './restaurant.reducer';

function* fetchRestaurant(action: PayloadAction<undefined>) {
  try {
    const restaurantId = Number(Config.RESTAURANT_ID);

    const restaurant: IRestaurant = yield apiService.restaurant.fetchRestaurant(
      restaurantId,
    );

    yield put(RestaurantReducer.actions.fetchRestaurantSuccess(restaurant));
  } catch (error) {
    console.log({error});
    yield put(
      RestaurantReducer.actions.fetchRestaurantError(
        'An error occured. Try again.',
      ),
    );
  }
}

const loginSaga = [
  takeLatest(RestaurantReducer.actions.fetchRestaurant, fetchRestaurant),
];

export default loginSaga;
