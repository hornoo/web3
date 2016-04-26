 $(document).ready(function(){
	 
	 
	 $('#btnTest').on("click", addFacnyClass);
	 
	 
 });
 
 function addFacnyClass()
 {
	 $(".royalName").addClass("fancy");
 }
 
 $("#mainList ").addClass("loudBorder");
 
 $("#mainList > li").addClass("loudBorder");
 
 $("div:first").addClass("loudBorder");
 
 $("ul li:first").addClass("loudBorder");
 
 $("li:first-child").addClass("loudBorder");
 
 $("li").children(':first-child').addClass('loudBorder');
 
 $("li:nth-child(2)").addClass('loudBorder');
 
 $("span:contains('Count of Habsburg')").addClass('loudBorder');
 
 $("li:contains('Count of Habsburg')").addClass('loudBorder');
 
 $(".royalName").parent().addClass("loudBorder");