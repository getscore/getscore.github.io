"use strict";
$(function(){
	
	var doc    = $("#navDoc"),
		toggle = $("#docNavToggle"),
		win    = $("#docWindow"),
		items  = $("#docNavItems")

	doc.onePageNav();

	toggle.click(function(){
		items.toggleClass("doc-nav-items-active");
		win.toggle();
	});

	win.click(function(){
		$(this).hide();
		items.removeClass("doc-nav-items-active");
		toggle.removeClass("doc-nav-toggle-active");
	});
	// end nav doc
});