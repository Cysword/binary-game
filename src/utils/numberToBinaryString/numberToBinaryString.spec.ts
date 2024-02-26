import {numberToBinaryString} from './numberToBinaryString';
import { expect, test, describe } from "bun:test";

describe('numberToBinaryString', () => {
  test('should return a binary string of the given number', () => {
    expect(numberToBinaryString(5, 8)).toBe('00000101');
    expect(numberToBinaryString(5, 4)).toBe('0101');
    expect(numberToBinaryString(5, 2)).toBe('101');
  });
});
