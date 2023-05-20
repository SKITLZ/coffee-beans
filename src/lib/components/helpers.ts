import { sortMap, addColor } from '$lib/stores/CoffeeBeanStore';
import type { Coffee, SortMap, Sort } from './types';
import type { FetchCoffeeResponse } from '$lib/api/models/coffee';

let sortMapValues: SortMap = {};
sortMap.subscribe((value) => (sortMapValues = value));

export const generateRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const prepareCoffee = (response: FetchCoffeeResponse, img?: Blob): Coffee => {
  const sortNames = response.notes.split(', ');
  const sorts: Sort[] = sortNames.map((name: string) => {
    if (sortMapValues[name]) {
      return {
        label: name,
        color: sortMapValues[name],
      };
    }
    return {
      label: name,
      color: addColor(name),
    };
  });

  const { id, blend_name: blendName, origin, variety, intensifier } = response;
  const coffee: Coffee = {
    id,
    blendName,
    origin,
    variety,
    intensifier,
    sorts,
    img,
  };

  return coffee;
};

export const blobToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result as string);
  });
};
