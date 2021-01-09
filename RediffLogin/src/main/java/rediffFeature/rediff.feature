 Feature: Rediff login feature
 Scenario Outline: Rediff login functionality
 Given User already on login page
 When  User enter userid "<userid>" and password "<password>"
 Then  Login fails error message displayed
 
 Examples:
 |userid||password|
 |abc||abc123|
 |xyz||xyz123|