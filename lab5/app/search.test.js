const { Builder, By, Key, until } = require('selenium-webdriver');

(async function searchSystemHotline() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Hotline Search System Scenario\n");


    console.log("Scenario 1: Searching by keyword");
    console.log("----------------------------------");

    console.log("1. Navigating to hotline.ua");
    await driver.get('https://hotline.ua/');

    console.log("2. Entering 'смартфон' in the search field");
    await driver.findElement(By.css('input[placeholder="Знайти товар, магазин, бренд"]')).sendKeys('смартфон', Key.RETURN);
    await driver.wait(until.elementLocated(By.css('div.search__title')), 6000);
    let div = await driver.findElement(By.css('div.search__title'));
    await div.getText().then(title => {
      console.log('3. Search title: ', title);
    }).catch(() => {
      console.log("3. Title not found");
    });


    console.log("\nScenario 2: Filtering search results");
    console.log("----------------------------------");

    let phoneCatalogName;
    try {
      phoneCatalogName = await driver.findElement(By.xpath('//div[@class="search-sidebar-catalogs__name link link--black" and contains(text(), "Смартфони та мобільні телефони")]'));
      console.log("1. Element succesfull found");
    } catch (error) {
      console.error("1. Element not found");
      throw error;
    }

    try {
      await phoneCatalogName.click();
      console.log("2. Successfully clicked on the link");
    } catch (error) {
      console.error("2. Failed to click on the element");
      throw error;
    }

    try {
      await driver.wait(until.stalenessOf(phoneCatalogName), 10000);
      console.log("3. Page loaded successfully after clicking");
    } catch (error) {
      console.error("3. Page did not load after clicking");
      throw error;
    }

    let linkToNothing;
    try {
      linkToNothing = await driver.wait(until.elementLocated(By.xpath('//a[contains(., "Nothing")]')), 5000);
      await linkToNothing.click();
      console.log("4. Successfully clicked on the link");

      await driver.sleep(7000);
      console.log("4. Page loaded successfully");

    } catch (error) {
      console.error("4. Failed to click on the link");
      throw error;
    }


    console.log("\nScenario 3: Sorting search results");
    console.log("----------------------------------");

    let sortElem;
    try {
      sortElem = await driver.findElement(By.css('span[class="select__field"]'));
      console.log("1. Element succesfull found");
    } catch (error) {
      console.error("1. Element not found");
      throw error;
    }

    try {
      await sortElem.click();
      console.log("2. Succsessfull click");
    } catch (error) {
      console.error("2. Failed to click on the element");
      throw error;
    }

    try {
      sortElem = await driver.findElement(By.css('div[value="priceDown"]'));
      console.log("3. Element succesfull found");
    } catch (error) {
      console.error("3. Element not found");
      throw error;
    }

    try {
      await sortElem.click();
      await driver.sleep(7000);
      console.log("4. Test passed. Page loaded successfully");
    } catch (error) {
      console.error("4. Failed to click on the element");
      throw error;
    }


    console.log("\nScenario 4: Searching with a query on incorrect keyboard layout");
    console.log("----------------------------------");

    let mainPageLink;
    try {
      mainPageLink = await driver.findElement(By.css('a.nuxt-link-active'));
      console.log("1. Element succesfull found");
    } catch (error) {
      console.error("1. Element not found");
      throw error;
    }

    try {
      await mainPageLink.click();
      console.log("2. Successfully clicked on the link");
    } catch (error) {
      console.error("2. Failed to click on the link");
      throw error;
    }

    try {
      await driver.sleep(5000);
      await driver.findElement(By.css('input[placeholder="Знайти товар, магазин, бренд"]')).sendKeys('cvfhnajy', Key.RETURN);;
      console.log("3. Successfully entered query on incorrect keyboard layout");
      await driver.sleep(5000);
    } catch (error) {
      console.error("3. Failed to make a query");
      throw error;
    }

    let searchResults = await driver.findElements(By.css('div.search__title'));
    let noResultsElement = await driver.findElements(By.css('div.search__no-items-title'));

    if (searchResults.length > 0) {
      console.log("4. Test passed: Search results found");
    } else if (noResultsElement.length > 0) {
      console.log("4. Test failed: No results found for the search query");
    } else {
      console.log("4. Test inconclusive: No search results and no 'no results' message");
    }


    console.log("\nScenario 5: Searching with a misprint");
    console.log("----------------------------------");

    try {
      mainPageLink = await driver.findElement(By.css('a.nuxt-link-active'));
      console.log("1. Element succesfull found");
    } catch (error) {
      console.error("1. Element not found");
      throw error;
    }

    try {
      await mainPageLink.click();
      console.log("2. Successfully clicked on the link");
    } catch (error) {
      console.error("2. Failed to click on the link");
      throw error;
    }

    let searchField;
    try {
      await driver.sleep(3000);
      searchField = await driver.findElement(By.css('input[placeholder="Знайти товар, магазин, бренд"]'));
      console.log("3. Search field found successfully");
    } catch (error) {
      console.error("3. Search field not found");
      throw error;
    }

    try {
      await searchField.sendKeys('пефроратор', Key.RETURN);
      console.log("4. Search query entered successfully");
      await driver.sleep(5000);
      console.log("4. Page loaded successfully");
    } catch (error) {
      console.error("4. Failed to enter search query");
      throw error;
    }

    if (searchResults.length > 0) {
      console.log("5. Test passed: Search results found");
    } else if (noResultsElement.length > 0) {
      console.log("5. Test failed: No results found for the search query");
    } else {
      console.log("5. Test inconclusive: No search results and no 'no results' message");
    }

  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();
