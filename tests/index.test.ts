import { mergeSortArray } from '../src/index';

describe('testing index file', () => {
  test('case 1: all value in collection 1 less than the values in collection 2', () => {
    expect(mergeSortArray([1,2,3,4,5], [6,7,8,9,10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('case 2: all value in collection 2 less than the values in collection 1', () => {
    expect(mergeSortArray([6,7,8,9,10], [1,2,3,4,5])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('case 3: some value in collection 1 less than the values in collection 2', () => {
    expect(mergeSortArray([1,7,8,9,10], [2,3,4,5,6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('case 4: some value in collection 2 less than the values in collection 1', () => {
    expect(mergeSortArray([2,3,4,5,6], [1,7,8,9,10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('case 5: shuffle and duplicate value in collection 1 and collection 2', () => {
    expect(mergeSortArray([1,1,7,8,10], [3,3,9,9,12])).toStrictEqual([1, 1, 3, 3, 7, 8, 9, 9, 10, 12]);
  });
  test('case 6: shuffle, duplicate and array length are not equal between collection 1 and collection 2.', () => {
    expect(mergeSortArray([1,1,7,8,10,20,33,66,99], [3,3,9,9,12,19])).toStrictEqual([1, 1, 3, 3, 7, 8, 9, 9, 10, 12, 19, 20, 33, 66, 99]);
  });
});