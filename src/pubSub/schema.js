const schema = (client, schemaId) => {
  return new Promise((resolve, reject) => {
    const schemaRequest = {
      schema_id: schemaId,
    };

    client
      .getSchema(schemaRequest)
      .then((value) => resolve(value))
      .catch((err) => reject(err));
  });
};

module.exports = schema;
