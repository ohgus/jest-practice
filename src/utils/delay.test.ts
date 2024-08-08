import delay from './delay';

describe('delay', () => {
  it('should delay function execution', (done) => {
    let result = true;

    delay(() => {
      result = false;
    }, 10);

    setTimeout(() => {
      expect(result).toBe(true);
    }, 5);

    setTimeout(() => {
      expect(result).toBe(false);
      done();
    }, 15);
  });

  it('should call with arguments', (done) => {
    const func = jest.fn();

    delay(func, 10, 'later', 42);

    setTimeout(() => {
      expect(func).toHaveBeenCalledWith('later', 42);
      done();
    }, 15);
  });

  it('should use default wait of 0', (done) => {
    let result = true;

    delay(() => {
      result = false;
    });

    expect(result).toBe(true);

    setTimeout(() => {
      expect(result).toBe(false);
      done();
    }, 0);
  });

  it('should cancel the timer', (done) => {
    let result = true;

    const timer = delay(() => {
      result = false;
    }, 20);

    clearTimeout(timer);

    expect(result).toBe(true);

    delay(() => {
      result = false;
    }, 40);

    setTimeout(() => {
      expect(result).toBe(false);
      done();
    }, 45);
  });
});
