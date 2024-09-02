@test
Feature: HumanForce Tests

	#User Story #1 - Easy
	Scenario: Verify Viewer is able to navigate successfully
	 Given I navigate to "https://www.humanforce.com/"
	 And Navigate to Time and Attendance Page
	 When I click on 7 benefits of workforce analytics for business article Link
	 Then I should verify user is able to navigate successfully and url contains "/7-benefits-of-workforce-analytics-for-business/"

	#User Story #2 - Easy
	Scenario: Verify Employee is able to login with valid credentials
	 Given I navigate to "https://qatestchallenge2.humanforce.io/"
	 And I enter Employee Code "EMP01"
	 And I enter password "Q@T3chCh4lleng3@"
     When I click on login button
	Then I should see a welcome message indicating "Hello Wade"

	#User Story #3 - Medium
	Scenario: Verify Manager is able to search successfully
	 Given I navigate to "https://qatestchallenge2.humanforce.io/"
	 And I enter Manager Code "MGR01"
	 And I enter password "Q@T3chCh4lleng3@"
     When I click on login button
	 And I click on HF Academy button
	 And I search "Personal"
	 And I click on How do I view or update my details link
	 Then I should see the title indicating "How do I view or update my details?"

	#User Story #6 - Easy
	Scenario: Verify Employee should not be able to navigate at Rostering Manager Page
	 Given I navigate to "https://qatestchallenge2.humanforce.io/RosteringManager/"
	 And I enter Employee Code "EMP01"
	 And I enter password "Q@T3chCh4lleng3@"
     When I click on login button
	 And I should see a message indicating "Sorry, that is not currently allowed..."
	 And I click Home button
	 Then I should verify user is able to login and url contains "/Home/"

	#User Story #8 - Easy
	Scenario: Verify Manager should not be able to edit own profile
	 Given I navigate to "https://qatestchallenge2.humanforce.io/EmployeeManagement/"
	 And I enter Manager Code "MGR01"
	 And I enter password "Q@T3chCh4lleng3@"
     When I click on login button
	 And I select Duty Manager on the dropdown
	 And I click on Manager details
	 And I click Edit button
	 Then I should see a warning message indicating "You do not have permission to edit your own profile via Employee Managment."