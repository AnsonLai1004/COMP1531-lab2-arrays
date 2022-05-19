/**
 * @see array for a different set of solutions
 * You do not need to understand most of the implementations in this
 * file (only the ones marked with README) prior to weeks 5.
 *
 */

function arraySum(array) {
  return array.reduce((s, e) => s + e, 0);
}

function arrayProduct(array) {
  return array.reduce((p, e) => p * e, 1);
}

function arrayMin(array) {
  return array.length ? Math.min(...array) : null;
}

function arrayMax(array) {
  return array.length ? Math.max(...array) : null;
}

// README
function arrayContains(array, integer) {
  return array.includes(integer);
}

// README
function arrayReversed(array) {
  return array.slice().reverse();
}

function arrayHead(array) {
  return array.length ? array[0] : null;
}

function arrayTail(array) {
  return array.length ? array.slice(1) : null;
}

function arraysMultiply(array1, array2) {
  const newArray = [];
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    const e1 = array1[i] !== undefined ? array1[i] : 1;
    const e2 = array2[i] !== undefined ? array2[i] : 1;
    newArray.push(e1 * e2);
  }
  return newArray;
}

function arraysCommon(array1, array2) {
  const copy2 = [...array2];
  return array1.filter(element => {
    const index = copy2.indexOf(element);
    if (index > -1) {
      copy2.splice(index, 1);
      return true;
    }
    return false;
  });
}
