epie.gui.main_window = function() {
    var jWindow = null;
    var initialized = false;

    // returns the jQuery Dom element corresponding to
    // the window
    var getJWindow = function() {
        return jWindow;
    };

    var setBinds = function () {
        $.each(epie.gui.config.bindings.main_window, function() {
            var config = this;
            item = $(config.selector);

            item.click(function () {
                config.click();
                return false;
            });

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

    var init = function() {
        setBinds();
        jWindow = $("#epieMainWindow");
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

    var updateImage = function() {
        var currentImage = epie.history().current();
        if (currentImage) {
            img = $("<img></img>").attr("src", currentImage.image + "?" + currentImage.mixed)
            .attr("alt", "");
            jWindow.find("#grid").html(img);
        }
    }

    var showLoading = function() {
        $("#loadingBar").fadeIn();
    };
    var hideLoading = function() {
        $("#loadingBar").fadeOut();
    }

    return {
        jWindow:getJWindow,
        show:show,
        hide:hide,
        updateImage:updateImage,
        hideLoading:hideLoading,
        showLoading:showLoading
    };
};
