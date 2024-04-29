const { Builder, By } = require('selenium-webdriver');

async function searchSystemHotline() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log("Running Hotline Product List Tests\n");

    console.log("\nScenario 1: Verify product list display on homepage");
    console.log("--------------------------------------------------");
    await verifyProductListDisplay(driver);

    console.log("\nScenario 2: Verify product details display on clicking a product");
    console.log("-------------------------------------------------------------");
    await verifyProductDetailsDisplay(driver);

    console.log("\nScenario 3: Verify product filtering functionality");
    console.log("-----------------------------------------------------");
    await verifyProductFiltering(driver);

    console.log("\nScenario 4: Verify product sorting functionality");
    console.log("-----------------------------------------------------");
    await verifyProductSorting(driver);

    console.log("\nScenario 5: Verify product list pagination functionality");
    console.log("---------------------------------------------------------");
    await verifyProductPagination(driver);

  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
}

async function verifyProductListDisplay(driver) {
  await driver.get('https://hotline.ua/');

  try {
    await driver.findElement(By.css('.content-block__inner'));
    console.log("1. Product list container is displayed on the homepage.");
  } catch (error) {
    console.error("1. Error verifying product list display:", error);
  }
}

async function verifyProductDetailsDisplay(driver) {
  await driver.get('https://hotline.ua/');

  try {
    await driver.sleep(4000);

    await driver.findElement(By.css('span[data-eventcontext="Pixel 8 8/128GB Obsidian"]')).click();

    await driver.sleep(5000);

    await driver.findElement(By.css('.title__main'));
    console.log("1. Product details page is displayed after clicking a product.");
  } catch (error) {
    console.error("1. Error verifying product details display:", error);
  }
}

async function verifyProductFiltering(driver) {

  try {
    await driver.get('https://hotline.ua/');


    try {
      await driver.sleep(3000);
      let category = await driver.findElement(By.css('a[data-eventlabel="Комп\'ютери, Мережі"]'));
      await category.click();
      console.log("1. Successfully clicked on the category 'Комп'ютери, Мережі'");
    } catch (error) {
      console.error("1. Error when clicking on the category 'Комп'ютери, Мережі':", error);
    }

    try {
      await driver.sleep(5000);
      let subcategory = await driver.findElement(By.linkText("Ноутбуки"));
      await driver.executeScript("arguments[0].scrollIntoView();", subcategory);
      await subcategory.click();
      console.log("2. Successfully clicked on the subcategory 'Ноутбуки'");
      await driver.sleep(5000);
    } catch (error) {
      console.error("2. Error when clicking on the subcategory 'Ноутбуки':", error);
    }

    try {
      await driver.sleep(5000);
      let filter = await driver.findElement(By.xpath("//label[contains(., 'Apple M3 Pro')]"));
      await filter.click();
      console.log("3. Successfully clicked on the filter 'Apple M3 Pro'");
    } catch (error) {
      console.error("3. Error when clicking on the filter 'Apple M3 Pro':", error);
    }

    try {
      await driver.findElement(By.id('catalogListContainer'));
      await driver.sleep(5000);
      console.log("4. Element with id='catalogListContainer' found. Test passed successfully.");
    } catch (error) {
      console.error("4. Element with id='catalogListContainer' not found. Test failed: ", error);
    }
  } finally {
    console.log("Quitting driver");
  }
}

async function verifyProductSorting(driver) {
  await driver.get('https://hotline.ua/');

  try {
    await driver.sleep(3000);
    let category = await driver.findElement(By.css('a[data-eventlabel="Комп\'ютери, Мережі"]'));
    await category.click();
    console.log("1. Successfully clicked on the category 'Комп'ютери, Мережі'");
  } catch (error) {
    console.error("1. Error when clicking on the category 'Комп'ютери, Мережі':", error);
  }

  try {
    await driver.sleep(5000);
    let subcategory = await driver.findElement(By.linkText("Ноутбуки"));
    await driver.executeScript("arguments[0].scrollIntoView();", subcategory); // Прокрутка до елемента
    await subcategory.click();
    console.log("2. Successfully clicked on the subcategory 'Ноутбуки'");
    await driver.sleep(5000);
  } catch (error) {
    console.error("2. Error when clicking on the subcategory 'Ноутбуки':", error);
  }

  try {
    await driver.sleep(5000);
    let filter = await driver.findElement(By.xpath("//label[contains(., 'Apple M3 Pro')]"));
    await filter.click();
    console.log("3. Successfully clicked on the filter 'Apple M3 Pro'");
  } catch (error) {
    console.error("3. Error when clicking on the filter 'Apple M3 Pro':", error);
  }

  let sortElem;
  try {
    await driver.sleep(5000);
    sortElem = await driver.findElement(By.css('span[class="select__field"]'));
    console.log("4. Element succesfull found");
  } catch (error) {
    console.error("4. Element not found");
    throw error;
  }

  try {
    await driver.sleep(5000);
    await sortElem.click();
    console.log("5. Succsessfull click");
  } catch (error) {
    console.error("5. Failed to click on the element");
    throw error;
  }

  try {
    sortElem = await driver.findElement(By.css('div[value="popularity"]'));
    console.log("6. Element succesfull found");
  } catch (error) {
    console.error("6. Element not found");
    throw error;
  }

  try {
    await sortElem.click();
    await driver.sleep(7000);
    console.log("7. Test passed. Page loaded successfully");
  } catch (error) {
    console.error("7. Failed to click on the element");
    throw error;
  }
}

async function verifyProductPagination(driver) {
  await driver.get('https://hotline.ua/');

  try {
    await driver.sleep(4000);

    await driver.findElement(By.css('span[data-eventcontext="Pixel 8 8/128GB Obsidian"]')).click();

    await driver.sleep(5000);

    await driver.findElement(By.css('.title__main'));
    console.log("1. Product details page is displayed after clicking a product.");
  } catch (error) {
    console.error("1. Error verifying product details display:", error);
  }

  try {
    await driver.findElement(By.css('a[data-breadcrumbs-link="2"]')).click();
    await driver.sleep(5000);

    await driver.findElement(By.css('a[href="?p=2"][data-tracking-id="catalog-20"]')).click();

    console.log("2. Product list content changes when navigating to the next page.");
  } catch (error) {
    console.error("2. Error verifying product pagination:", error);
  }
}

searchSystemHotline();