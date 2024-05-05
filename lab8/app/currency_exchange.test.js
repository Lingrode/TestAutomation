const { spec } = require('pactum');

describe('Currency exchange API Tests', () => {

  it('should return list of available currencies', async () => {
    await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .expectStatus(200)
  });

  it('should return the exchange rate of Euro to other currencies', async () => {
    await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
      .expectStatus(200)
  });

  it('should return the exchange rate of Euro to Dollar', async () => {
    const res = await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
      .expectStatus(200)

    const currency = res.body.eur.usd;
    console.log('Exchange rate of Euro to Dollar:', currency);

    expect(currency).toBeGreaterThan(1.073);
  });

  it('should return error for non-existent currency (asd)', async () => {
    await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/asd.json')
      .expectStatus(404);
  });
})