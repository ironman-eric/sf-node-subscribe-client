const superagent = require('superagent');

const login = async (userName, password) => {
  const url = 'https://login.salesforce.com/services/Soap/u/58.0';

  const data = `
    <soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:urn='urn:partner.soap.sforce.com'>
    <soapenv:Body>
        <urn:login>
          <urn:username>${userName}</urn:username>
          <urn:password>${password}</urn:password>
        </urn:login>
      </soapenv:Body>
    </soapenv:Envelope>`;

  const result = await superagent
      .post(url)
      .send(data)
      .set('content-type', 'text/xml')
      .set('SOAPAction', 'Login');

  return result.text;
};

module.exports = login;
