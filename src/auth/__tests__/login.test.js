const login = require('../login.js');

jest.mock('superagent');

describe('login', () => {
  it('should login with username and password', async () => {
    // ARRANGE
    const assert = 'token';
    const userName = 'user';
    const password = 'password';

    // ACT
    const result = await login(userName, password);

    // ASSERT
    expect(result).toEqual(assert);
  });
});
