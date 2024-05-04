const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver;

Given('User launch browser', async function () {
  try {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("1. Browser opened");
  } catch {
    throw new Error("1. Error, browser not opened");
  }
});

When('User navigate to url {string}', { timeout: 20000 }, async function (url) {
  try {
    await driver.get(url);
    console.log("2. Navigate is successful");
  } catch {
    throw new Error("2. Error");
  }
});

Then('User verify that home page is visible successfully', { timeout: 15000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === "Automation Exercise") {
    console.log("3. Home page is visible successfully");
  } else {
    throw new Error("3. Home page is not visible");
  }
});

When('Click on {string} button', { timeout: 15000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//a[contains(text(), '${btnText}')]/i`));
    await button.click();
    console.log("4. Click is successful");
  } catch {
    throw new Error("4. Error");
  }
});

Then('Verify user is navigated to ALL PRODUCTS page successfully', { timeout: 20000 }, async function () {
  let pageTitle = await driver.getTitle();
  console.log(pageTitle)
  if (pageTitle === "Automation Exercise") {
    console.log("5. All Products page is visible successfully");
    await driver.sleep(10000);
  } else {
    throw new Error("5. All Products page is not visible");
  }
});

When('Enter product name in search input and click search button', { timeout: 20000 }, async function () {
  try {
    const searchlInput = await driver.findElement(By.id('search_product'));
    const submitBtn = await driver.findElement(By.id('submit_search'));
    await searchlInput.sendKeys('Shirts');
    await submitBtn.click();
    console.log("6. Successful data entering");
  } catch {
    throw new Error("6. Data entering error");
  }
});

Then('Verify that {string} is visible', { timeout: 20000 }, async function (title) {
  try {
    await driver.findElement(By.css("h2.title.text-center")).getText();
    console.log(`7. ${title} is visible`);
  } catch {
    throw new Error(`7. ${title} is not visible`);
  }
});

Then('Verify all the products related to search are visible', { timeout: 20000 }, async function () {
  const productList = await driver.findElement(By.xpath(`//div[@class='features_items']/div[@class=\"col-sm-4\"]`));
  if (productList.length > 1) {
    console.log("8. Products list is visible");
  } else {
    console.log("8. Products list is not visible");
  }
});

After(async function () {
  await driver.quit();
});