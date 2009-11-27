epie.gui.config.bind.tool_crop = function () {

    if (!epie.gui.selection().isSelectionActive()) {
        epie.gui.config.bind.tool_select({
            x:0,
            y:0,
            w:100,
            h:100
        });
    } else {
        epie.gui.config.bind.tool_select_remove();
        epie.ezconnect.connect.instance().action({
            'action': 'tool_crop'
        });
    }

}