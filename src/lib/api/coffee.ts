import { get } from './core';
import type { FetchCoffeeResponse } from './models/coffee';

export const fetchCoffee = (): Promise<FetchCoffeeResponse> => {
  return get('https://random-data-api.com/api/coffee/random_coffee');
};

export const fetchImg = async (): Promise<Blob> => {
  const res = (await fetch('https://loremflickr.com/500/500/coffeebean')).blob();
  return res;
};
