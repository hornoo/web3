function init()
{

$('#originCity').autocomplete({
	source: ["Dunedin","Christchurch","Auckland"]
});


$('#destinationCity').autocomplete({
	source: ["Dunedin","Christchurch","Auckland"]
});

$('#datepicker').datepicker();

$('#resizable').resizable();

$('#button').click(function(){
	
	$('#resizable').effect("explode","slow");

	});

}

window.onload = init;
