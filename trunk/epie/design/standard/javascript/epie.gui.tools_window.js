epie.gui.tools_window = function() {
    var jWindow = null;
    var initialized = false;

    // returns the jQuery Dom element corresponding to
    // the window
    var getJWindow = function() {
        return jWindow;
    };

    var setBinds = function () {
        $.each(epie.gui.config.bindings.tools_window, function() {
            var config = this;
            item = $(config.selector)
            item.click(function () {
                config.click();
                return false;
            });

            if (config.shortcut) {
                $(config.selector).attr("title", $(config.selector).attr("title") + " (" + config.shortcut + ")");
                $(document).bind('keydown', config.shortcut, function (e) {
                    config.click();
                    e.stopPropagation( );
                    e.preventDefault( );
                    return false;
                } );
            }

            if (item.attr('title') != undefined) {
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

    var init = function() {
        setBinds();
        jWindow = $("#epieToolsWindow");
        initialized = true;
    };

    var hide = function () {
        jWindow.fadeOut('fast');
    };

    var show = function () {
        if (!initialized) {
            init();
        }
        jWindow.fadeIn('fast');
    }

    return {
        jWindow:getJWindow,
        show:show,
        hide:hide
    };
};
