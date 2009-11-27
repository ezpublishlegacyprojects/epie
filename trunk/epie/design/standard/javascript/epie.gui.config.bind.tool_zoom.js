epie.gui.config.bind.tool_zoom_show = function () {
    epie.gui.epiegui.getInstance().opts().showOpts("#optsZoom");    
}

epie.gui.config.tool_zoom_in = function() {
    epie.gui.config.zoom().zoomAt(115);
}

epie.gui.config.tool_zoom_out = function() {
    epie.gui.config.zoom().zoomAt(90);
}

epie.gui.config.tool_zoom_fit_on_screen = function () {
    epie.gui.config.zoom().fitScreen();
}

epie.gui.config.tool_zoom_actual_pixels = function () {
    epie.gui.config.zoom().zoom(100);
}