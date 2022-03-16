import axios, {AxiosInstance} from 'axios';
import {
  IRestaurant,
  IRestaurantResponse,
} from '../../../interfaces/restaurant.interface';
import {getAxiosInstance} from '../utils';
import Config from 'react-native-config';

export default class RestaurantService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  async _init(): Promise<void> {
    this.axiosInstance = getAxiosInstance(Config.API_URL);
  }

  async fetchRestaurant(id: number): Promise<IRestaurant> {
    const response = await this.axiosInstance.get<IRestaurantResponse>(
      `/restaurant/${id}?key=${Config.API_KEY}`,
    );

    return response.data.result;
  }
}
