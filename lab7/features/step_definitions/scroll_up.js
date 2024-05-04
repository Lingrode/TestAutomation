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

When('Scroll down page to bottom', { timeout: 15000 }, async function () {
  try {
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    console.log("4. Scroll down is successful");
  } catch {
    throw new Error("4. Error while scroll down");
  }
});

Then('Verify {string} is visible', { timeout: 15000 }, async function (text) {
  try {
    const footerText = await driver.findElement(By.xpath(`//h2[.='Subscription']`)).getText();
    console.log(`5. ${text} is visible`);
  } catch {
    throw new Error(`5. ${text} is visible`);
  }
});

When('Click on arrow at bottom right side to move upward', { timeout: 15000 }, async function () {
  try {
    const upButton = await driver.findElement(By.id("scrollUp"));
    await upButton.click()
    console.log("6. Click is successful");
  } catch {
    throw new Error("6. Error");
  }
});

When('Scroll up page to top', { timeout: 15000 }, async function () {
  try {
    await driver.executeScript('window.scrollTo(0, 0);');
    console.log("6. Scroll up is successful");
  } catch {
    throw new Error("6. Error while scrolling up");
  }
});

Then('Verify that page is scrolled up and {string} text is visible on screen', { timeout: 15000 }, async function (title) {
  try {
    await driver.findElement(By.css("h2.title.text-center")).getText();
    console.log(`7. ${title} is visible`);
  } catch {
    throw new Error(`7. ${title} is not visible`);
  }
});

After(async function () {
  await driver.quit();
});