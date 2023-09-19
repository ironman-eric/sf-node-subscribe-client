require('dotenv').config();
const { createClient, subscribe } = require('./pubSub');
const { login, metadata } = require('./auth');
const config = require('./config.js');

async function main() {
  try {
    const loginResult = await login(
      config.get('sf.user_name'),
      config.get('sf.password')
    );
    console.log(loginResult);
    const auth = metadata(loginResult);
    const client = createClient(config.get('sf.endpoint'), auth);

    const fetchRequest = {
      num_requested: 10,
      replay_preset: 1,
      topic_name: '/event/Notification__e',
    };

    await subscribe(client, fetchRequest);
  } catch (e) {
    console.error(e);
  }
}

main();
