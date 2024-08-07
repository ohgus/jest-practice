import shuffle from './shuffle';

describe('shuffle', () => {
  const array = [1, 2, 3, 4];

  it('should have the same length', () => {
    expect(shuffle(array)).toHaveLength(array.length);
  });

  it('should not be equal to the original array', () => {
    expect(shuffle(array)).not.toEqual(array);
  });

  it('should not include 5 in new array', () => {
    expect(shuffle(array)).not.toContain(5);
  });

  it('should contain the same elements after shuffling', () => {
    expect(shuffle(array).sort()).toEqual(array);
  });

  it('should return an empty array if the input is empty', () => {
    expect(shuffle([])).toEqual([]);
  });
});
