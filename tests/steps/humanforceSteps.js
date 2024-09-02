import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Before, Given, When, Then } = createBdd(test);


Given('I navigate to {string}', async ({humanForcePage, page }, url) => {
  await humanForcePage.navigateToUrl(url);
});

Given('Navigate to Time and Attendance Page', async ({humanForcePage}, link) => {
  await humanForcePage.clickOnTimeAndAttendance(link);
});

Given('I enter Employee Code {string}', async ({ humanForcePage }, emailAddress) => {
   await humanForcePage.enterEmailAddress(emailAddress);
});

Given('I enter Manager Code {string}', async ({ humanForcePage }, emailAddress) => {
  await humanForcePage.enterEmailAddress(emailAddress);
});

Given('I enter password {string}', async ({ humanForcePage }, password) => {
  await humanForcePage.enterPassword(password);
});

When('I click on login button', async ({humanForcePage}) => {
    await humanForcePage.clickOnLogin();
  });

When('I select Duty Manager on the dropdown', async ({humanForcePage}) => {
    await humanForcePage.clickDutyManager();
  });

When('I click on Manager details', async ({humanForcePage}) => {
    await humanForcePage.clickEmployee();
  });

When('I click Edit button', async ({humanForcePage}) => {
    await humanForcePage.clickEdit();
  });

When('I click on HF Academy button', async ({humanForcePage}) => {
    await humanForcePage.clickHfAcademy();
  });

When('I search {string}', async ({humanForcePage}, search) => {
    await humanForcePage.searchField(search);
  });

When('I should see a message indicating {string}', async ({humanForcePage, page}, message) => {
    await page.waitForTimeout(2000);
    await humanForcePage.forbidden_visible(message)
  });

When('I click on How do I view or update my details link', async ({humanForcePage, page}) => {
    await page.waitForTimeout(3000);
    await humanForcePage.clickHowDoIViewOrUpdateDetails();
  });

When('I click on 7 benefits of workforce analytics for business article Link', async ({humanForcePage}) => {
    await humanForcePage.clickOn7Benefits();
  });

When('I click Home button', async ({humanForcePage}) => {
    await humanForcePage.clickHome();
  });

Then('I should verify user is able to login and url contains {string}', async ({page}, logged_url) => {
    await expect(page).toHaveURL(new RegExp(logged_url))
});

Then('I should verify user is able to navigate successfully and url contains {string}', async ({page}, benefit_url) => {
    await expect(page).toHaveURL(new RegExp(benefit_url))
});

Then('I should see a welcome message indicating {string}', async ({humanForcePage}, welcome) => {
  await humanForcePage.warning_visible(welcome)
});

Then('I should see the title indicating {string}', async ({humanForcePage, page}, viewUpdate) => {
  await page.waitForTimeout(3000);
  await humanForcePage.viewUpdate_visible(viewUpdate)
});


Then('I should see a warning message indicating {string}', async ({humanForcePage, page}, warning) => {
  await page.waitForTimeout(2000);
  await humanForcePage.warning_visible(warning)
});


// Then('I should verify user is not able to login and url contains {string}', async ({page}, login_url) => {
//   await expect(page).toHaveURL(new RegExp(login_url));
// });
