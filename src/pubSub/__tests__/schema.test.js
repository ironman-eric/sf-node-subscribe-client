const schema = require('../schema.js');

describe('schema', () => {
  it('should retrieve a schema', async () => {
    // ARRANGE
    const assert = 'schema';

    const mockClient = {
      getSchema: jest.fn(() => Promise.resolve('schema')),
    };

    // ACT
    const result = await schema(mockClient, 'schemaId');

    // ASSERT
    expect(result).toEqual(assert);
  });
});
