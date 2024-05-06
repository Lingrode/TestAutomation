const { Builder, By, until, Key } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  try {
    console.log("Navigating to https://automationexercise.com/");
    await driver.get('https://automationexercise.com/');

    console.log("Clicking on 'Login' button");
    await driver.findElement(By.linkText("Signup / Login")).click();

    await driver.getTitle().then(title => {
      console.log("Page title:", title);
    });

    console.log("Entering email and password");
    await driver.findElement(By.name("email")).sendKeys("maf1oznik322050@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("2109200209");
    console.log("Clicking on 'Login' button");
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click().then(() => {
      console.log("Succesfull login");
    }).catch(() => {
      console.error("Login error.");
    });
    // driver.sleep(10000)
  } finally {
    await driver.quit();
  }
})();


