const subscribe = (client, handler, fetchRequest) => {
  return new Promise((resolve, reject) => {
    const call = client.subscribe();
    call.write(fetchRequest);

    call.on('data', (data) => {
      console.log('Recieved Data');
      handler(data).then((results) => {
        console.log(results);
        resolve(results);
      })
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
