epie.gui.config.zoom_impl = function() {
    var jImgBlock = $('#main_image');
    var currentZoom = 100;
    var realWidth = 0;
    var realHeight = 0;

    var init = function(imgWidth, imgHeight) {
        jImgBlock.css({
            'width': 'auto',
            'height': 'auto'
        });

        var img = jImgBlock.find('img:first');
        img.css({
            'width': 'auto',
            'height': 'auto'
        });

        img.load(function() {
            realWidth = this.width;
            realHeight = this.height;
            setZoom(currentZoom);
            $(this).css('width', '100%').css('height', '100%');
        })
    }

    var reset = function() {
        realWidth = 0;
        realHeight = 0;
        currentZoom = 100;
        jImgBlock.css('width', 'auto').css('height', 'auto');
        jImgBlock.find('img:first').css('width', 'auto').css('height', 'auto');
    }

    var setZoom = function(zoom) {
        //var oldZoom = currentZoom;
        var selection = null;
        if (epie.gui.selection().isSelectionActive()) {
            selection = epie.gui.selection().zoomedSelection((zoom  * 100) / currentZoom);
            epie.gui.config.bind.tool_select_remove();
        }

        if (zoom < 10 || zoom > 1500) {
            return;
        }

        currentZoom = zoom;

        jImgBlock.css({
            'height': (zoom * realHeight / 100) + 'px',
            'width': (zoom * realWidth / 100) + 'px'
        });

        var gridH = $('#grid').height();

        if ((jImgBlock.height() - 2) < gridH) {
           mt = (gridH - (jImgBlock.height() - 2)) / 2;
           jImgBlock.css('margin-top',  mt + 'px');
        } else {
            jImgBlock.css('margin-top', '0px');
        }

        if (selection != null) {
            epie.gui.config.bind.tool_select(selection);
        }

        $.log('new zoom = ' + zoom + "% on ["+realWidth+" x "+realHeight+"]");
    }

    var zoomAt = function(zoom) {
        $.log(jImgBlock.height())

        setZoom(currentZoom * zoom / 100);
    }

    var reZoom = function(fromCache) {
        var img = jImgBlock.find('img:first');

        jImgBlock.css({
            'height': 'auto',
            'width': 'auto'
        });

        img.css({
            'height': 'auto',
            'width': 'auto'
        });

        $.log('fromcache : "' + typeof fromCache + '"');

        img.load(function() {
            $.log('rezoom from load');

            // this is in case the image has been resized but the load function triggered
            jImgBlock.css({
                'height': 'auto',
                'width': 'auto'
            });

            $(this).css({
                'height': 'auto',
                'width': 'auto'
            });
            realWidth = $(this).width();
            realHeight = $(this).height();

            epie.history().setDimensions(realWidth, realHeight);

            $(this).css({
                'height': '100%',
                'width': '100%'
            });

            setZoom(currentZoom);
        });

        if (fromCache) {
            $.log('rezoom from cache');
            dims = epie.history().getDimensions();

            realWidth = dims.w;
            realHeight = dims.h;

            img.css({
                'height': '100%',
                'width': '100%'
            });

            setZoom(currentZoom);
        }
    }

    var fitScreen = function () {
        var grid = $("#grid");
        if (realWidth / grid.width() >= realHeight / grid.height()) {
            fitWidth();
        } else {
            fitHeight();
        }
    }

    var getZoom = function() {
        return currentZoom;
    }

    var fitWidth = function() {
        jImgBlock.css('width', '100%');

        var newZoom = ((jImgBlock.width() - 2) / realWidth) * 100;

        setZoom(newZoom);
    }

    var fitHeight = function() {
        jImgBlock.css('height', '100%');
        var newZoom = ((jImgBlock.height() - 2) / realHeight) * 100;
        setZoom(newZoom);
    }

    return {
        init:init,
        reset:reset,
        fitWidth:fitWidth,
        fitHeight:fitHeight,
        fitScreen:fitScreen,
        zoom:setZoom,
        zoomAt:zoomAt,
        get:getZoom,
        reZoom:reZoom
    };
}

epie.gui.config.zoom_instance = null;
epie.gui.config.zoom = function() {
    if (epie.gui.config.zoom_instance == null) {
        epie.gui.config.zoom_instance = new epie.gui.config.zoom_impl();
    }

    return epie.gui.config.zoom_instance;
};
