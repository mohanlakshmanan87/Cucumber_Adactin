package com.sd;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.Baseclass_adactin.Base_Class;
import com.Page_Object_Manager.Adactin_pagemanager;
import com.adactin.runner.Test_Runner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Base_Class {
	
	public static WebDriver driver = Test_Runner.driver;
	
	public static Adactin_pagemanager pom = new Adactin_pagemanager(driver);
	
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		
		getUrl("https://adactinhotelapp.com/");
	
	}
	
	/*

	@When("^user Enter The Username in Username Textbox$")
	public void user_Enter_The_Username_in_Username_Textbox() throws Throwable {
		
		String value = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties","username" );
		
	  inputvalueelement(pom.getLogin().getUsername(), value);
	
	}
	
	*/
	
	@When("^user Enter The \"([^\"]*)\" in Username Textbox$")
	public void user_Enter_The_Username_in_Username_Textbox(String Username) throws Throwable {
		
		
	 inputvalueelement(pom.getLogin().getUsername(), Username);
	
	}
	
/*
	@When("^user Enter The Password in Password Textbox$")
	public void user_Enter_The_Password_in_Password_Textbox() throws Throwable {
		
		String value = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties","passwd" );
		
		  inputvalueelement(pom.getLogin().getPassword(), value);
		
		

	}
	*/
	
	@When("^user Enter The \"([^\"]*)\" in Password Textbox$")
	public void user_Enter_The_Password_in_Password_Textbox(String Password) throws Throwable {
		
		  inputvalueelement(pom.getLogin().getPassword(), Password);
		
		

	}

	
	@Then("^user Click On The Login Button And It Navigate To The Hotel Search Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotal_Search_Page() throws Throwable {
		
		clickonElement(pom.getLogin().getlogin());

	}


	
  @When("^user Select The Hotel \"([^\"]*)\" In Dropdown Box$")
   public void user_Select_The_Hotel_In_Dropdown_Box(String Location) throws Throwable {
	  
	  dropdown("byindex", pom.getHotel().getLocation(), "3");
	
		  
}

	@When("^user Select The Hotelname In Dropdown Box$")
	public void user_Select_The_Hotelname_In_Dropdown_Box() throws Throwable {
		
		dropdown("byindex", pom.getHotel().getHotel(), "2");
	
	}
 /*
	@When("^user Select The Roomtype In Dropdown Box$")
	public void user_Select_The_Roomtype_In_Dropdown_Box() throws Throwable {
		
		dropdown("bytext", pom.getHotel().getRoomtype(), "Deluxe");
		
}
	*/
	

