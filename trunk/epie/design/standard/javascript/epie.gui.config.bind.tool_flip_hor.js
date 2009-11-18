epie.gui.config.bind.tool_flip_hor = function() {
    $.log('starting horizontal flip');

    epie.ezconnect.connect.instance().action({
        'action': 'tool_flip_hor'
    });
}