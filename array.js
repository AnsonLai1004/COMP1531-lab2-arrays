/**
 * Compute the sum of the integer array.
 * If the array is empty, the sum is 0.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the sum of the array
 */
function arraySum(array) {
  let sum = 0;
  for (i in array) {
    sum += array[i];
  }
  return sum;
}

/**
 * Compute the product of the given integer array.
 * If the array is empty, the product is 1.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the product of the array
 */
function arrayProduct(array) {
  let product = 1; 
  for (i in array) {
    product *= array[i];
  }
  return product;
}

/**
 * Find the smallest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the smallest number in the array, or
 * null if the array is empty
 */
function arrayMin(array) {
  let min = null;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      min = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

/**
 * Find the largest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the largest number in the array, or
 * null if the array is empty
 */
function arrayMax(array) {
  let max = null;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      max = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

/**
 * Determine if the array contains a particular element.
 *
 * @param {Array<number>} array of integers
 * @param {number} item integer to check
 * @returns {boolean} whether the integer item is in the given array
 */
function arrayContains(array, item) {
  // FIXME: true or false instead of null
  /*for (i in array) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;*/
  if (array.includes(item)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Create an array that is the reserved of the original.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>} a new reversed array
 */
function arrayReversed(array) {
  let reverse = [];
  for (let i = 0; i < array.length; i++) {
    reverse[array.length - 1 - i] = array[i];
  }
  return reverse;
}

/**
 * Returns the first element in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the first element in the array,
 * or null if the array is empty
 */
function arrayHead(array) {
  if (array[0] === undefined) {
    return null;
  }
  return array[0];
}

/**
 * Return all elements in the array after the head.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>} an array of elements excluding the head,
 * or null array is empty
 */
function arrayTail(array) {
  if (array.length === 0) {
    return null;
  }
  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail[i - 1] = array[i];
  }
  return tail;
}

/**
 * Given two arrays, multiply the elements at each index from arrays and store
 * the result in a third array. If the given two arrays differ in length,
 * excess elements of the larger array will be added on at the end.
 *
 * For example,
 *     [1, 3, 2]
 *   x [2, 4, 3, 5, 9]
 *   -----------------
 *   = [2, 12, 6, 5, 9]
 *
 * The result will be the same if array1 and array2 are swapped.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} array1 x array2 at each index
 */
function arraysMultiply(array1, array2) {
  let result = [];
  let length;
  let diff;
  if (array1.length > array2.length) {
    length = array1.length;
    result = [array1.length];
    diff = array1.length - array2.length;
    for (let i = length - diff; i < array1.length; i++) {
      result[i] = array1[i];      
    }
  } else if (array1.length < array2.length) {
    length = array2.length;
    result = [array2.length];
    diff = array2.length - array1.length;
    for (let i = length - diff; i < array2.length; i++) {
      result[i] = array2[i];
    }
  } else {
    length = array1.length;
    diff = 0;
  }

  for (let i = 0; i < length - diff; i++) {
    result[i] = array1[i] * array2[i];
  }
  return result;
}


/**
 * Create a third array containing common elements between two arrays.
 *
 * Each element in the first array can map to at most one element
 * in the second array. Duplicated elements in each array are
 * treated as separate entities.
 *
 * The order is determined by the first array.
 *
 * A few examples,
 *   arraysCommon([1,1], [1,1,1]) gives [1,1]
 *   arraysCommon([1,1,1], [1,1]) gives [1,1]
 *   arraysCommon([1,2,3,2,1], [5,4,3,2,1]) gives [1,2,3]
 *   arraysCommon([1,2,3,2,1], [2,2,3,3,4]) gives [2,3,2]
 *   arraysCommon([1,4,1,1,5,9,2,7], [1,8,2,5,1]) gives [1,1,5,2]
 *
 * WARNING: a reminder that the original array(s) must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} number of common elements between two arrays
 */
function arraysCommon(array1, array2) {
  let arrA = array1;
  let arrB = array2;
  let result = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        result.push(arrA[i]);
        arrB[j] = null;
        break;
      }
    }
  }
  return result;
}

// ========================================================================= //

/**
 * Some test code
 */
