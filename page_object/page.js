var homepage = require('./Homepage.js');
var webdriver = require('selenium-webdriver'),
By = webdriver.By, until = webdriver.until;
var driver = homepage.driver;

class page{
	OpenPage(url){
	        
	        driver.get(url);
	        driver.sleep(2000).then(function() {
				  
				  console.log("PAGE ", url ," .....is opening");
				  
				});
	        
	        	
	}
	Login (){
		
		let log_in = driver.findElement(By.linkText('Sign in'));
        driver.wait(until.elementIsVisible(log_in),100);
		
        log_in.click();
        
	}	
    Senduser(user){
		driver.sleep(1000).then(function() {
			  driver.findElement(By.xpath("//input[@name='username']")).sendKeys(user);
			  
			});
		
    }
	
   Sendpass(pass) { 
	   driver.sleep(1000).then(function() {
			  
			  driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pass);
			  
			});
	   
    }
   Submit(){
	   driver.sleep(1000).then(function() {
			  driver.findElement(By.xpath("//button[@type='submit']")).click();
			  
			});
	   
	    
   }
   quit(){
	   driver.quit();
   }
}

module.exports = new page();

//OpenPage('https://careerbuilder.vn/en');