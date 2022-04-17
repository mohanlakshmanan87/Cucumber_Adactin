Feature: Hotel Booking In Adactin Application

@Ad1
Scenario Outline: Login Page

Given user Launch The Application

When user Enter The "<Username>" in Username Textbox

And user Enter The "<Password>" in Password Textbox

Then user Click On The Login Button And It Navigate To The Hotel Search Page

Examples:
|Username|Password|
|Michael|Michael123|
|maddymohan|tendulkar@200|

@Ad2
Scenario: Search Hotel Page

When user Select The Hotel "3" In Dropdown Box

And user Select The Hotelname In Dropdown Box 

And user Select The Roomtype In Dropdown Box "Super Deluxe"

And user Select The Number Of Rooms In Dropdown Box

And user Enter The Hotel In Date

And user Enter The Hotel Out Date

And user Select The Adult Per Room In Dropdown Box

And user Select The Children Per Room In Dropdown Box

Then user Click On The Search Button And It Navigate To The Hotel Select Page

@Ad3
Scenario: Select The Hotel Page

When user Click On The Hotel Radio Button

Then user Click On The Continue Button And It Navigate To Hotel Booking Page

@Ad4
Scenario: Hotel Booking Page

When user Enter The Firstname In Firstname Textbox

And user Enter The Lastname In Lastname Textbox

And user Enter The Address in Billing Address Textbox

And user Enter The Creditcard Number In Creditcard Textbox

And user Select The Creditcard Type In Dropdown Box

And user Select The CreditCard Expiry Month In Dropdown Box

And user Select The Creditcard Expiry Year In Dropdown Box

And user Enter The Credit Card Ccv Number In Ccv Number Textbox

Then user Click On The BookNow Button It Navigate To The Booking Confirm Page

@Ad5
Scenario: Hotel Confirm Page

Then user Click On The Logout Button








