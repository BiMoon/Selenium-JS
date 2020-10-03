var page = require('../page_object/page.js');
var homepage = require('../page_object/Homepage.js');
var webdriver = require('selenium-webdriver'),By = webdriver.By, until = webdriver.until;

var driver = homepage.driver;

async function test_invalid_user(){
	var result = "";
	
    console.log('Waiting on the Sign in');
	var open = page.OpenPage('https://careerbuilder.vn/en');
	
	var login = page.Login(); 
	
	var user = page.Senduser('4.com@homeabc.com');
	
	var pass = page.Sendpass('123456789');
	
	let submit = page.Submit();
	
	driver.sleep(15000).then(async function() {
		try
		{
			await driver.findElement(By.className("hassuser"));
			//await console.log ("login ok");
			result = "FAILED";
			console.log ("TEST CASE:", result);
		} 
		catch(err){
	        //console.log ("cannot login");
	        result = "PASSED"
	        console.log ("TEST CASE:", result);	
	    }

	});
    
}

test_invalid_user();

/**


function test_invalid_username(){

	var open = page.OpenPage('https://careerbuilder.vn/en');
	
	var login = page.Login(); 
	
	var user = page.Senduser('abcd1aa@a.com');
	
	var pass = page.Sendpass('1234567');
	
	var submit = page.Submit().then(function(){
		driver.sleep(2000).then(function() {
			driver.getTitle().then(function(title) {	        
				console.log("The title is: " + title)
                });
      });
	});
    
}

**/



//var open = page.OpenPage('https://careerbuilder.vn/en');
//var login = page.Login(); 
//var user = page.Senduser('abcd1aa@a.com');
//var pass = page.Sendpass('1234567');
//var submit = page.Submit();
