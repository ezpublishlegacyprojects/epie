epie.ezconnect.prepare = function (prepare_url) {
    epie.ezconnect.connect.instance().reset();
    epie.history().reset();

    epie.ezconnect.connect.instance().prepare({
        'url': prepare_url,
        'success': function(response) {
            $.log('image prepared, now binding');
            $.log('type of response : ' + (typeof response));
            // We achieve setting the values for epie.ezconnect
            epie.ezconnect.connect.instance().set({
                'key': response.key,
                'image_id': response.image_id,
                'image_version': response.image_version,
                'history_version': response.history_version,
                'module_url': response.module_url
            });

            epie.gui.epiegui.getInstance().setImages(response.image_url, response.thumbnail_url);
            epie.gui.config.zoom().init();
        },
        'complete': function() {
            epie.gui.epiegui.getInstance().main().hideLoading();
        }
    });
};

