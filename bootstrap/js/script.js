$(document).ready(function(){
	
	$('[data-toggle="popover"]').popover({
		html : true,
		container : 'body',
		content : function(){
			var content = $(this).attr("data-popover-content");
			return $(content).children(".popover-body").html();
			
		}
	});
	
	$('#myTabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	$('.carousel').carousel({
		interval : 6000
	});
	
});

