epie.gui.config.bind.menu_close_without_saving = function() {
    if (!epie.gui.epiegui.isInstanciated()) { // TODO: also when the mainwindow is not open/visible
        return;
    }
    
    // TODO: call this when the user leaves the page (ie, fx et chrome)
    if (!confirm('If you leave without saving, all your modifications will be definitely lost')) {
        return;
    }

    $.log('starting quit + no save');

    epie.gui.epiegui.getInstance().desactivateUndo();
    epie.gui.epiegui.getInstance().desactivateRedo();

    epie.ezconnect.connect.instance().action({
        'action': 'no_save_and_quit',
        'success': function(response) {
            //epie.ezconnect.success_default(response);
            epie.gui.epiegui.getInstance().close();
        }
    });

}