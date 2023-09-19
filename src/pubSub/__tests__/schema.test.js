const schema = require('../schema.js');

describe('schema', () => {
  it('should retrieve a schema', async () => {
    // ARRANGE
    const assert = {
      schema_json: 'json',
      schema_id: 'id',
      rpc_id: 'rpc',
    };

    const mockClient = {
      getSchema: jest.fn(() => Promise.resolve(assert)),
    };

    // ACT
    const result = await schema(mockClient);

    // ASSERT
    expect(result).toEqual(assert);
  });
});
