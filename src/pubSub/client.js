const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const certifi = require('certifi');
const fs = require('fs');
const PROTO_PATH = path.join(__dirname, '../protos/pubsub_api.proto');

const createClient = (target, metadata) => {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const pubSubProto = grpc.loadPackageDefinition(packageDefinition).eventbus.v1;

  const rootCert = fs.readFileSync(certifi);

  const metaCallback = (_params, callback) => {
    const meta = new grpc.Metadata();
    meta.add('accesstoken', metadata.accessToken);
    meta.add('instanceurl', metadata.instanceUrl);
    meta.add('tenantid', metadata.tenantId);
    callback(null, meta);
  };
  const callCreds = grpc.credentials.createFromMetadataGenerator(metaCallback);
  const combCreds = grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(rootCert),
    callCreds
  );

  return new pubSubProto.PubSub(target, combCreds);
};

module.exports = createClient;
