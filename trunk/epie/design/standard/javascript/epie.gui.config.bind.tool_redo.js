epie.gui.config.bind.tool_redo = function() {
    epie.history().redo();
    epie.gui.epiegui.getInstance().refreshImages();
}