$(function() {

	$(".shadow .window-alert .close").click(function(){
		$(".shadow").hide(300);
	});
	
	$(".ask-alert").click(function(){
		$(".shadow").show(200);
		$(".window-alert").hide();
		$(".ask-window").show();
	});
	
	/*$(".pannel .part3 a.unlocked").click(function(){
		$(".shadow").show(200);
		$(".window-alert").hide();
		$(".unlocked-window").show();
	});*/

});

function scroll_to(classname) {

	s_t = $(document).scrollTop();
	n_t = $("." + classname).offset().top

	if (s_t > n_t) {
		var src_f = setInterval(function() {

			$(document).scrollTop(s_t);
			if (s_t < n_t) {
				s_t -= 100;
				$(document).scrollTop(s_t);
				clearInterval(src_f);
			}
			s_t -= 20;
			// console.log(s_t)
		}, 1)
	} else {
		var src_f = setInterval(function() {

			$(document).scrollTop(s_t);
			if (s_t > n_t) {
				s_t -= 100;
				$(document).scrollTop(s_t);
				clearInterval(src_f);
			}
			s_t += 20;
			// console.log(s_t)
		}, 1)
	}
};


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?19bdcc8b12c110ba4d94c7715668fd1d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

