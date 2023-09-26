require('dotenv').config();
const _ = require('lodash');
const { createClient, schema, subscribe } = require('./pubSub');
const { handler, parser } = require('./events');
const { login, metadata } = require('./auth');
const config = require('./config.js');

async function main() {
  try {
    const loginResult = await login(
      config.get('sf.user_name'),
      config.get('sf.password')
    );

    const auth = metadata(loginResult);
    const client = createClient(config.get('sf.endpoint'), auth);

    const fetchRequest = {
      num_requested: 10,
      replay_preset: 1,
      topic_name: '/event/Notification__e',
    };

    const partialSchema = _.partial(schema, client);
    const partialHandler = _.partial(handler, partialSchema, parser);

    await subscribe(client, partialHandler, fetchRequest);
  } catch (e) {
    console.error(e);
  }
}

main();
