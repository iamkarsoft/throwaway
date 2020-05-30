
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
 $overlay.append($image);


$("body").append($overlay);
  


$("#img-gallery a").click(function(e){
	e.preventDefault();
	var href=$(this).attr("href")
	$overlay.show();
	$image.attr("src","https://picsum.photos/200/200");
});

$($overlay).click(function(){
	$overlay.hide();
})