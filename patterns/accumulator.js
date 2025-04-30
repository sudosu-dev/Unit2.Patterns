/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  let product = 1;

  if (typeof n !== "number") {
    return NaN;
  } else if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  const array = [];
  if (typeof n !== "number") {
    return null;
  } else if (n <= 0) {
    return [];
  }
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  if (strings.length === 0) {
    return "";
  }
  return strings.reduce((accumulator, current) => {
    if (current.length > accumulator.length) {
      return current;
    } else {
      return accumulator;
    }
  }, "");
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  // const present = [];

  if (attendance.length === 0) {
    return 0;
  }

  const present = attendance.filter((value) => value === true);
  return present.length;
}
/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO

  if (typeof dna != "string") {
    return null;
  } else if (dna === "") {
    return "";
  }
  const arrayDNA = dna.split("");

  const compDNA = arrayDNA.map((x) => {
    if (x === "A") {
      return "T";
    } else if (x === "T") {
      return "A";
    } else if (x === "C") {
      return "G";
    } else if (x === "G") {
      return "C";
    }
  });
  return compDNA.join("");
}
