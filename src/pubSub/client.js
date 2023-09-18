const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = path.join(__dirname, '../protos/pubsub_api.proto');

const createClient = (target) => {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
  const pubSubProto = grpc.loadPackageDefinition(packageDefinition).eventbus.v1;

  return new pubSubProto.PubSub(target, grpc.credentials.createInsecure());
};

module.exports = createClient;
