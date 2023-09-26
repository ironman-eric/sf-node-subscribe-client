const schema = (client, schemaId) => {
  return new Promise((resolve, reject) => {
    const schemaRequest = {
      schema_id: schemaId,
    };

    client.getSchema(schemaRequest, (schemaError, res) => {
      if (schemaError) {
        reject(schemaError);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = schema;
