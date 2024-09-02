import { expect } from '@playwright/test';

export class HumanForcePage {
  constructor(page) {
    this.page = page;
    this.email_box = page.locator("input[id='UserName']");
    this.password_box = page.locator("input[id='Password']");
    this.login_btn = page.locator("button[id='btnSubmit']");
    this.text_field = page.locator("span[class='home-header__info__name']");
    this.link = page.locator("(//a[@href='/product/workforce-management/time-and-attendance/'])[2]");
    this.link2 = page.locator("//span[text()='7 benefits of workforce analytics for business']");
    this.hfAcademy_button = page.locator("div[class='walkme-icon-image-div walkme-launcher-image-div']");
    this.search_field = page.locator("(//input[@type='search'])[1]");
    this.link3 = page.locator("div[title='How do I view or update my details?']");
    this.forbidden_message = page.getByText("//h2[text()]");
    this.home_button = page.locator("a[class='plainButton']");
    this.allRoles = page.locator("select[id='RoleId']");
    this.dutyManager = page.locator("//option[text()='Duty Manager']");
    this.employee = page.locator("(//tr)[2]");
    this.edit_button = page.locator("//button[text()='Edit']");
    this.warning_message = page.getByText("(//div[@class='ui-dialog-content ui-widget-content'])[1]");
    this.welcome_message = page.getByText("(//span[text()])[8]");
    this.viewUpdate_message = page.getByText("//h1[@title]");
  }

  async navigateToUrl(url) {
    await this.page.goto(url);
  }

  async clickHome() {
    await this.home_button.click();
  }

  async clickDutyManager() {
    await this.allRoles.selectOption({label:"Duty Manager"})
  }

  async clickEmployee() {
    await this.employee.click();
  }

  async clickEdit() {
    await this.edit_button.click();
  }

  async clickOnTimeAndAttendance() {
    await this.link.click();
  }

  async clickOn7Benefits() {
    await this.link2.click();
  }

  async clickHowDoIViewOrUpdateDetails() {
    await this.link3.click();
  }

  async clickHfAcademy() {
    await this.hfAcademy_button.click();
  }

  async enterEmailAddress(emailAddress) {
    await this.email_box.fill(emailAddress);
  }

  async enterPassword(password) {
    await this.password_box.fill(password);
  }

  async searchField(search) {
    await this.search_field.fill(search);
  }

  async forbidden_visible(forbidden) {
    await this.forbidden_message.getByText(forbidden);
  }

  async warning_visible(welcome) {
    await this.warning_message.getByText(welcome);
  }

  async viewUpdate_visible(viewUpdate) {
    await this.viewUpdate_message.getByText(viewUpdate);
  }

  async clickOnLogin() {
    await this.login_btn.click();
  }

  async verifyUserLandOnHomePage(logged_url) {
    await expect(this.page).toHaveURL(new RegExp(logged_url));
  }

  async verify7Benefits(benefit_url) {
    await expect(this.page).toHaveURL(new RegExp(benefit_url));
  }

  async verifyViewOrUpdateDetails(update_url) {
    await expect(this.humanForcePage).toHaveURL(new RegExp(update_url));
  }
};
