epie.gui.config.bind.filter_black_and_white = function() {
    $.log('starting black and white');

    epie.ezconnect.connect.instance().action({
        'action': 'filter_bw'
    });
}