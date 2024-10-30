const mut = require('./module.js');

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing sum -- success', () => {
    const expected = -30;
    const got = mut.sum(-20, -10);
    expect(got).toBe(expected);
  });

test('Testing div -- success', () => {
    const expected = 40;
    const got = mut.div(400, 10);
    expect(got).toBe(expected);
  });

test('Testing div -- success', () => {
    const expected = 40;
    const got = mut.div(-400, -10);
    expect(got).toBe(expected);
  });

  test('Testing div -- success', () => {
    const expected = -40;
    const got = mut.div(400, -10);
    expect(got).toBe(expected);
  });


  test('Testing div -- success', () => {
    const expected = (3/5);
    const got = mut.div(3, 5);
    expect(got).toBe(expected);
  });
  test('Testing div -- success', () => {
    const expected = NaN;
    const got = mut.div(0, 0);
    expect(got).toBe(expected);
  });

  test('Testing div -- success', () => {
    const expected = Infinity;
    const got = mut.div(10, 0);
    expect(got).toBe(expected);
  });

  test('Testing containsNumber -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("hello");
    expect(got).toBe(expected);
  });

  test('Testing containsNumber -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("12345");
    expect(got).toBe(expected);
  });

  test('Testing containsNumber -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
  });

  test('Testing containsNumber -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("1zaaa");
    expect(got).toBe(expected);
  });

  test('Testing containsNumber -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("aaazzz2");
    expect(got).toBe(expected);
  });
  test('Testing containsNumber -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("aaa6aaa");
    expect(got).toBe(expected);
  });
