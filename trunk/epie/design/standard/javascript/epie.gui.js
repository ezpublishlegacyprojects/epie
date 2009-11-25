epie.gui.epiegui = function () {
    // constructor gui
    //$.log('constructing epiegui');

    var that = this;
    var mainWindow = null;
    var toolWindow = null;
    var optsWindow = null;
    var variationsBar = null;
    var jWindow = null;
    var initialized = false;

    var hide = function() {
        jWindow.fadeOut('fast');
    };

    var show = function() {
        jWindow.fadeIn('fast');
    }

    var hideGUI = function() {
        toolWindow.hide();
        optsWindow.hide();
        mainWindow.hide();
        variationsBar.hide();

        hide();
    };

    var closeGUI = function() {
        hideGUI();
    }

    var showGUI = function() {
        toolWindow.show();
        mainWindow.show();
        optsWindow.show();
        variationsBar.show();

        show();
    };

    var initBinds = function() {
    // tools and main windows binds are intialized the first time
    // the show method is called on them
    //
    // For opts window, the binds need to be set differently since the content
    // varies
    };

    // Undo/Redo states
    var activateUndo = function() {
        $("#epie_undo").parent("li").addClass("active");
    }
    var desactivateUndo = function() {
        $("#epie_undo").parent("li").removeClass("active");
    }
    var activateRedo = function() {
        $("#epie_redo").parent("li").addClass("active");
    }
    var desactivateRedo = function() {
        $("#epie_redo").parent("li").removeClass("active");
    }

    var initGUI = function() {
        // global functionnalities & effects

        var resizeLi = function(h) {
            $("#epieVariations li").css({
                'height':  h,
                'width': h
            });
        }

        $(".epieBox").hover(function() {
            if (!$(this).data("init")) {
                $(this).data("init", true);
                $(this).draggable({
                    handle: ".topBar"
                });
            }
        });


        $(".closed").parent(".sectionHeader").next(".sectionContent").hide();
        // TODO: move this
        $(".sectionHeader h4").click(function() {
            $(this).parent(".sectionHeader").next(".sectionContent").slideToggle();
            $(this).toggleClass("closed");
        });

        $("#resize").resizable({
            resize: function() {
                $("#grid").css("height", ($(this).height() - 30));
                $("#epieMainWindow").css("width", ($(this).width() + 24));
            },
            minHeight: 400,
            minWidth:400
        });

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

        $("#epieVariations li").click(function () {
            $(this).toggleClass("selected");
            return false;
        });

        $(window).resize(function () {
           $("#epieVariationsBar").css({
                width:'95%',
                top:'auto',
                bottom:0
           });
        });

        $(".detachBox .sep").live("click", function() {
            var optBox = $('#epieOptsWindow');
            $(this).closest(".detachBox").removeClass("detachBox").addClass("attachBox").appendTo(optBox.find(".content"));
            optBox.fadeIn();
            $("#grid").animate({
                marginRight: "0px"
            });
            return false;
        });
        $(".attachBox .sep").live("click", function() {
            $("#grid").animate({
                marginRight: "161px"
            });
            $('#epieOptsWindow').fadeOut().find(".attachBox").removeClass("attachBox").addClass("detachBox").appendTo($("#epieMainWindow .content")).hide().fadeIn();

            return false;
        });
        $('#colorSelector').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelector div').css('backgroundColor', '#' + hex);
                $("#optsRotation input[name='color']").val(hex);
            }
        });
    };

    var init = function () {
        initBinds();
        initGUI();

        mainWindow = new epie.gui.main_window();
        toolWindow = new epie.gui.tools_window();
        optsWindow = new epie.gui.opts_window();
        variationsBar = new epie.gui.variations_bar();

        jWindow = $("#epieMainContainer");
        initialized = true;
    };

    // public methods

    // opens the gui
    // prepare_url is the url to call so
    // the backend prepares the image to be edited (see module/epie/prepare.php)
    var open = function(prepare_url) {
        if (initialized == false) {
            init();
        }
        showGUI();

        epie.ezconnect.prepare(prepare_url);
    }

    var refreshImages = function() {
        mainWindow.updateImage();
        optsWindow.updateImage();
    }

    var setImages = function(image, thumb) {
        if (image != null && thumb != null)
            epie.history().add(image, thumb);
        refreshImages();
    }

    // loads an image in the interface
    // TODO: should this be in the mainwindow class? or should this do some things before
    // calling actions on the main windwo ? (same for nload)
    var load = function() {
    }

    // unloads an image
    var unload = function() {
    }

    // closes the interface
    var close = function() {
        unload();
        closeGUI();
    }

    var getMainWindow = function() {
        return mainWindow;
    }

    var getToolWindow = function() {
        return toolWindow;
    }

    var getOptsWindow = function() {
        return optsWindow;
    }

    var getJWindow = function() {
        return jWindow;
    }

    //$.log('construction done');

    return {
        open:open,
        close:close,
        load:load,
        unload:unload,

        // These methods return the instance of the corresponding window
        main:getMainWindow,
        tools:getToolWindow,
        opts:getOptsWindow,
        // returns jQuery dom element of the container of all three windows
        jWindow:getJWindow,
        setImages:setImages,
        refreshImages:refreshImages,

        // ui actions
        activateUndo:activateUndo,
        activateRedo:activateRedo,
        desactivateUndo:desactivateUndo,
        desactivateRedo:desactivateRedo
    }

};

// static attributes
epie.gui.epiegui.instance = null;

// static methods
epie.gui.epiegui.getInstance = function() {
    if (this.instance == null) {
        this.instance = new epie.gui.epiegui();
    }

    //$.log('kik l instance => ' + this.instance)
    return this.instance;
}

// returns true if the gui object exists
epie.gui.epiegui.isInstanciated = function() {
    return (this.instance != null);
}


