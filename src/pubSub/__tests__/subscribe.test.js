const subscribe = require('../subscribe.js');

describe('subscribe', () => {
  it('should return data', async () => {
    // ARRANGE
    const assert = [];

    const mockEvents = {
      on: jest.fn(),
      write: jest.fn(),
    };

    const mockClient = {
      subscribe: jest.fn(() => mockEvents),
    };

    mockEvents.on.mockImplementation((event, cb) => {
      if (event === 'data') {
        cb([]);
      }
    });

    // ACT
    const result = await subscribe(mockClient);

    // ASSERT
    expect(result).toEqual(assert);
    expect(mockEvents.on).toHaveBeenCalledWith('data', expect.any(Function));
    expect(mockEvents.on).not.toHaveBeenCalledWith('status');
    expect(mockEvents.on).not.toHaveBeenCalledWith('end');
  });

  it('should return status', async () => {
    // ARRANGE
    const assert = 'status';

    const mockEvents = {
      on: jest.fn(),
      write: jest.fn(),
    };

    const mockClient = {
      subscribe: jest.fn(() => mockEvents),
    };

    mockEvents.on.mockImplementation((event, cb) => {
      if (event === 'status') {
        cb('status');
      }
    });

    // ACT
    const result = await subscribe(mockClient);

    // ASSERT
    expect(result).toEqual(assert);
    expect(mockEvents.on).toHaveBeenCalledWith('status', expect.any(Function));
    expect(mockEvents.on).not.toHaveBeenCalledWith('data');
    expect(mockEvents.on).not.toHaveBeenCalledWith('end');
  });

  it('should return error', async () => {
    // ARRANGE
    const mockEvents = {
      on: jest.fn(),
      write: jest.fn(),
    };

    const mockClient = {
      subscribe: jest.fn(() => mockEvents),
    };

    mockEvents.on.mockImplementation((event, cb) => {
      if (event === 'error') {
        cb('error');
      }
    });

    // ACT
    await subscribe(mockClient).catch((e) => {
      expect(e).toEqual('error');
    });
  });
});
