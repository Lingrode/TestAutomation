const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver;

Given('I launch the browser', { timeout: 10000 }, async function () {
  try {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("1. Browser opened");
  } catch {
    throw new Error("1. Error, browser not opened");
  }
});

When('I navigate to url {string}', { timeout: 10000 }, async function (url) {
  try {
    await driver.get(url);
    console.log("2. Navigate is successful");
  } catch {
    throw new Error("2. Error");
  }
});

Then('I verify that the home page is visible successfully', { timeout: 15000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === "Automation Exercise") {
    console.log("3. Home page is visible successfully");
  } else {
    throw new Error("3. Home page is not visible");
  }
});

When('I click {string} menu button', { timeout: 10000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//a[contains(text(), '${btnText}')]/i`));
    await button.click();
    console.log("4. Click is successful");
    driver.sleep(5000)
  } catch {
    throw new Error("4. Error");
  }
});

Then('I verify that navigated to test cases page successfully', { timeout: 10000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === 'Automation Exercise') {
    console.log("5. Test Cases page is visible successfully");
  }
  else {
    throw new Error("5. Test Cases page is not visible");
  }
});

After(async function () {
  await driver.quit();
});