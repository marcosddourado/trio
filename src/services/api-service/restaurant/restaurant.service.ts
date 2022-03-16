import axios, {AxiosInstance} from 'axios';
import {Restaurant} from '../../../interfaces/restaurant.interface';
import {getAxiosInstance} from '../utils';

export default class RestaurantService {
  private axiosInstance: AxiosInstance;

  private API_KEY = 'dcab75f42cc260062b3cdf84c62d2a2a';

  constructor() {
    this.axiosInstance = axios.create();
  }

  async _init() {
    const baseUrl = 'https://api.documenu.com/v2';
    this.axiosInstance = getAxiosInstance(baseUrl);
  }

  async fetchRestaurant(id: number) {
    const response = await this.axiosInstance.get<{result: Restaurant}>(
      `/restaurant/${id}?key=${this.API_KEY}`,
    );

    return response.data.result;
  }
}
