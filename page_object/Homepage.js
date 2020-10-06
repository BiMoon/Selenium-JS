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


