interface Address {
  city: string;
  state: string;
  postal_code: string;
  street: string;
  formatted: string;
}

interface GeoLocation {
  lat: number;
  lon: number;
}

export interface Pricing {
  price: number;
  currency: string;
  priceString: string;
}

export interface MenuItems {
  name: string;
  description: string;
  price: number;
  pricing: Pricing[];
}

export interface MenuSections {
  section_name: string;
  description: string;
  menu_items: MenuItems[];
}

export interface RestaurantMenu {
  menu_name: string;
  menu_sections: MenuSections[];
}

export interface Restaurant {
  restaurant_name: string;
  restaurant_phone: string;
  restaurant_website: string;
  hours: string;
  price_range: string;
  restaurant_id: number;
  cuisines: string[];
  address: Address;
  geo: GeoLocation;
  menus: RestaurantMenu[];
  last_updated: Date;
}
