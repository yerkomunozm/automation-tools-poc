package com.seleniumDemo.main;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GoogleSearchTest {

	private WebDriver driver;

	@Before
	public void setUp() {

		System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.google.com/");

	}

	@Test
	public void testGooglePage() {
		WebElement searchbox = driver.findElement(By.name("q"));

		searchbox.clear();
		searchbox.sendKeys("quality-stream Introducci�n a la Automatizaci�n de Pruebas de Software");
		searchbox.submit();

		driver.manage().timeouts().implicitlyWait(16, TimeUnit.SECONDS);

		System.out.println("TITULO:" + driver.getTitle());
		
		assertEquals("quality-stream Introducci�n a la Automatizaci�n de Pruebas de Software - Buscar con Google", 
				driver.getTitle());
		
	}

	@After
	public void tearDown() {
		driver.quit();
	}
}
