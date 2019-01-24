$(document).ready(function() {
	checkSize();
	$(window).resize(checkSize);
	$(".menu").click(function() {
		$(".social").slideToggle('fast');
		$(".navbuttons").slideToggle('fast');
	});
});

function checkSize(){
	if ($(window).width() < 700){
		$(".navbuttons").hide();
		$(".menu-row").show();
		$(".menu").removeClass("change");
	} else {
		$(".menu-row").hide();
		$(".navbuttons").show();
	}
}