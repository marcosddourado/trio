import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRestaurant} from '../../../interfaces/restaurant.interface';

interface RestaurantState {
  isRestaurantLoading?: boolean;
  restaurant?: IRestaurant;
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
    fetchRestaurantSuccess: (state, action: PayloadAction<IRestaurant>) => {
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
