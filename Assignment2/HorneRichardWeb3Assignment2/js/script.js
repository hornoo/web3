//your code for Assignment 2 goes here

//Set global variables
var emailRegex = /.+@.+\..+/;
var taxJsonLocation = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";

//set variables for animation
var mainCanvas;
var mainContext;
var xlocation;
var packageShipmentImage = new Image();

//Wait for page to load before setting up event handlers and instantiating global variables where required.
$(document).ready(function(){

    //assigning methods to run when the submit button is clcked ont he form.
    $('form').on("submit", function (e) {
        //stop the form reloading when the submit button is clicked.
        e.preventDefault();
        //this stops everything getting executed twice.
        e.stopImmediatePropagation();

        //entry point to start processing form data.
        processOrderFields();
    })

    //setting up variables fo animation.
    mainCanvas = document.getElementById('myCanvas');
    mainContext = mainCanvas.getContext("2d");
    packageShipmentImage.src = "images/packageShipment.png";

});

//This function process form input, by calling other methods  which make up its functionality.
function processOrderFields() {

    //set up local variables
    var stateDropDownElement = $('#s-state');
    var stateDropDownValue = stateDropDownElement.val();
    var emailInput = $('#email');
    //The shippingType variable gets the next element  to the checked radio button, this is uses later to determine the cost of shipping.
    var shippingType = $('input:radio[name=r_method]:checked').next();
    var totalBottleCount = 0;
    var total = 0;
    var taxRate = 0;

    //check if fields are blank and if so, raise alert and focos on empty field, stop processing form any further.
    // this is done by passing values captured above into methods which then determine if the field is correct and the return a bool.
    if(!TextFieldInputOk(stateDropDownElement))
    {//checking if a shipping state has been selected.
        alert("Please choose your shipping State.");
        return false;
    }else if(!validateEmail(emailInput))
    {//checking if a valid email has been entered
        alert("Please enter a valid E-mail Address.");
        return false;
    } else
    {//if email and state input test ok, create and array of elements from the the element with the id of cart-wine and get all children with the class of item
        // then for each item elemt process the data in it.
        $('#cart-wine > .item').each(function(index, currentElement)
        {
            // get bottle count - use  my parseInt method  to convert the input elements value to an int, store in a variable
            var bottleCount = parseInt($(currentElement).find('input').val(),10);

            // get price of item - use  my getNumericValueFromSelectedElement method (created below) to convert the input elements value to an int, store in a variable
            var currentPrice = getNumericValueFromSelectedElement($(currentElement).find('span'));

            //this checks if bottle count is a int or null, if it is an int it adds to the total bottle count and calculates and adds to the total wine price.
            if(!isNaN(bottleCount)) {
                totalBottleCount += bottleCount;
                total += (bottleCount * currentPrice);
            }

        });

        //once the bottles have been added up, a ajax request is sent to get the tax rates, once ths completes successfully it then runs the call back function, to compute totals and present data.
        $.when(getTax(taxJsonLocation)).done(function(data)
        {
            //from the returned JSON which is now a java script object, get the tax vales and save to variable.
            taxRate = data[stateDropDownValue];
            // pass collected data to calculate the total and present on screen
            calculateTotal(totalBottleCount, shippingType, taxRate, stateDropDownValue, total);
            // run shipping animation.
            startAnimation();
        });
    }


}

//this function calculates the total and presents it to the screen;
function calculateTotal(bottleCount, shippingElement, tax, taxState, totalExTax ) {

    //Create object to store locally
     var localStorageofOrder = {
        numberOfBottlesOrdered : bottleCount,
        StateSelected: taxState
    };
    //stringify object and store locally
    localStorage.purchaseDetails = JSON.stringify(localStorageofOrder);

    //From the passed in shipping element, get numeric value and convert to and int, then store in cariable
    var shippingCostPerBottle =  getNumericValueFromSelectedElement(shippingElement);

    //calculate shipping value
    var totalShippingValue = (bottleCount * shippingCostPerBottle);

    //Create strings to be presented on screen
    var totalBottlesString = "Total Bottles: " + bottleCount;
    var totalShippingString = "Total Shipping: $" + totalShippingValue;
    var taxString = "Tax: " + (tax * 100) + "% (" +taxState + ")";
    var estimateTotal = totalExTax + totalShippingValue + (totalExTax * tax);

    //format estimate total to currency format.
    estimateTotal = estimateTotal.toLocaleString('nzu',{ style: 'currency', currency: 'USD' });

    //get element to display data in.
    var results = $('#results');

    //clear any previous elements from in display element.
    results.empty();

    //append information to display element
    results.append( totalBottlesString + "<br>"  + totalShippingString + "<br>" + taxString);
    // set value of estimate textbox.
    $('#txt-estimate').val(estimateTotal);
}


//this method is passed in and element, it then gets the text from it, finds any numbers int he text and convers them to and int then returns that int.
function getNumericValueFromSelectedElement(inputElement)
{
    //get text from element
    var extractedNumber = inputElement.text();

    //match and return and numbers from text
        extractedNumber = extractedNumber.match(/[\d]+/);
        //check if there where no numbers and set to 0
        if(extractedNumber == null) {
            extractedNumber = 0;
        }else {
            //convert number to and int from a string
            extractedNumber = parseInt(extractedNumber[0], 10);
        }

    return extractedNumber;
}

//this function takes and address of a jason object and retrieves it and returns the object if successful,  if it fails it presents a warning message.
function getTax(jsonAddress) {
    return $.getJSON({url:jsonAddress, error: function(xhr,status,error) {

                alert("There was a issue contacting the server to get the correct tax rate, please try again later. Status: " + status);
            }
            });

}


//This function checks if an email is valid from the passed in element, if no valid it prompts a warning , focuses on element passed in and returns false to what called it.
function validateEmail(emailAddress)
{
    if(emailRegex.test(emailAddress.val()))
    {
        return true;
    }else
    {
        emailAddress.focus();
        return false;
    }
}

//This function checks if an string is valid from the passed in element, if no valid it prompts a warning , focuses on element passed in and returns false to what called it.
function TextFieldInputOk(inputField)
{
    if(inputField.val() == "")
    {

        inputField.focus();
        return false;

    }
    else
    {
        return true;
    }

}

//this sets the start location of the animations locations c axis to 0, then passes in the method to animate the image
function startAnimation() {

    xlocation = 0;
    setInterval(animateImage,50);
}

//This function updates the position and draws the image to the canvas.
function animateImage() {

    mainContext.clearRect(0,0,200,200);

    mainContext.drawImage(packageShipmentImage, xlocation,0);

    xlocation += 1;

    if(xlocation >= 200)
    {
        xlocation = 0;
    }
}