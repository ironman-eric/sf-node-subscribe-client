const handler = require('../handler.js');

describe('handler', () => {
  it('should handle event data', async () => {
    // ARRANGE
    const assert = [{}];
    const mockEvents = {
      events: [
        {
          event: {
            schema_id: 1,
            payload: {
              data: [1],
            },
          },
        },
      ],
    };

    const schemaMock = jest.fn(() =>
      Promise.resolve({ schema_json: JSON.stringify({}) })
    );
    const parserMock = jest.fn(() => ({}));

    // ACT
    const result = await handler(schemaMock, parserMock, mockEvents);

    // ASSERT
    expect(result).toEqual(assert);
    expect(schemaMock).toHaveBeenCalledTimes(1);
    expect(parserMock).toHaveBeenCalledTimes(1);
  });
});
