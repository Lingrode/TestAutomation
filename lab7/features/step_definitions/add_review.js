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

When('Click on {string} menu button', { timeout: 15000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//a[contains(text(), '${btnText}')]/i`));
    await button.click();
    console.log("3. Click is successful");
  } catch {
    throw new Error("3. Error");
  }
});

Then('Verify user is navigated to ALL PRODUCTS page successfully', { timeout: 10000 }, async function () {
  let pageTitle = await driver.getTitle();
  console.log(pageTitle)
  if (pageTitle === "Automation Exercise") {
    console.log("4. All Products page is visible successfully");
  } else {
    throw new Error("4. All Products page is not visible");
  }
});

When('Click on {string} button', { timeout: 10000 }, async function (string) {
  try {
    const firstProduct = await driver.findElement(By.xpath("(//div[@class='features_items']//div[@class='col-sm-4'])[1]"));
    const viewProductButton = await firstProduct.findElement(By.xpath(`//a[contains(text(), '${string}')]/i`));
    await driver.executeScript("arguments[0].click();", viewProductButton);
    console.log("5. Click on 'View Product' of first product is successful")
  } catch {
    throw new Error("5. Click is not successful");
  }
});

Then('Verify {string} is visible', { timeout: 15000 }, async function (text) {
  try {
    await driver.findElement(By.xpath(`.//a[.='Write Your Review']`)).getText();
    console.log(`6. ${text} is visible`);
  } catch {
    throw new Error(`6. ${text} is not visible`);
  }
});

When('Enter name, email and review', { timeout: 20000 }, async function () {
  try {
    const userName = await driver.findElement(By.id('name'));
    const userEmail = await driver.findElement(By.id('email'));
    const userReview = await driver.findElement(By.id('review'));
    await userName.sendKeys('Lingrode');
    await userEmail.sendKeys('maf1oznik322050@gmail.com');
    await userReview.sendKeys('It\'s cool!');
    console.log("7. Successful data entering");
  } catch {
    throw new Error("7. Data entering error");
  }
});

When('Click {string} button', { timeout: 5000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//button[contains(text(), "${btnText}")]`));
    await button.click();
    console.log("8. Click is successful");
    await driver.sleep(2000);
  } catch {
    throw new Error("8. Error");
  }
});

Then('Verify success message {string}', { timeout: 5000 }, async function (text) {
  try {
    await driver.findElement(By.xpath(`//span[.='Thank you for your review.']`)).getText();
    console.log(`9. ${text} is visible`);
  } catch {
    throw new Error(`9. ${text} is not visible`);
  }
});

After(async function () {
  await driver.quit();
});