import { expect, test, describe } from "bun:test";
import { binaryStringToNumber } from "./binaryStringToNumber";

describe("binaryStringToNumber", () => {
  test("should convert a binary string to a number", () => {
    expect(binaryStringToNumber("1")).toBe(1);
    expect(binaryStringToNumber("01")).toBe(2);
    expect(binaryStringToNumber("11")).toBe(3);
    expect(binaryStringToNumber("101")).toBe(5);
    expect(binaryStringToNumber("111")).toBe(7);
    expect(binaryStringToNumber("1001")).toBe(9);
  });
});
