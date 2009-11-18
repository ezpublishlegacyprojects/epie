epie.gui.config.bind.filter_black_and_white = function() {
    $.log('starting black and white');
    epie.gui.epiegui.getInstance().opts().showOpts("#optsGrain");

    epie.ezconnect.connect.instance().action({
        'action': 'filter_bw'
    });
}