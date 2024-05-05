const { spec } = require('pactum');

describe('Bank Holidays', () => {
  it('should have correct number of holidays', async () => {
    const response = await spec()
      .get('https://www.gov.uk/bank-holidays.json')
      .expectStatus(200);
    const eventsNum = Object.keys(response.body['england-and-wales'].events).length;
    console.log('Number of holidays: ' + eventsNum);
    expect(eventsNum).toBeGreaterThan(60);
  });

  it('should have correct Easter date', async () => {
    const response = await spec()
      .get('https://www.gov.uk/bank-holidays.json')
      .expectStatus(200);
    const easter = response.body['england-and-wales'].events.find(event => event.title === 'Easter Monday' && event.date === '2024-04-01');
    expect(easter).toBeDefined();
    expect(easter.date).toBe('2024-04-01');
  });

});