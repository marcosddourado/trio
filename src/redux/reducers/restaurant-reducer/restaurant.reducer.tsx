import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Restaurant} from '../../../interfaces/restaurant.interface';

interface RestaurantState {
  isRestaurantLoading?: boolean;
  restaurant?: Restaurant;
  restaurantError?: string;
}
const initialState: RestaurantState = {};

const RestaurantReducer = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    fetchRestaurant: state => {
      return {
        ...state,
        isRestaurantLoading: true,
        restaurant: undefined,
        restaurantError: undefined,
      };
    },
    fetchRestaurantSuccess: (state, action: PayloadAction<Restaurant>) => {
      const restaurant = action.payload;

      return {
        ...state,
        isRestaurantLoading: false,
        restaurant: restaurant,
      };
    },
    fetchRestaurantError: (state, action: PayloadAction<string>) => {
      const error = action.payload;

      return {
        ...state,
        isRestaurantLoading: false,
        restaurantError: error,
      };
    },
  },
});

export default RestaurantReducer;
