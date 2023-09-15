const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = path.join(__dirname, '../protos/pubsub_api.proto');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
const pubSubProto = grpc.loadPackageDefinition(packageDefinition).eventbus.v1;

const subscribe = (client) => {
  return new Promise((resolve, reject) => {
    const call = client.subscribe();
    call.on('data', (data) => {
      resolve(data);
    });
    call.on('status', (status) => {
      resolve(status);
    });
    call.on('error', () => {
      reject('error');
    });
    call.end();
  });
};

module.exports = subscribe;
