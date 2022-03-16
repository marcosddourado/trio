import axios, {AxiosInstance} from 'axios';
import {
  Restaurant,
  RestaurantResponse,
} from '../../../interfaces/restaurant.interface';
import {getAxiosInstance} from '../utils';

export default class RestaurantService {
  private axiosInstance: AxiosInstance;

  private API_KEY = 'dcab75f42cc260062b3cdf84c62d2a2a';

  constructor() {
    this.axiosInstance = axios.create();
  }

  async _init(): Promise<void> {
    const baseUrl = 'https://api.documenu.com/v2';
    this.axiosInstance = getAxiosInstance(baseUrl);
  }

  async fetchRestaurant(id: number): Promise<Restaurant> {
    const response = await this.axiosInstance.get<RestaurantResponse>(
      `/restaurant/${id}?key=${this.API_KEY}`,
    );

    return response.data.result;
  }
}
