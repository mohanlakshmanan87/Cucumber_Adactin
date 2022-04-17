package com.Page_Object_Manager;

import org.openqa.selenium.WebDriver;

import com.pom.adactin.BookingHotel;
import com.pom.adactin.LoginPage;
import com.pom.adactin.Logout;
import com.pom.adactin.RadioButton;
import com.pom.adactin.SearchHotel;

public class Adactin_pagemanager {
	

	public WebDriver driver;
	
	private	LoginPage login;
	
	private SearchHotel hotel;
	
	private RadioButton b;
	
	private BookingHotel book;
	
	private Logout l;
	
	
public Adactin_pagemanager(WebDriver driver2) {
			
			this.driver = driver2;
			
		}
		
    public LoginPage getLogin() {
    	
	if(login==null) {
			
			login = new LoginPage(driver);
		}
    	
	return login;
}

public SearchHotel getHotel() {
	
	if(hotel==null) {
		
		hotel = new SearchHotel(driver);
	}
	
	return hotel;
}

public RadioButton getB() {
	
	if(b==null) {
		
		b = new RadioButton(driver);
	}	
	
	
	return b;
}

public BookingHotel getBook() {
	
	if(book==null) {
		
		book = new BookingHotel(driver);
	}
	
	return book;
}

public Logout getL() {
	
	if(l==null) {
		
		l = new Logout(driver);
	}
	
	return l;
}

	

}
