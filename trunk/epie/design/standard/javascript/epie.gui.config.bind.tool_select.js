epie.gui.config.bind.tool_select_api = null;

var kik;

epie.gui.config.bind.tool_select = function(selection) {
    if (epie.gui.config.bind.tool_select_api != null) {
        if (selection != null) {
            epie.gui.config.bind.tool_select_api.setSelect([selection.x, selection.y,
                selection.x + selection.w, selection.y + selection.h])
            epie.gui.selection().set(selection);
        }
        return;
    }
    epie.gui.config.bind.tool_select_api  = $.Jcrop("#main_image img:first", {
        onSelect: epie.gui.selection().set,
        onChange: epie.gui.selection().set
    });
    
    if (selection != null) {
        epie.gui.config.bind.tool_select_api.setSelect([selection.x, selection.y,
            selection.x + selection.w, selection.y + selection.h])
        epie.gui.selection().set(selection);
    }
}

epie.gui.config.bind.tool_select_remove = function (){
    if (epie.gui.config.bind.tool_select_api  != null) {
        epie.gui.config.bind.tool_select_api.destroy();
        epie.gui.selection().deactivate();
        epie.gui.config.bind.tool_select_api = null;
    }
}