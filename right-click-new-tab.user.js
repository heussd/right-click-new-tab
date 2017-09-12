// ==UserScript==
// @name right-click-new-tab
// @namespace https://github.com/heussd/right-click-new-tab
// @downloadURL https://github.com/heussd/right-click-new-tab/raw/master/right-click-new-tab.user.js
// @match *://*/*
// @run-at      document-end
// @grant none
// ==/UserScript==
function rightclick(event) {
	event.preventDefault();
	window.open(event.currentTarget, '_blank');
	var win = window.open('','parent');
	win.focus();
	win.close();
}

var myLinks = document.getElementsByTagName('a');
for( var myItem = myLinks.length-1; myItem >= 0; myItem--) {
  var link = myLinks[myItem];
  link.addEventListener("contextmenu", rightclick);
}
