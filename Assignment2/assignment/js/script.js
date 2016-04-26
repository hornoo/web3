//your code for Assignment 2 goes here

var emailRegex = /.+@.+\..+/;



$(document).ready(function(){

    $('form').on("submit", function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        processOrder();
    })



});


function processOrder() {

    var stateDropDownValue = $('#s-state');
    var emailInput = $('#email');
    var shipping = $('input:radio[name=r_method]:checked').val();
    var totalbottleCount = 0;
    var total = 0;
    var shipping = 0;

    $('#cart-wine > .item');

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
                totalbottleCount += bottleCount;
                total += (bottleCount * currentPrice);
            }

        });

        console.log(totalbottleCount);
        console.log(total);
    }




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