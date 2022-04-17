package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Baseclass_adactin.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


    @RunWith(Cucumber.class)
	@CucumberOptions(
			
			
			features = "src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
			
			glue = "com.sd",
			
			monochrome= true,
			
			strict = true,
			
			
			plugin = {
					
					"html: Cucumber_Reports/Rep" ,
					"json: Cucumber_Reports/Report.json",
					"com.cucumber.listener.ExtentCucumberFormatter:Cucumber_Reports/Ext.html",
					"pretty"
			}
			
)		
			
		
   public class Test_Runner {	
    	
   public static WebDriver driver;
   
    @BeforeClass
      public static void set_up() {
    	
		 driver = Base_Class.browser_configuration("chrome");

	}
    	
      @AfterClass
      public static void tear_Down() {
    	  
		 Base_Class.close();

	}
			
			
			
			
			
			
			

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
