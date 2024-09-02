/** Generated from: tests/features/humanforce.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("HumanForce Tests", () => {

  test("Verify Viewer is able to navigate successfully", { tag: ["@test"] }, async ({ Given, humanForcePage, page, And, When, Then }) => {
    await Given("I navigate to \"https://www.humanforce.com/\"", null, { humanForcePage, page });
    await And("Navigate to Time and Attendance Page", null, { humanForcePage });
    await When("I click on 7 benefits of workforce analytics for business article Link", null, { humanForcePage });
    await Then("I should verify user is able to navigate successfully and url contains \"/7-benefits-of-workforce-analytics-for-business/\"", null, { page });
  });

  test("Verify Employee is able to login with valid credentials", { tag: ["@test"] }, async ({ Given, humanForcePage, page, And, When, Then }) => {
    await Given("I navigate to \"https://qatestchallenge2.humanforce.io/\"", null, { humanForcePage, page });
    await And("I enter Employee Code \"EMP01\"", null, { humanForcePage });
    await And("I enter password \"Q@T3chCh4lleng3@\"", null, { humanForcePage });
    await When("I click on login button", null, { humanForcePage });
    await Then("I should see a welcome message indicating \"Hello Wade\"", null, { humanForcePage });
  });

  test("Verify Manager is able to search successfully", { tag: ["@test"] }, async ({ Given, humanForcePage, page, And, When, Then }) => {
    await Given("I navigate to \"https://qatestchallenge2.humanforce.io/\"", null, { humanForcePage, page });
    await And("I enter Manager Code \"MGR01\"", null, { humanForcePage });
    await And("I enter password \"Q@T3chCh4lleng3@\"", null, { humanForcePage });
    await When("I click on login button", null, { humanForcePage });
    await And("I click on HF Academy button", null, { humanForcePage });
    await And("I search \"Personal\"", null, { humanForcePage });
    await And("I click on How do I view or update my details link", null, { humanForcePage, page });
    await Then("I should see the title indicating \"How do I view or update my details?\"", null, { humanForcePage, page });
  });

  test("Verify Employee should not be able to navigate at Rostering Manager Page", { tag: ["@test"] }, async ({ Given, humanForcePage, page, And, When, Then }) => {
    await Given("I navigate to \"https://qatestchallenge2.humanforce.io/RosteringManager/\"", null, { humanForcePage, page });
    await And("I enter Employee Code \"EMP01\"", null, { humanForcePage });
    await And("I enter password \"Q@T3chCh4lleng3@\"", null, { humanForcePage });
    await When("I click on login button", null, { humanForcePage });
    await And("I should see a message indicating \"Sorry, that is not currently allowed...\"", null, { humanForcePage, page });
    await And("I click Home button", null, { humanForcePage });
    await Then("I should verify user is able to login and url contains \"/Home/\"", null, { page });
  });

  test("Verify Manager should not be able to edit own profile", { tag: ["@test"] }, async ({ Given, humanForcePage, page, And, When, Then }) => {
    await Given("I navigate to \"https://qatestchallenge2.humanforce.io/EmployeeManagement/\"", null, { humanForcePage, page });
    await And("I enter Manager Code \"MGR01\"", null, { humanForcePage });
    await And("I enter password \"Q@T3chCh4lleng3@\"", null, { humanForcePage });
    await When("I click on login button", null, { humanForcePage });
    await And("I select Duty Manager on the dropdown", null, { humanForcePage });
    await And("I click on Manager details", null, { humanForcePage });
    await And("I click Edit button", null, { humanForcePage });
    await Then("I should see a warning message indicating \"You do not have permission to edit your own profile via Employee Managment.\"", null, { humanForcePage, page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/features/humanforce.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Viewer is able to navigate successfully": {"pickleLocation":"5:2","tags":["@test"]},
  "Verify Employee is able to login with valid credentials": {"pickleLocation":"12:2","tags":["@test"]},
  "Verify Manager is able to search successfully": {"pickleLocation":"20:2","tags":["@test"]},
  "Verify Employee should not be able to navigate at Rostering Manager Page": {"pickleLocation":"31:2","tags":["@test"]},
  "Verify Manager should not be able to edit own profile": {"pickleLocation":"41:2","tags":["@test"]},
};