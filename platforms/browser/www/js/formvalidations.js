function registrationForm()
	{

		var name= document.getElementById("name").value;
		var email= document.getElementById("email").value;
		var mobile= document.getElementById("mobile").value;
		var pwd= document.getElementById("password").value;			
		var type= document.getElementsByName("type").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var digits = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(mobile=='')
		{
			alert('Please enter the mobile number.');
		}
		else if(!digits.test(mobile))
		{
			alert('Mobile number required only digits');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(pwd.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for registering!');
			   // Redirecting to other page or webste code. 
			   window.location = "./views/success.html"; 
		}
	}