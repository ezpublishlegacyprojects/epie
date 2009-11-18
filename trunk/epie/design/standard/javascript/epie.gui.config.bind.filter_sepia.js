epie.gui.config.bind.filter_sepia = function() {
    $.log('starting sepia filter');

    epie.ezconnect.connect.instance().action({
        'action': 'filter_sepia'
    });
}