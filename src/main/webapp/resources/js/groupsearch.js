$(function () {
	$(".search").each(function () {
		var self = $(this);
		var div = self.children(".field");
	
		self.click(function () {
				self.addClass("open");
				if (matchMedia("screen and (min-width: 500px)").matches) {
					// 1024px 이상에서 사용할 JavaScript
				div.css({
					width: "200px"
				});
				}else{
					div.css({
						width: "90px"
					});
				}
				div.children("input").css({
					visibility: "visible"
				});
				setTimeout(function () {
					self.find('input').focus();
					self.find('input').on('keyup', function () {
						self.toggleClass("loading",
								(self.find('input').val().toString().length > 3));
						console.log("ss" + (self.find('input').val().toString().length > 3));
					});
				}, 750);
			});

		$(document).click(function (e) {
			if (!$(e.target).is(self) && !jQuery.contains(self[0], e.target)) {
				self.removeClass('open loading');
				setTimeout(function () {
					div.children("input").css({
						visibility: "hidden"
					});
					div.css({
						width: "0"
					});
					self.find('input').val('');
				}, 400);
			}
		});
	});
});