const metadata = require('../metadata.js');

describe('metadata', () => {
  it('should build metadata', async () => {
    // ARRANGE
    const assert = {
      accessToken: 'session',
      instanceUrl: 'https://localhost',
      tenantId: 'org',
    };

    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soapenv:Body>
          <loginResponse>
            <result>
              <serverUrl>https://localhost/services/Soap/u/58.0/org</serverUrl>
              <sessionId>session</sessionId>              
              <userInfo>
                <organizationId>org</organizationId>                
              </userInfo>
            </result>
          </loginResponse>
        </soapenv:Body>
      </soapenv:Envelope>`;

    // ACT

    // ASSERT
    expect(metadata(xml)).toEqual(assert);
  });
});
