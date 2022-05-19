const rewire = require('rewire');
const process = require('process');
const a = rewire(process.cwd() + '/array');
const arraySum = a.__get__('arraySum');
const arrayProduct = a.__get__('arrayProduct');
const arrayMin = a.__get__('arrayMin');
const arrayMax = a.__get__('arrayMax');
const arrayReversed = a.__get__('arrayReversed');
const arrayContains = a.__get__('arrayContains');
const arrayHead = a.__get__('arrayHead');
const arrayTail = a.__get__('arrayTail');
const arraysMultiply = a.__get__('arraysMultiply');
const arraysCommon = a.__get__('arraysCommon');

describe("test 'array' functions", () => {
  test.each([
    { testName: 'empty', array: [], element: 0, expected: false },
    { testName: 'one element success', array: [1], element: 1, expected: true },
    { testName: 'one element fails', array: [1], element: 2, expected: false },
    { testName: 'multiple elements success', array: [1, 2, 3], element: 2, expected: true },
    { testName: 'multiple element fails', array: [1, 2, 3], element: 4, expected: false },
  ])('arrayContains $testName', ({ array, element, expected }) => {
    expect(arrayContains([...array], element)).toBe(expected);
  });

  describe('empty case for', () => {
    const array = [];
    test.each([
      { f: arraySum, expected: 0 },
      { f: arrayProduct, expected: 1 },
      { f: arrayMin, expected: null },
      { f: arrayMax, expected: null },
      { f: arrayReversed, expected: [] },
      { f: arrayHead, expected: null },
      { f: arrayTail, expected: null },
    ])('$f.name: $expected', ({ f, expected }) => {
      expect(f([...array])).toEqual(expected);
    });
  });

  describe('one element for', () => {
    const array = [5];
    test.each([
      { f: arraySum, expected: 5 },
      { f: arrayProduct, expected: 5 },
      { f: arrayMin, expected: 5 },
      { f: arrayMax, expected: 5 },
      { f: arrayReversed, expected: [5] },
      { f: arrayHead, expected: 5 },
      { f: arrayTail, expected: [] },
    ])('$f.name: $expected', ({ f, expected }) => {
      expect(f([...array])).toEqual(expected);
    });
  });

  describe('multiple elements for', () => {
    const array = [-2, -3, -1, 1, 2, 3, 5, 4];
    const testList = [
      { f: arraySum, expected: 9 },
      { f: arrayProduct, expected: -720 },
      { f: arrayMin, expected: -3 },
      { f: arrayMax, expected: 5 },
      { f: arrayReversed, expected: [4, 5, 3, 2, 1, -1, -3, -2] },
      { f: arrayHead, expected: -2 },
      { f: arrayTail, expected: [-3, -1, 1, 2, 3, 5, 4] },
    ];
    test.each(testList)('$f.name: $expected', ({ f, expected }) => {
      expect(f([...array])).toEqual(expected);
    });

    test('arrayReverse simple odd and even number of elements', () => {
      expect(arrayReversed([1, 2])).toEqual([2, 1]);
      expect(arrayReversed([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('arrayReverse and does not modify the original array', () => {
      const copy = [...array];
      arrayReversed(array);
      expect(copy).toEqual(array);
    });
  });
});

describe("test 'arrays' functions", () => {
  test.each([
    { f: arraysMultiply },
    { f: arraysCommon },
  ])('$f.name does not modify original arrays', ({ f }) => {
    const [array1, array2] = [[0, 1, 2, 3], [1, 2, 3, 4]];
    const [copy1, copy2] = [[...array1], [...array2]];
    f(copy1, copy2);
    expect(copy1).toEqual(array1);
    expect(copy2).toEqual(array2);
  });

  describe('arraysMultiply', () => {
    describe('same length', () => {
      test.each([
        { testName: 'empty', array1: [], array2: [], expected: [] },
        { testName: 'one elem', array1: [2], array2: [5], expected: [10] },
        { testName: 'two elem', array1: [2, 3], array2: [4, 5], expected: [8, 15] },
        { testName: 'multiple', array1: [-2, -5, 0, 5, 2], array2: [-3, 2, 1, 2, -3], expected: [6, -10, 0, 10, -6] },
      ])('$testName, $array1, $array2 - $expected', ({ array1, array2, expected }) => {
        expect(arraysMultiply(array1, array2)).toEqual(expected);
      });
    });

    describe('varying length', () => {
      test.each([
        { testName: 'first empty, second not empty', array1: [], array2: [0, 1], expected: [0, 1] },
        { testName: 'first not empty, second empty', array1: [2, 3], array2: [], expected: [2, 3] },
        { testName: 'first.length > second.length', array1: [2, 3, 4, 5], array2: [5, 2], expected: [10, 6, 4, 5] },
        { testName: 'first.length < second.length', array1: [5, 2], array2: [2, 3, 4, 5], expected: [10, 6, 4, 5] },
      ])('$testName, $array1, $array2 - $expected', ({ array1, array2, expected }) => {
        expect(arraysMultiply(array1, array2)).toEqual(expected);
      });
    });
  });

  describe('arraysCommon', () => {
    describe('no commons', () => {
      test.each([
        { array1: [], array2: [], expected: [] },
        { array1: [2], array2: [5], expected: [] },
        { array1: [2, 3], array2: [4, 5, 1, 7], expected: [] },
        { array1: [2, 3, 3], array2: [4, 4, 5], expected: [] },
      ])('common of $array1 and $array2: $expected', ({ array1, array2, expected }) => {
        expect(arraysCommon(array1, array2)).toEqual(expected);
      });
    });

    describe('commons with no duplicates', () => {
      test.each([
        { array1: [1], array2: [1], expected: [1] },
        { array1: [2, 3], array2: [3, 4], expected: [3] },
        { array1: [3, 2], array2: [2, 3], expected: [3, 2] },
        { array1: [5, 9, 2, 4, 6], array2: [6, 2, 8, 5, 1], expected: [5, 2, 6] },
      ])('common of $array1 and $array2: $expected', ({ array1, array2, expected }) => {
        expect(arraysCommon(array1, array2)).toEqual(expected);
      });
    });

    describe('commons with duplicates', () => {
      test.each([
        { array1: [1, 1], array2: [1, 1], expected: [1, 1] },
        { array1: [1, 1], array2: [1, 1, 1], expected: [1, 1] },
        { array1: [1, 1, 1], array2: [1, 1], expected: [1, 1] },
        { array1: [4, 5, 9, 2, 4, 4, 6], array2: [6, 2, 8, 5, 4, 1, 4], expected: [4, 5, 2, 4, 6] },
      ])('common of $array1 and $array2: $expected', ({ array1, array2, expected }) => {
        expect(arraysCommon(array1, array2)).toEqual(expected);
      });
    });
  });
});
