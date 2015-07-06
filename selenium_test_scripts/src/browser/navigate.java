package browser;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.BeforeTest;

public class navigate {
  public WebDriver driver=null;

  @BeforeTest
  public void OpeningBrowser() throws IOException
  {
    Properties prop=new Properties();	

    FileInputStream fis=new FileInputStream("//home//jenkins//DrugReport//selenium_test_scripts//src//browser//datadriven.properties");
    prop.load(fis);
    if (prop.getProperty("browser").equals("firefox"))
    {
      driver =new FirefoxDriver();
    }
    else if (prop.getProperty("browser").equals("chrome"))
    {
      driver =new ChromeDriver();
    }
    else
    {
      driver =new InternetExplorerDriver();
    }
    driver.get(prop.getProperty("url"));
    driver.manage().window().maximize();
  }
}
