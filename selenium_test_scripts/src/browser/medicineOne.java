package browser;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class medicineOne extends navigate {
  @Test
  public void amedicineOne() throws InterruptedException
  {
    driver.findElement(By.cssSelector("input[ng-model='$parent.drugName']")).sendKeys("Advil");
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='chosen.isSerious']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[1]/label/div[1]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-change='reportCheck()']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[2]/label/div[1]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-change='genderCheck()']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[3]/label/div[1]/label/input")).click();
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[4]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromage']")).clear();
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromage']")).sendKeys("1");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='max']")).clear();
    Thread.sleep(2000);

    driver.findElement(By.xpath(".//*[@id='max']")).sendKeys("100");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromyear']")).clear();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromyear']")).sendKeys("1970");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/div/div[3]/input")).clear();
    Thread.sleep(2000);

    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/div/div[3]/input")).sendKeys("2015");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();

    System.out.println("Total adverse reaction : " +driver.findElement(By.cssSelector("h1[class='ng-binding']")).getText());


  }

  @Test
  public void bmedicineTwo() throws InterruptedException {
    driver.get("http://ec2-52-0-103-219.compute-1.amazonaws.com/");
    driver.findElement(By.cssSelector("input[ng-model='$parent.drugName']")).sendKeys("A-HYDROCORT");
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='chosen.isSerious']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[1]/label/div[1]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-change='reportCheck()']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[2]/label/div[2]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-change='genderCheck()']")).click();
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[3]/label/div[2]/label/input")).click();
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[4]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromage']")).clear();
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromage']")).sendKeys("1");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='max']")).clear();
    Thread.sleep(2000);

    driver.findElement(By.xpath(".//*[@id='max']")).sendKeys("100");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromyear']")).clear();
    Thread.sleep(2000);
    driver.findElement(By.cssSelector("input[ng-model='$parent.fromyear']")).sendKeys("1970");
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/div/div[3]/input")).clear();
    Thread.sleep(2000);

    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/div/div[3]/input")).sendKeys("2015");		
    Thread.sleep(2000);
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();
    driver.findElement(By.xpath(".//*[@id='collapseExample']/div/div/div[5]/label/input")).click();

    System.out.println("Total adverse reaction : " +driver.findElement(By.cssSelector("h1[class='ng-binding']")).getText());
    driver.close();
  }
}
