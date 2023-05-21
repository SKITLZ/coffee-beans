import { sortMap, addColor } from '$lib/stores/CoffeeBeanStore';
import type { Coffee, Sort } from './types';
import type { FetchCoffeeResponse } from '$lib/api/models/coffee';

export const generateRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const getSorts = (notes: string): Sort[] => {
  const sortNames = notes.split(', ');
  const sorts: Sort[] = sortNames.map((name: string) => {
    if (sortMap[name]) {
      return {
        label: name,
        color: sortMap[name],
      };
    }
    return {
      label: name,
      color: addColor(name),
    };
  });
  return sorts;
};

export const prepareCoffee = (response: FetchCoffeeResponse, img?: Blob): Coffee => {
  const sorts = getSorts(response.notes);
  const { uid, blend_name: blendName, origin, variety, intensifier } = response;
  const coffee: Coffee = {
    uid,
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
