/** Generating data */
type RandomDataType = "char" | "number" | "both";
type numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @param {number} qtd - number - The number of characters you want to generate.
 * @param {[numbers, numbers] | undefined} - Works only with RandomDataType (The min and max number you want to generate).
 */
type RandomDataQtd = { qtd: number; min?: number; max?: number, lowerCase?: boolean };
