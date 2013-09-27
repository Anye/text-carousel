(function(window, document, $){
	var tcarousel = function(options){
		$(this).children().each(function(){
			console.log($(this).html());
		});
	}


	$.fn.extend({tcarousel:tcarousel});

}(this, document, jQuery));