package com.pom.adactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logout {

	public  WebDriver driver;
	
	@FindBy(id="logout")
	private WebElement logout ;
	
	
	
	 public WebElement getLogout() {
		return logout;
	}



	public Logout(WebDriver driver2) {

			this.driver= driver2;
			
			PageFactory.initElements(driver, this);

	}
	
	
	
	
	
}

