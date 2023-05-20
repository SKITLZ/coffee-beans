import { writable } from 'svelte/store';
import { generateRandomColor } from '$lib/components/helpers';
import type { SortMap } from '$lib/components/types';

export const sortMap = writable<SortMap>({});

export const addColor = (color: string): string => {
  const newColor = generateRandomColor();
  sortMap.update((prev: SortMap) => ({
    ...prev,
    [color]: newColor,
  }));
  return newColor;
};
