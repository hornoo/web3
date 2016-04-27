//your code for Assignment 2 goes here

var emailRegex = /.+@.+\..+/;
var taxJsonLocation = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";
var taxRate = 0;


$(document).ready(function(){

    $('form').on("submit", function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        processOrderFields();
    })



});


function processOrderFields() {


    var stateDropDownElement = $('#s-state');
    var stateDropDownValue = stateDropDownElement.val();
    var emailInput = $('#email');
    var shippingType = $('input:radio[name=r_method]:checked').next();
    var totalBottleCount = 0;
    var total = 0;
    var taxRate = 0;


    if(!TextFieldInputOk(stateDropDownElement))
    {
        alert("Please choose your shipping State.");
        return false;
    }else if(!validateEmail(emailInput))
    {
        alert("Please enter a valid E-mail Address.");
        return false;
    } else
    {
        $('#cart-wine > .item').each(function(index, currentElement)
        {

            var bottleCount = parseInt($(currentElement).find('input').val(),10);

            var currentPrice = getNumericValueFromSelectedElement($(currentElement).find('span'));

            if(!isNaN(bottleCount)) {
                totalBottleCount += bottleCount;
                total += (bottleCount * currentPrice);
            }

        });

        console.log(totalBottleCount);
        console.log(total);

        $.when(getTax(taxJsonLocation)).done(function(data)
        {
            taxRate = data[stateDropDownValue];

            console.log(taxRate);
            calculateTotal(totalBottleCount, shippingType, taxRate, stateDropDownValue, total);
        });
    }


}

function calculateTotal(bottleCount, shippingElement, tax, taxState, totalExTax ) {



    var shippingCostPerBottle =  getNumericValueFromSelectedElement(shippingElement);
    var totalShippingValue = (bottleCount * shippingCostPerBottle);

    var totalBottlesString = "Total Bottles: " + bottleCount;
    var totalShippingString = "TotalShipping: $" + totalShippingValue;
    var taxString = "Tax: " + (tax * 100) + "% (" +taxState + ")";

    var estimateTotal = totalExTax + totalShippingValue + (totalExTax * tax);

    estimateTotal = estimateTotal.toLocaleString('nzu',{ style: 'currency', currency: 'USD' });

    var results = $('#results');

    results.empty();

    results.append( totalBottlesString + "<br>"  + totalShippingString + "<br>" + taxString);

    $('#txt-estimate').val(estimateTotal);
}


function getNumericValueFromSelectedElement(inputElement)
{
    var extractedNumber = inputElement.text();

        extractedNumber = extractedNumber.match(/[\d]+/);
        if(extractedNumber == null) {
            extractedNumber = 0;
        }else {
            extractedNumber = parseInt(extractedNumber[0], 10);
        }

    return extractedNumber;
}

function getTax(jsonAddress) {


    return $.getJSON({url:jsonAddress, error: function(xhr,status,error) {

                alert("There was a issue contacting the server to get the correct tax rate, please try again later. Status: " + status);
            }
            });

}


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