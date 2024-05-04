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

When('Navigate to url {string}', { timeout: 10000 }, async function (url) {
  try {
    await driver.get(url);
    console.log("2. Navigate is successful");
  } catch {
    throw new Error("2. Error");
  }
});

Then('Verify that home page is visible successfully', { timeout: 10000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === "Automation Exercise") {
    console.log("3. Home page is visible successfully");
  } else {
    throw new Error("3. Home page is not visible");
  }
});

// When('Click on "Signup \\/ Login" button', { timeout: 2000 }, async function (btnText) {
//   try {
//     const button = await driver.findElement(By.linkText(`${btnText}`));
//     await button.click();
//     console.log("4. Click is successful");
//   } catch {
//     throw new Error("4. Error");
//   }
// });

When('Click on {string} button', { timeout: 2000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.linkText(`${btnText}`));
    await button.click();
    console.log("4. Click is successful");
  } catch {
    throw new Error("4. Error");
  }
});

Then('Verify {string} is visible', { timeout: 2000 }, async function (elText) {
  const element = await driver.findElement(By.xpath(`//*[contains(text(), '${elText}')]`));
  const isVisible = await element.isDisplayed();
  if (isVisible) {
    console.log(`5. ${elText} is visible.`);
  } else {
    throw new Error(`5. ${elText} is not visible.`);
  }
});

When('Enter correct email address and password', { timeout: 5000 }, async function () {
  try {
    const emailInput = await driver.findElement(By.name('email'));
    const passwordInput = await driver.findElement(By.name('password'));
    await emailInput.sendKeys('maf1oznik322050@gmail.com');
    await passwordInput.sendKeys('2109200209');
    console.log("6. Successful data entering");
  } catch {
    throw new Error("6. Data entering error");
  }
});

When('Click {string} button', { timeout: 50000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.xpath(`//button[contains(text(), "${btnText}")]`));
    await button.click();
    console.log("7. Click is successful");
    await driver.sleep(2000);
  } catch {
    throw new Error("7. Error");
  }
});

When('Click the {string} button', { timeout: 5000 }, async function (btnText) {
  try {
    const button = await driver.findElement(By.linkText(`${btnText}`));
    await button.click();
    console.log("8. Click 'Delete account' is successful");
    await driver.sleep(2000);
  } catch {
    throw new Error("8. Error");
  }
});

Then('Verify that {string} is visible', { timeout: 50000 }, async function (elText) {
  let el;
  try {
    el = await driver.findElement(By.css("h2[data-qa='account-deleted']"));
    const text = await el.getText();
    console.log(text)
    console.log(`9. ${text} is visible`);
  } catch {
    throw new Error(`9. ${elText} is not visible`);
  }
});

When('Enter incorrect email address and password', { timeout: 5000 }, async function () {
  try {
    const emailInput = await driver.findElement(By.name('email'));
    const passwordInput = await driver.findElement(By.name('password'));
    await emailInput.sendKeys('maf1oznik322050@gmail.com');
    await passwordInput.sendKeys('3333333');
    console.log("6. Successful data entering");
  } catch {
    throw new Error("6. Data entering error");
  }
});

Then('Verify error {string} is visible', async function (string) {
  let el;
  try {
    el = await driver.findElement(By.xpath(`//p[contains(text(), "${string}")]`));
    const text = await el.getText();
    console.log(`7. ${text} is visible`);
  } catch {
    throw new Error(`7. ${string} is not visible`);
  }
});

After(async function () {
  await driver.quit();
});