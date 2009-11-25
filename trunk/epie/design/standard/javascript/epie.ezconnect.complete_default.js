epie.ezconnect.complete_default = function(result) {
    epie.gui.epiegui.getInstance().main().hideLoading();
    
    epie.gui.epiegui.getInstance().activateUndo();

    if (epie.history().hasSuccessor()) {
        epie.gui.epiegui.getInstance().activateRedo();
    } else {
        epie.gui.epiegui.getInstance().desactivateRedo();
    }
}