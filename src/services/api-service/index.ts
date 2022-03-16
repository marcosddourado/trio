import RestaurantService from './restaurant/restaurant.service';

type ApiService = {
  restaurant: RestaurantService;
};

const apiService: ApiService = {
  restaurant: new RestaurantService(),
};

export const startApiService = async (): Promise<void> => {
  await apiService.restaurant._init();
};

export default apiService;
