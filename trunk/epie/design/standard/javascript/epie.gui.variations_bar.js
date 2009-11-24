epie.gui.variations_bar = function() {
    var jWindow = null;
    var initialized = false;

    // returns the jQuery Dom element corresponding to
    // the window
    var getJWindow = function() {
        return jWindow;
    };

    var resizeLi = function(h) {
        $("#epieVariations li").css({
            'height':  h,
            'width': h
        });
    };


    var setBinds = function () {
        $.each(epie.gui.config.bindings.variations_bar, function() {
            var config = this;
            item = $(config.selector);

            item.click(function () {
                config.click();
                return false;
            });

            // TODO: decide whether to remove this or add a bottom bar
            if (item.attr('title').length > 0) {
                var p = item.closest('div.epieBox').find('div.bottomBarContent p')
                var oldcontent = p.html()

                item.hover(function (){
                    p.html($(this).attr('title'))
                }, function () {
                    p.html(oldcontent)
                });
            }

        })

    };

    var initMisc = function() {
        var prev = 0;

        $("#epieVariations").hide();

        $("#epieVariationsBar").resizable({
            handles:'n',
            maxHeight: 170,
            minHeight: 5,
            resize: function() {
                var h = ($(this).height() - 40);
                if (prev > 10 && h <= 10) {
                    $("#epieVariations").hide();
                    prev = h;
                } else if (prev <= 10 && h > 10) {
                    $("#epieVariations").fadeIn("slow");
                    prev = h;
                }
                resizeLi(h);
            }
        });

    }

    var init = function() {
        setBinds();
        initMisc();
        jWindow = $("#epieVariationsBar");
    };

    var hide = function () {
        jWindow.fadeOut('fast');
    };

    var show = function () {
        if (!initialized) {
            init();

            initialized = true;
        }
        jWindow.fadeIn('fast');
    }

    return {
        jWindow:getJWindow,
        show:show,
        hide:hide
    };
};
