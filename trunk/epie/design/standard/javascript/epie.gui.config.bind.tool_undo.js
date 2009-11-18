epie.gui.config.bind.tool_undo = function() {
    epie.history().undo();
    epie.gui.epiegui.getInstance().refreshImages();
}
