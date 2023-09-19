const schema = async (client, schemaId) => {
  const schemaRequest = {
    schema_id: schemaId,
  };

  return await client.getSchema(schemaRequest);
};

module.exports = schema;
