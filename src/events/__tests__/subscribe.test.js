const subscribe = require('../subscribe.js');

describe('subscribe functionality', () => {
  test('receives a function and stores it', () => {
    expect(subscribe()).toEqual([]);
  });
});
