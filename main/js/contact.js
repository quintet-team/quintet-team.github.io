$(function () {
    "use strict";

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            contactUs();
            return false;
        }
    })

    $('#join-form').validator();

    $('#join-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            joinUs();
            return false;
        }
    })
});