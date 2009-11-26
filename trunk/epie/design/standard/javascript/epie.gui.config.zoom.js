epie.gui.config.zoom_impl = function() {
    var jImgBlock;
    var currentZoom = 100;
    var realImgWidth = 0;
    var realWidth = 0;
    var realHeight = 0;

    var init = function(imgWidth, imgHeight) {
        jImgBlock = $('#main_image');
        jImgBlock.css('width', 'auto').css('height', 'auto');
        var img = jImgBlock.find('img:first');
        img.css('width', 'auto').css('height', 'auto');

        img.load(function() {
            realWidth = this.width;
            realHeight = this.height;
            setZoom(currentZoom);
            img.css('width', '100%').css('height', '100%');
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
        jImgBlock.css('height', (zoom * realHeight / 100) + 'px');
        jImgBlock.css('width', (zoom * realWidth / 100) + 'px');
                $.log('new zoom = ' + zoom);
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
        zoom:setZoom
    };
}

epie.gui.config.zoom_instance = null;
epie.gui.config.zoom = function() {
    if (epie.gui.config.zoom_instance == null) {
        epie.gui.config.zoom_instance = new epie.gui.config.zoom_impl();
    }

    return epie.gui.config.zoom_instance;
};
