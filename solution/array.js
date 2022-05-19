/**
 * @see array.alternate for a different set of solutions
 */

function arraySum(array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return sum;
}

function arrayProduct(array) {
  let product = 1;
  for (const element of array) {
    product *= element;
  }
  return product;
}

function arrayMin(array) {
  if (array.length === 0) {
    return null;
  }
  let min = Infinity;
  for (const element of array) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}

function arrayMax(array) {
  if (array.length === 0) {
    return null;
  }
  let max = -Infinity;
  for (const element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

// Please look at array.alternate solution for this function.
function arrayContains(array, integer) {
  for (const element of array) {
    if (element === integer) {
      return true;
    }
  }
  return false;
}

// Please look at array.alternate solution for this function.
function arrayReversed(array) {
  const copy = [...array];
  for (let i = 0; i < array.length / 2; i++) {
    const temp = copy[i];
    copy[i] = copy[array.length - 1 - i];
    copy[array.length - 1 - i] = temp;
  }
  return copy;
}

function arrayHead(array) {
  if (array.length === 0) {
    return null;
  }
  return array[0];
}

function arrayTail(array) {
  if (array.length === 0) {
    return null;
  }
  return array.slice(1);
}

function arraysMultiply(array1, array2) {
  const newArray = [];
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    let e1 = array1[i];
    let e2 = array2[i];
    if (e1 === undefined) {
      e1 = 1;
    }
    if (e2 === undefined) {
      e2 = 1;
    }
    newArray.push(e1 * e2);
  }
  return newArray;
}

function arraysCommon(array1, array2) {
  const common = [];
  const copy2 = [...array2];
  for (const element of array1) {
    if (copy2.includes(element)) {
      const res = copy2.splice(copy2.indexOf(element), 1);
      common.push(res[0]);
    }
  }
  return common;
}