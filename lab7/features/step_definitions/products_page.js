const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver, productList;

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

When('Verify user is navigated to ALL PRODUCTS page successfully', { timeout: 10000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === "Automation Exercise") {
    console.log("5. All Products page is visible successfully");
  } else {
    throw new Error("5. All Products page is not visible");
  }
});

Then('The products list is visible', { timeout: 10000 }, async function () {
  productList = await driver.findElements(By.xpath("//div[@class='features_items']//div[@class='col-sm-4']"));
  if (productList.length > 1) {
    console.log("6. Products list is visible");
  } else {
    console.log("6. Products list is not visible");
  }
});

When('Click on {string} of first product', { timeout: 10000 }, async function (string) {
  try {
    const firstProduct = await driver.findElement(By.xpath("(//div[@class='features_items']//div[@class='col-sm-4'])[1]"));
    const viewProductButton = await firstProduct.findElement(By.xpath(`//a[contains(text(), '${string}')]/i`));
    await driver.executeScript("arguments[0].click();", viewProductButton);
    console.log("7. Click on 'View Product' of first product is successful")
  } catch {
    throw new Error("7. Click is not successful");
  }
});

When('User is landed to product detail page', async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle === "Automation Exercise - Product Details") {
    console.log("8. Product Details page is visible successfully");
  } else {
    throw new Error("8. Product Details page is not visible");
  }
});

Then('Verify that detail detail is visible: product name, category, price, availability, condition, brand', async function () {
  const productNameEl = await driver.findElement(By.xpath("//h2[.='Blue Top']"));
  const categoryEl = await driver.findElement(By.xpath("//p[.='Category: Women > Tops']"));
  const priceEl = await driver.findElement(By.xpath("//span[.='Rs. 500']"));
  const availabilityEl = await driver.findElement(By.xpath("//p[contains(text(),' In Stock')]"));
  const conditionEl = await driver.findElement(By.xpath("//p[contains(text(),' New')]"));
  const brandEl = await driver.findElement(By.xpath("//p[contains(text(),' Polo')]"));

  const productName = await productNameEl.getText();
  const category = await categoryEl.getText();
  const price = await priceEl.getText();
  const availability = await availabilityEl.getText();
  const condition = await conditionEl.getText();
  const brand = await brandEl.getText();

  if (productName && category && price && availability && condition && brand) {
    console.log("9. All product details are visible on the page.");
  } else {
    console.log("9. Not all product details are visible on the page.");
  }
});

After(async function () {
  await driver.quit();
});