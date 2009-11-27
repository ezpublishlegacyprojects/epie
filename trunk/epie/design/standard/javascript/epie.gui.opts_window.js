epie.gui.opts_window = function() {
    var jWindow = null;
    var initialized = false;

    // returns the jQuery Dom element corresponding to
    // the window
    var getJWindow = function() {
        return jWindow;
    };

    var setBindsForSliders = function () {
        $.each(epie.gui.config.bindings.opts_items_sliders, function() {
            var config = this;
            var item = $(config.selector);

            item.slider({
                min:config.min,
                max:config.max,
                step:config.step,
                change:function () {
                    if (!epie.gui.epiegui.getInstance().isFrozen()) {
                        config.change();
                    }
                    return false;
                },
                slide:function(event, ui) {
                    config.slide(ui.value);
                }
            });
        });
    };

    var setBindsForButtons = function () {
        $.each(epie.gui.config.bindings.opts_items_buttons, function() {
            var config = this;
            var item = $(config.selector);
            item.click(function() {
                if (!epie.gui.epiegui.getInstance().isFrozen()) {
                    config.click();
                }
                return false;
            });
        });
    };

    var setBinds = function() {
        setBindsForSliders();
        setBindsForButtons();
    };

    var init = function() {
        setBinds();
        jWindow = $("#sideBar");
        hideOptions();
        initialized = true;
    };

    var switchjWindow = function() {
        if (jWindow.is("#sideBar"))
            jWindow = $("#epieOptsWindow");
        else
            jWindow = $("#sideBar");
    }

    var freeze = function() {
        $("button").freeze();
    }
    var unfreeze = function() {
        $("button").unfreeze();
    }

    var hide = function () {
        if (initialized)
            jWindow.fadeOut('fast');
    };

    var hideOptions = function() {
        jWindow.find(".opts").hide();
    };

    var showOpts = function(id) {
        jWindow.find(".opts").hide();
        jWindow.find(id).fadeIn();
    };

    var show = function () {
        if (!initialized) {
            init();
        }
        jWindow.fadeIn('fast');
        showOpts("#optsZoom");
    }

    var updateImage = function() {
        var currentImage = epie.history().current();

        img = $("<img></img>").attr("src", currentImage.thumbnail + "?" + currentImage.mixed)
        .attr("alt", "");

        jWindow.find("#miniature").html(img);
    }

    return {
        jWindow:getJWindow,
        show:show,
        hide:hide,
        showOpts:showOpts,
        switchjWindow:switchjWindow,
        updateImage:updateImage,
        freeze:freeze,
        unfreeze:unfreeze
    };
};
