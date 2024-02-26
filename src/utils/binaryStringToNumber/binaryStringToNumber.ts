export const binaryStringToNumber = (binaryString: string): number => {
  const binaryArray = binaryString.split('');
  let number = 0;

  binaryArray.forEach((binaryDigit, index) => {
    const binaryValue = Math.pow(2, index);
    number += parseInt(binaryDigit) * binaryValue;
  });

  return number;
}
