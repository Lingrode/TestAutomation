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

When('User navigate to url {string}', { timeout: 15000 }, async function (url) {
  try {
    await driver.get(url);
    console.log("2. Navigate is successful");
  } catch {
    throw new Error("2. Error");
  }
});

When('Scroll to bottom of page', { timeout: 15000 }, async function () {
  try {
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    console.log("4. Scroll down is successful");
  } catch {
    throw new Error("4. Error while scroll down");
  }
});

Then('Verify {string} are visible', { timeout: 15000 }, async function (text) {
  try {
    const footerText = await driver.findElement(By.xpath(`//h2[.='recommended items']`)).getText();
    console.log(`5. ${text} is visible`);
  } catch {
    throw new Error(`5. ${text} is not visible`);
  }
});

When('Click on {string} on Recommended product', { timeout: 15000 }, async function (string) {
  try {
    const addButton = await driver.findElement(By.xpath("//div[@class='overlay-content']//a[contains(@class,'add-to-cart')]"));
    await driver.executeScript("arguments[0].click();", addButton);
    console.log("6. Click Add to Cart is successful");
    await driver.sleep(10000);
  } catch {
    throw new Error("6. Error");
  }


});

When('Click on {string} button', { timeout: 15000 }, async function (string) {
  try {
    const button = await driver.findElement(By.xpath(`//u[.='View Cart']`));
    await button.click();
    console.log("7. Click View Cart is successful");
  } catch {
    throw new Error("7. Error");
  }
});

Then('Verify that product is displayed in cart page', { timeout: 15000 }, async function () {
  try {
    await driver.findElement(By.xpath("//tbody/tr"));
    console.log(`8. Product is displayed`);
  } catch {
    throw new Error(`8. Product is not displayed`);
  }
});

After(async function () {
  await driver.quit();
});