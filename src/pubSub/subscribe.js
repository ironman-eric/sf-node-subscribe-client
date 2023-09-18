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
