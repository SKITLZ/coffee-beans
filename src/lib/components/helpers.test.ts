import { describe, it, expect } from 'vitest';
import { generateRandomColor, getSorts, prepareCoffee } from '$lib/components/helpers';
import { coffeeResponses } from './__mocks__/helpers';

const hexRegx = /^#[0-9a-f]{3,6}$/i;

describe('generateRandomColor', () => {
  it('generatex valid HEX color', () => {
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
    expect(hexRegx.test(generateRandomColor())).toBe(true);
  });
});

describe('prepareCoffee', () => {
  const coffeeArr = coffeeResponses.map((coffee) => prepareCoffee(coffee));

  it('correct structure', () => {
    coffeeArr.forEach((coffee, idx) => {
      const responseCoffee = coffeeResponses[idx];
      expect(coffee.uid === responseCoffee.uid).toBe(true);
      expect(coffee.blendName === responseCoffee['blend_name']).toBe(true);
      expect(coffee.origin === responseCoffee.origin).toBe(true);
      expect(coffee.variety === responseCoffee.variety).toBe(true);
      expect(coffee.intensifier === responseCoffee.intensifier).toBe(true);
      expect(coffee.sorts).toBeTruthy();
    });
  });

  it('correct sorts', () => {
    coffeeArr.forEach((coffee, idx) => {
      expect(coffee.sorts).toMatchObject(getSorts(coffeeResponses[idx].notes));
    });
  });
});
