# sf-pub-sub

nodejs salesforce pub sub integration

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

nodejs client for salesforce pub-sub

## Technologies Used

- nodejs
- grpc

## Features

- grpc subscibe to salesforce sub events
- salesforce username/password login
- proto loader
- parse platform events into json object

## Setup

### Install Dependencies

```sh
npm install
```

### env

```
touch .env
```

Sample contents of .env

```
SF_USER_NAME="salesforce username"
SF_PASSWORD="salesforce password"
SF_ENDPOINT="api.pubsub.salesforce.com:7443"
```

### Salesforce Account

You need a valid salesforce account

## Usage

```
npm run dev
```

## Project Status

_in progress_

## Room for Improvement

Room for improvement:

- Logging
- Error handling

To do:

- Publish events
- Currently subscribe to start of stream

## Acknowledgements

Give credit here.

- This project was inspired by [salesforce-pubsub-api-client](https://www.npmjs.com/package/salesforce-pubsub-api-client).

## Contact

Created by [ironman-eric](https://github.com/ironman-eric)

//Creating PE instances
List<Notification**e> platformEventList = new List<Notification**e>();
Notification**e testEvent = new Notification**e();
testEvent.Message\_\_c = 'Message included in the platform event';
platformEventList.add(testEvent);

// Call method to publish events
Database.SaveResult[] srList = EventBus.publish(platformEventList);

// Inspect publishing result
for(Database.SaveResult srVar:srList){
if (srVar.isSuccess()) {
System.debug('Successfully published event.');
} else {
for(Database.Error err : srVar.getErrors()) {
System.debug('Error returned: ' +
err.getStatusCode() +
' - ' +
err.getMessage());
}
}  
}
