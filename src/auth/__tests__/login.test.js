const login = require('../login.js');

describe('login', () => {
  it('should login with username and password', () => {
    // ARRANGE
    const assert = "token";
    const userName = "user";
    const password = "password";

    // ACT
    const result = login(userName, password);

    // ASSERT
    expect(result).toEqual(assert);
  }); 
});
