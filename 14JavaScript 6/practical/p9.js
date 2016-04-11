 function checkEmailValid(inputAddress)
 {
	 var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 
	 return regExp.test(inputAddress);
 }