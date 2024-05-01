const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(10000);

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

test('The Google home page is loading', async () => {
  await driver.get('https://www.google.com');
  const title = await driver.getTitle();
  expect(title).toBe('Google');
});

test('The search field is available', async () => {
  await driver.get('https://www.google.com');
  const searchField = await driver.findElement(By.name('q'));
  console.log(searchField);
  expect(searchField).toBeTruthy();
});

test('The "Search" button is present', async () => {
  await driver.get('https://www.google.com');
  const searchButton = await driver.findElement(By.name('btnK'));
  console.log(searchButton)
  expect(searchButton).toBeTruthy();
});

test('The Google logo is displayed', async () => {
  await driver.get('https://www.google.com');
  const logo = await driver.findElement(By.css('.lnXdpd'));
  console.log(logo)
  expect(logo).toBeTruthy();
});

// Expected negative result
test('Incorrect page title', async () => {
  await driver.get('https://www.google.com');
  const title = await driver.getTitle();
  console.log(title)
  expect(title).toBe('DuckDuckGo');
});

// Expected negative result
test('Missing element on page', async () => {
  await driver.get('https://www.google.com');
  const missingElement = await driver.findElement(By.id('missingElement'));
  console.log(missingElement)
  expect(missingElement).toBeFalsy();
});