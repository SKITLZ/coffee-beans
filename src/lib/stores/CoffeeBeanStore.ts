import { writable } from 'svelte/store';
import { generateRandomColor } from '$lib/components/helpers';
import type { SortMap } from '$lib/components/types';

export let sortMap: SortMap = {};
export const sortMapWritable = writable<SortMap>({});
sortMapWritable.subscribe((value) => (sortMap = value));

export const addColor = (color: string): string => {
  const newColor = generateRandomColor();
  sortMapWritable.update((prev: SortMap) => ({
    ...prev,
    [color]: newColor,
  }));
  return newColor;
};
