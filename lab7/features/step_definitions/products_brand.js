const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver;

Given('Launch browser', async function () {
  try {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("1. Browser opened");
  } catch {
    throw new Error("1. Error, browser not opened");
  }
});

When('Navigate to url {string}', { timeout: 15000 }, async function (url) {
  try {
    await driver.get(url);
    console.log("2. Navigate is successful");
  } catch {
    throw new Error("2. Error");
  }
});

When('Click on {string} button', { timeout: 15000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//a[contains(text(), '${btnText}')]/i`));
    await driver.executeScript("arguments[0].click();", button);
    console.log("3. Click is successful");
    await driver.sleep(2000);
  } catch {
    throw new Error("3. Error");
  }
});

Then('Verify that Brands are visible on left side bar', { timeout: 10000 }, async function () {
  try {
    await driver.findElement(By.xpath(`//h2[.='Brands']`)).getText();
    console.log(`4. Brands is visible`);
  } catch {
    throw new Error(`4. Brands is not visible`);
  }
});

When('Click on any brand name', { timeout: 15000 }, async function () {
  try {
    const brandBtn = await driver.findElement(By.xpath("//div[@class='brands-name']//a[contains(.,'H&M')]"));
    await brandBtn.click();
    console.log("5. Click on brand H&M is successful");
  } catch {
    throw new Error("5. Error");
  }
});

Then('Verify that user is navigated to brand page and brand products are displayed', { timeout: 10000 }, async function () {
  productList = await driver.findElements(By.xpath("//div[@class='features_items']//div[@class='col-sm-4']"));
  if (productList.length > 1) {
    console.log("6. Products list is visible");
  } else {
    console.log("6. Products list is not visible");
  }
});

When('On left side bar, click on any other brand link', { timeout: 10000 }, async function () {
  try {
    const brandBtn = await driver.findElement(By.xpath("//div[@class='brands-name']//a[contains(.,'Polo')]"));
    await driver.executeScript("arguments[0].click();", brandBtn);
    console.log("7. Click on another brand is successful");
  } catch {
    throw new Error("7. Error while click on another brand");
  }
});

Then('Verify that user is navigated to that brand page and can see products', { timeout: 10000 }, async function () {
  productList = await driver.findElements(By.xpath("//div[@class='features_items']//div[@class='col-sm-4']"));
  if (productList.length > 1) {
    console.log("8. Products list is visible");
  } else {
    console.log("8. Products list is not visible");
  }
});

After(async function () {
  await driver.quit();
});