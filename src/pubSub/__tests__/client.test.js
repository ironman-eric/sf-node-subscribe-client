const createClient = require('../client.js');

describe('client', () => {
  it('should return a client', async () => {
    expect(createClient).toEqual(expect.any(Function));
  });
});
