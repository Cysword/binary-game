export const numberToBinaryString = (number: number, amountOfBits: number) => {
  return number.toString(2).padStart(amountOfBits, '0');
};
