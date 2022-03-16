interface IAddress {
  city: string;
  state: string;
  postal_code: string;
  street: string;
  formatted: string;
}

interface IGeoLocation {
  lat: number;
  lon: number;
}

export interface IPricing {
  price: number;
  currency: string;
  priceString: string;
}

export interface IMenuItem {
  name: string;
  description: string;
  price: number;
  pricing: IPricing[];
}

export interface IMenuSection {
  section_name: string;
  description: string;
  menu_items: IMenuItem[];
}

export interface IRestaurantMenu {
  menu_name: string;
  menu_sections: IMenuSection[];
}

export interface IRestaurant {
  restaurant_name: string;
  restaurant_phone: string;
  restaurant_website: string;
  hours: string;
  price_range: string;
  restaurant_id: number;
  cuisines: string[];
  address: IAddress;
  geo: IGeoLocation;
  menus: IRestaurantMenu[];
  last_updated: Date;
}

export interface IRestaurantResponse {
  result: IRestaurant;
}
