epie.gui.config.bind.tool_select = function() {
    img = $("#main_image img:first");

    img.Jcrop({
        onSelect: epie.gui.selection().set,
        onChange: epie.gui.selection().set
    });
}