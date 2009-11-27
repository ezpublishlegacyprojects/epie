epie.gui.config.bind.tool_undo = function() {
    if (!epie.history().hasAntecedent()) {
        return;
    }

    epie.history().undo();
    epie.gui.epiegui.getInstance().refreshImages();

    if (!epie.history().hasAntecedent()) {
        epie.gui.epiegui.getInstance().desactivateUndo();
    }

    if (epie.history().hasSuccessor()) {
        epie.gui.epiegui.getInstance().activateRedo();
    }

    epie.gui.config.zoom().reZoom(true);
}
