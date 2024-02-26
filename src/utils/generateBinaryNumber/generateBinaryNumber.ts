export const generateBinaryNumber = (length: number): string => {
  let binaryNumber = '';
  for (let i = 0; i < length; i++) {
    binaryNumber += Math.floor(Math.random() * 2);
  }
  return binaryNumber;
}
