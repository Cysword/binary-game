import { expect, test, describe } from "bun:test";
import { generateBinaryNumber } from "./generateBinaryNumber";

describe("generateBinaryNumber", () => {
  test("should generate a binary number of the specified length", () => {
    expect(generateBinaryNumber(5)).toHaveLength(5);
  });

  test("should generate a binary number with only 0s and 1s", () => {
    const binaryNumber = generateBinaryNumber(5);
    expect(binaryNumber).toMatch(/^[01]+$/);
  });
});
