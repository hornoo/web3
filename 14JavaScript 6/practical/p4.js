    var myRegEx = /[,;\.-]/;
 
 
 var testString = "1,2;3.4-5,6.7";
 
 var stringResult = testString.split(myRegEx);

alert(stringResult); 