const schema = require('../schema.js');

describe('schema', () => {
  it('should retrieve a schema', async () => {
    // ARRANGE
    const assert = 'schema';

    const mockClient = {
      getSchema: jest.fn((_event, cb) => cb(null, 'schema')),
    };

    // ACT
    const result = await schema(mockClient, 'schemaId');

    // ASSERT
    expect(result).toEqual(assert);
  });

  it('should fail when schema not found', async () => {
    // ARRANGE
    const assert = 'error';

    const mockClient = {
      getSchema: jest.fn((_event, cb) => cb('error')),
    };

    // ASSERT
    await expect(async () => {
      await schema(mockClient, 'schemaId');
    }).rejects.toEqual(assert);
  });
});
