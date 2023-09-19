const convict = require('convict');

convict.addFormat(require('convict-format-with-validator').ipaddress);

// Define a schema
const config = convict({
  sf: {
    endpoint: {
      doc: 'Salesforce grpc endpoint',
      format: '*',
      default: 'api.pubsub.salesforce.com:7443',
      env: 'SF_ENDPOINT',
    },
    user_name: {
      doc: 'Salesforce username',
      format: String,
      default: '',
      env: 'SF_USER_NAME',
    },
    password: {
      doc: 'Salesforce password',
      format: String,
      default: '',
      env: 'SF_PASSWORD',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
