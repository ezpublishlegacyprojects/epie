epie.ezconnect.success_default = function(response) {
    // classic success action is to update the images in the gui
    $.log('success default');

    $.log('typeof result: ' + (typeof response));

    // We put the image and the thumbnail in the gui
    if (response.image_url && response.thumbnail_url) {
        epie.gui.epiegui.getInstance().setImages(response.image_url, response.thumbnail_url);
    }
};