@When("^user Select The Roomtype In Dropdown Box \"([^\"]*)\"$")
public void user_Select_The_Roomtype_In_Dropdown_Box(String roomtype) throws Throwable {
	
	dropdown("bytext", pom.getHotel().getRoomtype(), roomtype);
  
}

	@When("^user Select The Number Of Rooms In Dropdown Box$")
	public void user_Select_The_Number_Of_Rooms_In_Dropdown_Box() throws Throwable {
		
		dropdown("byvalue", pom.getHotel().getNumberofrooms(), "5");
	}

	@When("^user Enter The Hotel In Date$")
	public void user_Enter_The_Hotel_In_Date() throws Throwable {
		
		inputvalueelement(pom.getHotel().getCheckindate(), "16/02/2022");
	    
	}

	@When("^user Enter The Hotel Out Date$")
	public void user_Enter_The_Hotel_Out_Date() throws Throwable {
		
		inputvalueelement(pom.getHotel().getCheckoutdate(), "17/02/2022");
	 
	}

	@When("^user Select The Adult Per Room In Dropdown Box$")
	public void user_Select_The_Adult_Per_Room_In_Dropdown_Box() throws Throwable {
		
		 dropdown("byvalue", pom.getHotel().getAdultsperroom(), "2");	
	  
	}

	@When("^user Select The Children Per Room In Dropdown Box$")
	public void user_Select_The_Children_Per_Room_In_Dropdown_Box() throws Throwable {
		
		  dropdown("byindex", pom.getHotel().getChildperroom(), "1");
	 
	}

	@Then("^user Click On The Search Button And It Navigate To The Hotel Select Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigate_To_The_Hotel_Select_Page() throws Throwable {
		
		clickonElement(pom.getHotel().getSearch());
	   
	}

	@When("^user Click On The Hotel Radio Button$")
	public void user_Click_On_The_Hotel_Radio_Button() throws Throwable {
		
		clickonElement(pom.getB().getRadiobutton());
		
		
	   
	}

	@Then("^user Click On The Continue Button And It Navigate To Hotel Booking Page$")
	public void user_Click_On_The_Continue_Button_And_It_Navigate_To_Hotel_Booking_Page() throws Throwable {
		
		clickonElement(pom.getB().getNext());
	    
	}

	@When("^user Enter The Firstname In Firstname Textbox$")
	public void user_Enter_The_Firstname_In_Firstname_Textbox() throws Throwable {
		
		String fname = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties", "firstname");
		
		inputvalueelement(pom.getBook().getFname(), fname);
	    
	}

	@When("^user Enter The Lastname In Lastname Textbox$")
	public void user_Enter_The_Lastname_In_Lastname_Textbox() throws Throwable {
		
		String lname = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties", "lastname");
		 
		inputvalueelement(pom.getBook().getLname(), lname);
	    
	}

	@When("^user Enter The Address in Billing Address Textbox$")
	public void user_Enter_The_Address_in_Billing_Address_Textbox() throws Throwable {
		
		String addr = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties", "address");
		
		inputvalueelement(pom.getBook().getAddress(), addr);
	   
	}

	@When("^user Enter The Creditcard Number In Creditcard Textbox$")
	public void user_Enter_The_Creditcard_Number_In_Creditcard_Textbox() throws Throwable {
		
        String cno = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties", "creditcardno");
		
		inputvalueelement(pom.getBook().getCreditcardno(), cno);
	   
		
}

	@When("^user Select The Creditcard Type In Dropdown Box$")
	public void user_Select_The_Creditcard_Type_In_Dropdown_Box() throws Throwable {
		
		 dropdown("byindex", pom.getBook().getCardtype(), "2");	
		   
	 
	}

	@When("^user Select The CreditCard Expiry Month In Dropdown Box$")
	public void user_Select_The_CreditCard_Expiry_Month_In_Dropdown_Box() throws Throwable {
		
		dropdown("bytext", pom.getBook().getMonth(), "October");
	
	}

	@When("^user Select The Creditcard Expiry Year In Dropdown Box$")
	public void user_Select_The_Creditcard_Expiry_Year_In_Dropdown_Box() throws Throwable {
		
		dropdown("bytext", pom.getBook().getYear(), "2022");
	    
	}

	@When("^user Enter The Credit Card Ccv Number In Ccv Number Textbox$")
	public void user_Enter_The_Credit_Card_Ccv_Number_In_Ccv_Number_Textbox() throws Throwable {
		
		 String cvvno = getproperties("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Adactin.properties", "cvvno");
			
			inputvalueelement(pom.getBook().getCvvno(), cvvno);
	
	}

	@Then("^user Click On The BookNow Button It Navigate To The Booking Confirm Page$")
	public void user_Click_On_The_BookNow_Button_It_Navigate_To_The_Booking_Confirm_Page() throws Throwable {
		
		 clickonElement(pom.getBook().getBooking());
	  
	}

	@Then("^user Click On The Logout Button$")
	public void user_Click_On_The_Logout_Button() throws Throwable {
		
		clickonElement(pom.getL().getLogout());
	    
	}



	@Before
	public static void before_Hooks(Scenario s) {
		
		  String name = s.getName();
		  
		  System.out.println("Scenario Name:"+ name);
		

	}

   @After
     public static void after_Hooks(Scenario s) throws IOException {
	   
	   if (s.isFailed()) {
		   
		   filehandler("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin\\Screenshot")  ;
		
		
	}
	   
	   String status = s.getStatus();
	   
	   System.out.println("Scenario Status:" + status);
	   

	}

}

	
	
	
	
	
	
	
	