//arraySum
console.assert(arraySum([1, 2, 3, 4]) === 10, 'arraySum([1,2,3,4]) === 10');
console.assert(arraySum([]) === 0, 'arraySum([]) === 0');
//arrayProduct
console.assert(arrayProduct([1, 2, 3, 4]) === 24, 'arrayProduct([1,2,3,4]) === 24');
console.assert(arrayProduct([]) === 1, 'arrayProduct([]) === 1');
//arrayMin
console.assert(arrayMin([1, 2, 3, 4]) === 1, 'arrayMin([1,2,3,4]) === 1');
console.assert(arrayMin([110,90,70,20,50]) === 20, 'arrayMin([110,90,70,20,50]) === 20');
console.assert(arrayMin([]) === null, 'arrayMin([]) === null');
//arrayMax
console.assert(arrayMax([1, 2, 3, 4]) === 4, 'arrayMax([1,2,3,4]) === 4');
console.assert(arrayMax([]) === null, 'arrayMax([]) === null');
//arrayContains
console.assert(arrayContains([2,2,3,3,4], 2) === true, 'arrayContains([2,2,3,3,4], 2) === true');
console.assert(arrayContains([2,2,3,3,4], 80) === false, 'arrayContains([2,2,3,3,4], 80) === false');
console.assert(arrayContains([], 2) === false, 'arrayContains([], 2) === false');
//arrayReversed
console.log();
console.log('Testing : arrayReversed([1,2,3,4])');
console.log('Received:', arrayReversed([1,2,3,4]));
console.log('Expected: [ 4, 3, 2, 1 ]');
console.log();
console.log('Testing : arrayReversed([])');
console.log('Received:', arrayReversed([]));
console.log('Expected: []');
console.log('----------------------------------------');
//arrayHead
console.assert(arrayHead([1,2,3,4]) === 1, 'arrayHead([1,2,3,4]) === 1');
console.assert(arrayHead([]) === null, 'arrayHead([]) === null');
//arrayTail
console.log();
console.log('Testing : arrayTail([1,2,3,4])');
console.log('Received:', arrayTail([1,2,3,4]));
console.log('Expected: [ 2, 3, 4 ]');
console.log();
console.log('Testing : arrayTail([])');
console.log('Received:', arrayTail([]));
console.log('Expected: null');
console.log('----------------------------------------');
//arraysMultiply
console.log();
console.log('Testing : arraysMultiply([1,3,2], [2,4,3,5,9])');
console.log('Received:', arraysMultiply([1,3,2], [2,4,3,5,9]));
console.log('Expected: [ 2, 12, 6, 5, 9 ]');
console.log();
console.log('Testing : arraysMultiply([2,4,3,5,9], [1,3,2])');
console.log('Received:', arraysMultiply([2,4,3,5,9], [1,3,2]));
console.log('Expected: [ 2, 12, 6, 5, 9 ]');
console.log();
console.log('Testing : arraysMultiply([1,3,2], [1,3,2])');
console.log('Received:', arraysMultiply([1,3,2], [1,3,2]));
console.log('Expected: [ 1, 9, 4 ]');
console.log('----------------------------------------');

/**
 * NOTE: you can't directly compare two arrays with `===`, so you may need
 * to come up with your own way of testing arrays this week. For example, you
 * could use console.log() and observe the output manually.
 */
//arrayCommon
console.log();
console.log('Testing : arrayCommon([], [2,2,3,3,4])');
console.log('Received:', arraysCommon([1,2,3,2,1], [2,2,3,3,4]));
console.log('Expected: [2,3,2 ]');
console.log();
console.log('Testing : arrayCommon([], [2,2,3,3,4])');
console.log('Received:', arraysCommon([], [2,2,3,3,4]));
console.log('Expected: []');
console.log();
console.log('Testing : arrayCommon([60, 50, 1, 2, 3], [2,2,3,3,4, 50, 60])');
console.log('Received:', arraysCommon([60, 50, 1, 2, 3], [2,2,3,3,4, 50, 60]));
console.log('Expected: [ 60, 50, 2, 3 ]');
console.log();

// TODO: your own testing/debugging here
// try .includes