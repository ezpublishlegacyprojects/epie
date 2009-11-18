/* This file needs the following files to be included:
 *
 *
 */
var k;
(function($) {
    $.log = function(msg) {
        if(window.console) {
            console.debug(msg);
        } else {
            alert(msg);
        }
    }

    $.fn.epie = function() {
        this.each(function() {
            $(this).click(function() {
                var url = $(this).attr('name');

                if (url.indexOf('epieEdit[') != 0) {
                    $.log('epie edit button invalid');
                    return false;
                }

                url = url.substring(9, url.lastIndexOf(']'));
                e = epie.gui.epiegui.getInstance();
                // opening ui with the url to call to prepare the image to be
                // edited
                e.open(url);
            });
        });
        return this;
    };

})(jQuery);

$(document).ready(function() {
    $(".epieEditButton").epie();
})
