$(function () {
    "use strict";

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            joinUs();
            return false;
        }
    })
});