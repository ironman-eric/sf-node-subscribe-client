const schema = require('./schema');
const parser = require('../events/parser');

const subscribe = (client, fetchRequest) => {
  return new Promise((resolve, reject) => {
    const call = client.subscribe();
    call.write(fetchRequest);

    call.on('data', (data) => {
      const promises = data.events.map((evt) => {
        return schema(client, evt.event.schema_id).then((result) => {
          return parser(evt.event.payload, JSON.parse(result.schema_json));
        });
      });
      Promise.all(promises).then((results) => {
        console.log(`DATA: ${JSON.stringify(results)}`);
        resolve(results);
      });
    });
    call.on('status', (status) => {
      console.log(`STATUS: ${JSON.stringify(status)}`);
      resolve(status);
    });
    call.on('error', (error) => {
      console.log(`ERROR: ${error}`);
      reject(error);
    });
    call.on('end', (end) => {
      resolve(end);
    });
  });
};

module.exports = subscribe;
