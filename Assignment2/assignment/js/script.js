//your code for Assignment 2 goes here

var emailRegex = /.+@.+\..+/;
var taxjsonLocation = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";
var taxRate = 0;
var totalBottleCount = 0;
var total = 0;

$(document).ready(function(){

    $('form').on("submit", function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        processOrderFields();
    })



});


function processOrderFields() {

    var stateDropDownValue = $('#s-state');
    var emailInput = $('#email');
    var shippingType = $('input:radio[name=r_method]:checked').val();
    totalBottleCount = 0;
    total = 0;


    if(!TextFieldInputOk(stateDropDownValue))
    {
        alert("Please choose your shipping State.")
        return false;
    }else if(!validateEmail(emailInput))
    {
        alert("Please enter a valid E-mail Address.");
        return false;
    } else
    {
        $('#cart-wine > .item').each(function(index, currentElement)
        {

            var currentPrice = $(currentElement).find('span').text();
            var bottleCount = parseInt($(currentElement).find('input').val(),10);
            currentPrice = currentPrice.match(/[\d]+/);

            currentPrice = parseInt(currentPrice[0],10);

            if(!isNaN(bottleCount)) {
                totalBottleCount += bottleCount;
                total += (bottleCount * currentPrice);
            }

        });

        console.log(totalBottleCount);
        console.log(total);

        $.when(getTax(taxjsonLocation,stateDropDownValue.val())).done(function()
        {
            console.log(taxRate);

        });
    }


}


function getTax(jsonAddress, taxLocation) {


    return $.getJSON({url:jsonAddress, success: function(taxRates)
            {
                taxRate = taxRates[taxLocation];

            }, error: function(xhr,status,error) {

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