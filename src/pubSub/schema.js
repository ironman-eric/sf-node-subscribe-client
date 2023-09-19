const schema = (client, schemaId) => {
  return new Promise((resolve, reject) => {
    const schemaRequest = {
      schema_id: schemaId,
    };

    client.getSchema(schemaRequest, (error, value) => {
      if (error) reject(error);

      resolve(value);
    });
  });
};

module.exports = schema;
