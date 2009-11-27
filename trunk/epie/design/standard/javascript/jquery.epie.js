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

    $.fn.freeze = function (opacity) {
        var params = $.extend({
            opacity:0.6
        },
        opacity
        );
        function freeze(j) {
            j.css("opacity", params.opacity);
        }
        return this.each(function() {
            freeze($(this));
        })
    }

    $.fn.unfreeze = function (opacity) {
        var params = $.extend({
            opacity:1
        },
        opacity
        );
        function unfreeze(j) {
            j.css("opacity", params.opacity);
        }
        return this.each(function() {
            unfreeze($(this));
        })
    }

})(jQuery);

$(document).ready(function() {
    $(".epieEditButton").epie();
})
