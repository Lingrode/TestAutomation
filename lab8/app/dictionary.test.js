const { it, expect } = require('@jest/globals');
const { spec } = require('pactum');

describe('Dictionary API Tests', () => {
  const words = ['evening', 'currency', 'jest', 'holiday', 'test'];

  words.forEach(word => {
    it(`should have usage examples for the word "${word}"`, async () => {
      await spec()
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .expectStatus(200)
        .expectJsonLike('0.meanings.0.definitions.0.example', /./);
    });
  });
});


