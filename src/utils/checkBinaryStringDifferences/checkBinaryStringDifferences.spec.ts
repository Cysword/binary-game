import { expect, test, describe } from "bun:test";
import {checkBinaryStringDifferences} from './checkBinaryStringDifferences';

describe('checkBinaryStringDifferences', () => {
  test('should return 0 for identical strings', () => {
    expect(checkBinaryStringDifferences('0000', '0000')).toBe(0);
  });

  test('should return 4 for completely different strings', () => {
    expect(checkBinaryStringDifferences('0000', '1111')).toBe(4);
  });

  test('should return 2 for two different strings', () => {
    expect(checkBinaryStringDifferences('0000', '0011')).toBe(2);
  });
});
