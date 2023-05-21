import { describe, it, expect } from 'vitest';
import { sortMapWritable, addColor } from '$lib/stores/CoffeeBeanStore';
import type { SortMap } from '$lib/components/types';
import { colorsToAdd } from './__mocks__/CoffeeBeanStore';

const hexRegx = /^#[0-9a-f]{3,6}$/i;

let sortMap: SortMap = {};
sortMapWritable.subscribe((value) => (sortMap = value));

describe('CoffeeBeanStore', () => {
  it('adds hex colors', () => {
    colorsToAdd.forEach((color) => {
      addColor(color);
      expect(hexRegx.test(sortMap[color])).toBe(true);
    });
  });
});
