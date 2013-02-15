// shows or hide the menu
var menuOpen = false;
function showhidemenu(e) {
	if (!menuOpen) {
		moveTo = "280dp";
		menuOpen = true;
	} else {
		moveTo = "0";
		menuOpen = false;
	}

	$.appMain.width = Ti.Platform.displayCaps.platformWidth;
	$.appMain.animate({
		left : moveTo,
		duration : 200
	});
}
//

//
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.appMain.width=Ti.Platform.displayCaps.platformWidth;
});
//

$.index.open();
