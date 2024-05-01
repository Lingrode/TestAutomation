const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(10000);

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

it("Page title is 'Google'", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("Page title is 'Google'");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');
  });

  await allure.step("Step 2 - Find page title", async () => {
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    console.log(`Page title: ${title}`);
    expect(title).toBe('Google');
  })
});

it("Search field is available", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("Search field is available");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');
  });

  await allure.step("Step 2 - Find search field", async () => {
    const searchField = await driver.findElement(By.name('q'));
    expect(searchField).toBeTruthy();
  })
});

it("'Search' button is available", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("'Search' button is available");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');

  });

  await allure.step("Step 2 - Find search button", async () => {
    const searchButton = await driver.findElement(By.name('btnK'));
    console.log(`"Search" button: ${searchButton}`);
    expect(searchButton).toBeTruthy();
  })
});

it("Google logo is available", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("Google logo is available");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');

  });

  await allure.step("Step2 - Find Google logo", async () => {
    const logo = await driver.findElement(By.css('.lnXdpd'));
    console.log(`Google logo: ${logo}`);
    expect(logo).toBeTruthy();
  })
});

it("Title is 'Google'", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("Title is 'Google'");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');

  });

  await allure.step("Step 2 - Find page title", async () => {
    const title = await driver.getTitle();
    console.log(`Title: ${title}`);
    expect(title).toBe('DuckDuckGo');
  })
});

it("Element is available", async () => {
  allure.owner("Illia Hrymalo");
  await allure.displayName("Element is available");

  await allure.step("Step 1 - Navigation to page", async () => {
    await driver.get('https://www.google.com');

  });

  await allure.step("Step 2 - Find element", async () => {
    const missingElement = await driver.findElement(By.id('missingElement'));
    console.log(`Element is missing: ${missingElement}`);
    expect(missingElement).toBeFalsy();
  })
});