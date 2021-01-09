package rediffStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RediffStepDefinition {
	
	WebDriver driver;
	@Given("^User already on login page$")
	public void user_already_on_login_page() {
	    System.setProperty("webdriver.chrome.driver", "C://chromedriver_win32 (9)//chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("https://mail.rediff.com/cgi-bin/login.cgi");
	}

	@When("^User enter userid \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enter_userid_and_password(String userid, String password)  {
		
		driver.findElement(By.id("login1")).sendKeys(userid);
	   driver.findElement(By.id("password")).sendKeys(password);
	   driver.findElement(By.name("proceed")).click();
	   System.out.println(userid);
	   System.out.println(password);
	}

	@Then("^Login fails error message displayed$")
	public void login_fails_error_message_displayed()  {
		
		System.out.println(driver.findElement(By.xpath("//*[@id='div_login_error']/b")).getText());
	  
	}



}
