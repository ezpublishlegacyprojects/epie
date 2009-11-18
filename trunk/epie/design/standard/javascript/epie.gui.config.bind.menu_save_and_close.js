epie.gui.config.bind.menu_save_and_close = function() {
    if (!epie.gui.epiegui.isInstanciated()) { // TODO: also when the mainwindow is not open/visible
        return;
    }

    $.log('starting save + close');

    epie.ezconnect.connect.instance().action({
        'action': 'save_and_quit',
        'success': function(response) {
            epie.ezconnect.success_default(response);
            epie.gui.epiegui.getInstance().close();

            // update the frontend
        }
    });
}