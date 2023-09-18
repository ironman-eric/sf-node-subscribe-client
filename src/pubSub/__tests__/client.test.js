const createClient = require('../client.js');

describe('client', () => {
  it('should return a client', () => {
    expect(createClient('target')).toEqual(expect.any(Object));
  });
});
