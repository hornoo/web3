 

 var signUpForm;
 
window.onload = setVars;
 
 
 function setVars()
 {
	 signUpForm = document.contactForm;
	 signUpForm.addEventListener("submit",checkFormInput);
	 
	 //use below method to submit else form continues to submit and focus is los on missing element in real world.
	 //signUpForm.onsubmit = checkFormInput;
 }
 
 
  function checkFormInput(e){
	 
	 e.preventDefault();
	 
	 var nameInput = signUpForm.elements["contactName"];
	 var genRadio = signUpForm.elements["gender"];
	 var ageDropDown = signUpForm.elements["age"];
	 var tAndC = signUpForm.elements["terms"];
	 
	 var output = document.getElementById("output");
	 
	 if(!TextFieldInputOk(nameInput))
	 {
		 alert("Please enter a name"); 
		 return false;
	 }else if(!checkGroupInput(genRadio))
	 {
		alert("Please select Gender"); 
		 return false;
	 }else if(!TextFieldInputOk(ageDropDown))
	 {
		 alert("Please select age"); 
		 return false;
	 }else if(!checkGroupInput(tAndC))
	 {
		 alert("Please read terms and conditons then agree");
		 return false;
		 
	 }else
	 {
		 output.innerHTML = nameInput.value;
		 return true;
	 }
	  
 }
 
 
 
 
 function checkGroupInput(inputGroup)
 {	 
 
	if(inputGroup.length == null)
	{
		
		if(inputGroup.checked)
		{
			return true;
		}else
		{
			inputGroup.focus();
			return false;
		}
		
	}else
	{
 
	 for (var i = 0; i < inputGroup.length; i++)
	 {
			 if(inputGroup[i].checked)
			 {
				 return true;
			 }
	 }
	 
	 inputGroup[0].focus();
	 
	 return false;
	}
	 
 }
 
 function TextFieldInputOk(inputField)
 {
	 
	 if(inputField.value == "")
	 {
		 
		 inputField.focus();
		 return false;
		 
	 }
	 else
	 {
		 return true;
	 }
	 
	 
	 
 }