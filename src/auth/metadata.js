const { XMLParser } = require('fast-xml-parser');

const metadata = (xml) => {
  const parser = new XMLParser();
  const parsed = parser.parse(xml);
  const loginBody = parsed['soapenv:Envelope']['soapenv:Body'];
  const loginResponse = loginBody['loginResponse']['result'];
  const instanceUrl = new URL(loginResponse['serverUrl']);

  return {
    accessToken: loginResponse['sessionId'],
    instanceUrl: `${instanceUrl.protocol}//${instanceUrl.host}`,
    tenantId: loginResponse['userInfo']['organizationId'],
  };
};

module.exports = metadata;
