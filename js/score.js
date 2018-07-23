/*-----------------------------------------------------------------

[sCore Framework]

Organization  : Flamecore
Name Project  : sCore for project final assignment
Version       : 1.0
Last Change   : 22/07/2018 [The beginning]
Github Page   : http://getscore.github.io 
Author        : http://andikachamberlin.github.io
License       : MIT

-------------------------------------------------------------------*/

"use strict";

$(window).on("load", function () {

    var load = $("#load");

    $(load).fadeOut(1000);
});

$(function () {

    // sidebarordion
    var sidebar_list = $("#sidebar-list"),
        sidebar = $(".sidebar-dropdown"),
        sidebar_arrow = $(".sidebar-arrow");

    // click sidebarordion child
    $(sidebar_list).on("click", "li a:not(:only-child)", function (e) {

        // siblings sidebarordion end slide toggle 
        $(this).siblings(sidebar).slideToggle(300);
        // find arrow and active arrow rotate
        $(this).find(sidebar_arrow).toggleClass("sidebar-arrow-active");
        // active hover click
        $(this).toggleClass("sidebar-active");

        return false;
    });

    // sidebar
    var sidebar_btn = $("#sidebar-btn"),
        sidebar = $("#sidebar"),
        sidebar_window = $("#sidebar-window");

    // sidebar btn show sidebar
    $(sidebar_btn).on("click", function () {
        $(sidebar).toggleClass("sidebar-active");
        $(sidebar_window).fadeIn(300);

        return false;
    });

    // window click close
    $(sidebar_window).on("click", function () {
        $(this).fadeOut(300);
        $(sidebar).removeClass("sidebar-active");

        return false;
    });
});