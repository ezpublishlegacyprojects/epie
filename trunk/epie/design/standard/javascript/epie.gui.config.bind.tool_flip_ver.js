epie.gui.config.bind.tool_flip_ver = function() {
    $.log('starting vertical flip');

    epie.ezconnect.connect.instance().action({
        'action': 'tool_flip_ver'
    });
}