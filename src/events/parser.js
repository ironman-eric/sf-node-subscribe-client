const avro = require('avsc');

const parser = (data, schema) => {
  const type = avro.Type.forSchema(schema);
  const value = type.fromBuffer(data);
  return JSON.parse(value);
};

module.exports = parser;
