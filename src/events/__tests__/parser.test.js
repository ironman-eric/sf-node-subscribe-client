const avro = require('avsc');
const parser = require('../parser.js');

describe('parser', () => {
  it('should parser an event', () => {
    // ARRANGE
    const assert = { name: 'Notification' };
    const schema = {
      type: 'record',
      name: 'Event',
      fields: [{ name: 'name', type: 'string' }],
    };
    const type = avro.Type.forSchema(schema);
    const data = { name: 'Notification' };

    // ACT
    const result = parser(type.toBuffer(data), schema);

    // ASSERT
    expect(result).toEqual(assert);
  });
});
