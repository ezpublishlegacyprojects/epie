epie.ezconnect.prepare = function (prepare_url) {
    epie.ezconnect.connect.instance().reset();
    epie.history().reset();

    epie.ezconnect.connect.instance().prepare({
        'url': prepare_url,
        'success': function(response) {
            // TODO: check that the response is an actual JSON
            // otherwise, display a message that advises to remove the debug
            // mode

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
        },
        'complete': function() {
            epie.gui.epiegui.getInstance().main().hideLoading();
        }
    });
};

