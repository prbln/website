			function init()
			{
			nme=document.getElementById('name');
			email=document.getElementById('email');
			pass=document.getElementById('pass');
			uname=document.getElementById('uname');
				
				
			err1=document.getElementById('err1');
			err2=document.getElementById('err2');
			err3=document.getElementById('err3');
			err4=document.getElementById('err4');
			}
			function checkdata()
			{
				var nm =nme.value;
				var em =email.value;
				var pas =pass.value;
				var unm = uname.value;
				
			if(nm.length==0)
			{
				err1.innerHTML="Please Enter Name";
				err1.style.color="red";	
			}
			else
				{	err1.innerHTML="";	}
			
			
			if(em.length==0)
			{
				err2.innerHTML="Please Enter E-mail";
				err2.style.color="red";	
			}
			else
				{	err2.innerHTML="";	}
			
			if(pas.length==0)
			{
				err3.innerHTML="Please Enter Password";
				err3.style.color="red";	
			}
			
			else
				{	err3.innerHTML=" ";	}
				
			
			if(unm.length==0)
			{
				err4.innerHTML="Enter username";
				err4.style.color="red";	
			}
			else if(unm==nm)
			{	err4.innerHTML="Username already exists";
				err4.style.color="red";	
			}
			else
			{	err4.innerHTML=" ";}
		

				}

