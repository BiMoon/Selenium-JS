var webdriver = require('selenium-webdriver'),
By = webdriver.By, 
until = webdriver.until;

//const { By, Key, until } = webdriver;
var driver;
var url = "https://careerbuilder.vn/en";
class Homepage {
	
	constructor(){
		var caps = {
			    name : 'Login Form Example',
			    build :  '1.0',
			    version : '70',
			    platform : 'Windows 10',
			    browserName : 'firefox',
			
			};
		this.driver = new webdriver.Builder().withCapabilities(caps).build();
		return driver;
	}
	quit(){
		driver.quit();
	}
}
module.exports = new Homepage();

	        /**
	        await driver.getSession().then(function(session){
	            sessionId = session.id_; //need for API calls
	            console.log('Session ID: ', sessionId);
	            console.log('See your test run at: https://careerbuilder.vn/en' + sessionId)

	}
	**/
	/**
	 * 
	 * var url = "https://careerbuilder.vn/en";
	async function OpenPage(url){
	    try
	      {
	        var driver = new webdriver.Builder()
	        .withCapabilities(caps)
	        .build();
	        console.log('Waiting on the browser to be launched and the session to start');
	
	        //await driver.get('https://careerbuilder.vn/en');
	
	        await driver.get(url);
	        await driver.getTitle().then(function(title) {
	                    console.log("The title is: " + title)
	
	          });
	
	        await driver.getSession().then(function(session){
	            sessionId = session.id_; //need for API calls
	            console.log('Session ID: ', sessionId);
	            console.log('See your test run at: https://careerbuilder.vn/en' + sessionId)
	        });
	
	        await driver.findElement(By.linkText('Sign up')).click();
	        await driver.findElement(By.xpath("//button[@class='btn-gradient']")).then(Register(driver));
	        
	        	
	    }
	    catch(err){
	        handleFailure(err, driver)
	    }
	
	}
	
	async function Register(driver){
		    console.log('Waiting on the Sign in');
	
	    try
	      {
	        
	        await driver.findElement(By.xpath("//input[@id='firstname']")).sendKeys("aaa");
	        await driver.findElement(By.xpath("//input[@id='lastname']")).sendKeys("aaa");
	        await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("aaa");
	        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("aaa");
	        await driver.findElement(By.xpath("//input[@id='confirm_password']")).sendKeys("aaa");
	        await driver.findElement(By.xpath("//button[@class='btn-gradient']")).click()
	        	.then(function(){console.log('Submit Form')});
	    }
	    catch(err){
	        handleFailure(err, driver)
	    }
	
	}
	
	
	OpenPage(url);
	
	function handleFailure(err, driver) {
	     console.error('Something went wrong!\n', err.stack, '\n');
	     driver.quit();
	}

}
module.exports = Homepage;
**/
