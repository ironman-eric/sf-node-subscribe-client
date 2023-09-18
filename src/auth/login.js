const superagent = require('superagent');

const login = async (userName, password) => {

  const url = 'url';
  
  const data = `<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' " + \
        "xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' " + \
        "xmlns:urn='urn:partner.soap.sforce.com'><soapenv:Body>" + \
        "<urn:login><urn:username><![CDATA["${userName}
        "]]></urn:username><urn:password><![CDATA["${password}
        "]]></urn:password></urn:login></soapenv:Body></soapenv:Envelope>`;
    
  return await superagent
    .post(url)
    .send(data)
    .set('content-type', 'text/xml')
    .set('SOAPAction', 'Login')      
};

module.exports = login;
