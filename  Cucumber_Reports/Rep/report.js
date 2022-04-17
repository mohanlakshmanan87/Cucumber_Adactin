$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cUsername\u003e\" in Username Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"\u003cPassword\u003e\" in Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Michael",
        "Michael123"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "maddymohan",
        "tendulkar@200"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2119500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Michael\" in Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"Michael123\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 7297222600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_Username_in_Username_Textbox(String)"
});
formatter.result({
  "duration": 358144600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_Password_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 177977000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotal_Search_Page()"
});
formatter.result({
  "duration": 489027800,
  "status": "passed"
});
formatter.after({
  "duration": 1546600,
  "status": "passed"
});
formatter.before({
  "duration": 194400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"maddymohan\" in Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"tendulkar@200\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 421957300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maddymohan",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_Username_in_Username_Textbox(String)"
});
formatter.result({
  "duration": 199763800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tendulkar@200",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_Password_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 183071700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotal_Search_Page()"
});
formatter.result({
  "duration": 1139730800,
  "status": "passed"
});
formatter.after({
  "duration": 191700,
  "status": "passed"
});
formatter.before({
  "duration": 274900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel \"3\" In Dropdown Box",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Select The Hotelname In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The Roomtype In Dropdown Box \"Super Deluxe\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select The Number Of Rooms In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Enter The Hotel In Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Hotel Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select The Adult Per Room In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Children Per Room In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Click On The Search Button And It Navigate To The Hotel Select Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "Step_Def.user_Select_The_Hotel_In_Dropdown_Box(String)"
});
formatter.result({
  "duration": 457218300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotelname_In_Dropdown_Box()"
});
formatter.result({
  "duration": 410985500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Super Deluxe",
      "offset": 42
    }
  ],
  "location": "Step_Def.user_Select_The_Roomtype_In_Dropdown_Box(String)"
});
formatter.result({
  "duration": 329210700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_Of_Rooms_In_Dropdown_Box()"
});
formatter.result({
  "duration": 331442800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Hotel_In_Date()"
});
formatter.result({
  "duration": 179714300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Hotel_Out_Date()"
});
formatter.result({
  "duration": 92483800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Adult_Per_Room_In_Dropdown_Box()"
});
formatter.result({
  "duration": 268294000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Children_Per_Room_In_Dropdown_Box()"
});
formatter.result({
  "duration": 327850600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Search_Button_And_It_Navigate_To_The_Hotel_Select_Page()"
});
formatter.result({
  "duration": 995045600,
  "status": "passed"
});
formatter.after({
  "duration": 217700,
  "status": "passed"
});
formatter.before({
  "duration": 214400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Select The Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-the-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user Click On The Hotel Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user Click On The Continue Button And It Navigate To Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Hotel_Radio_Button()"
});
formatter.result({
  "duration": 191711800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Continue_Button_And_It_Navigate_To_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 786892900,
  "status": "passed"
});
formatter.after({
  "duration": 198100,
  "status": "passed"
});
formatter.before({
  "duration": 260900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Hotel Booking Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-booking-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Enter The Firstname In Firstname Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user Enter The Lastname In Lastname Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Enter The Address in Billing Address Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user Enter The Creditcard Number In Creditcard Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user Select The Creditcard Type In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user Select The CreditCard Expiry Month In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user Select The Creditcard Expiry Year In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user Enter The Credit Card Ccv Number In Ccv Number Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user Click On The BookNow Button It Navigate To The Booking Confirm Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Firstname_In_Firstname_Textbox()"
});
formatter.result({
  "duration": 246411000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Lastname_In_Lastname_Textbox()"
});
formatter.result({
  "duration": 159649500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Address_in_Billing_Address_Textbox()"
});
formatter.result({
  "duration": 230253000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Creditcard_Number_In_Creditcard_Textbox()"
});
formatter.result({
  "duration": 186352800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Creditcard_Type_In_Dropdown_Box()"
});
formatter.result({
  "duration": 321169300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_CreditCard_Expiry_Month_In_Dropdown_Box()"
});
formatter.result({
  "duration": 436464500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Creditcard_Expiry_Year_In_Dropdown_Box()"
});
formatter.result({
  "duration": 320750400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Credit_Card_Ccv_Number_In_Ccv_Number_Textbox()"
});
formatter.result({
  "duration": 203689200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_BookNow_Button_It_Navigate_To_The_Booking_Confirm_Page()"
});
formatter.result({
  "duration": 226486100,
  "status": "passed"
});
formatter.after({
  "duration": 171100,
  "status": "passed"
});
formatter.before({
  "duration": 189300,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Hotel Confirm Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-confirm-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@Ad5"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "user Click On The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Logout_Button()"
});
formatter.result({
  "duration": 10743119700,
  "status": "passed"
});
formatter.after({
  "duration": 183500,
  "status": "passed"
});
});