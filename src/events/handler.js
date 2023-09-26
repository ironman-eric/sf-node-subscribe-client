const handler = async (schema, parser, events) => {
  const asyncRes = await Promise.all(
    events.events.map(async (event) => {
      const result = await schema(event.event.schema_id);
      return parser(event.event.payload, JSON.parse(result.schema_json));
    })
  );

  return asyncRes;
};

module.exports = handler;
