epie.gui.config.bind.tool_redo = function() {
    epie.history().redo();
    epie.gui.epiegui.getInstance().refreshImages();
    if (epie.history().hasAntecedent()) {
        epie.gui.epiegui.getInstance().activateUndo();
    } else {
        epie.gui.epiegui.getInstance().desactivateUndo();
    }
    if (epie.history().hasSuccessor()) {
        epie.gui.epiegui.getInstance().activateRedo();
    } else {
        epie.gui.epiegui.getInstance().desactivateRedo();
    }
}