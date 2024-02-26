export const checkBinaryStringDifferences = (a: string, b: string): number => {
  let differences = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      differences++;
    }
  }
  return differences;
}
