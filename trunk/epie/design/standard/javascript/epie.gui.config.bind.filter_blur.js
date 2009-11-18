epie.gui.config.bind.filter_blur_show = function() {
    $.log('starting blur');
    epie.gui.epiegui.getInstance().opts().showOpts("#optsBlur");
}

epie.gui.config.bind.filter_blur_submit = function() {
    var distance = $("#optsBlur .slider:first").slider("value");

    epie.ezconnect.connect.instance().action({
        'action': 'filter_blur',
        'data': {
            'value':distance
        }
    });

    $.log("blur value send : " + distance);
}

epie.gui.config.bind.filter_blur_preview = function() {
    var distance = $("#optsBlur .slider:first").slider("value");
    $.log("blur preview : " + distance);
}