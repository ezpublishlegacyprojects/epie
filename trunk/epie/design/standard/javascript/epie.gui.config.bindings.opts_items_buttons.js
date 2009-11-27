epie.gui.config.bindings.opts_items_buttons = [
    {
        'selector':     '#optsBlur button',
        'click':        epie.gui.config.bind.filter_blur_submit
    },
    {
        'selector':     '#optsRotation button',
        'click':        epie.gui.config.bind.tool_rotation_submit
    },
    {
        'selector':     '#optsLevels button',
        'click':        epie.gui.config.bind.tool_levels_submit
    },
    {
        'selector':     '#optsSaturation button',
        'click':        epie.gui.config.bind.tool_saturation_submit
    },
    {
        'selector':     '#optsRotation #epie_rotation_left',
        'click':        function() { epie.gui.config.tool_rotation(90) }
    },
    {
        'selector':     '#optsRotation #epie_rotation_right',
        'click':        function() { epie.gui.config.tool_rotation(270) }
    },
    {
        'selector':     '#optsZoom #zoomIn',
        'click':        epie.gui.config.tool_zoom_in
    },
    {
        'selector':     '#optsZoom #zoomOut',
        'click':        epie.gui.config.tool_zoom_out
    },
    {
        'selector':     '#optsZoom #fitOnScreen',
        'click':        epie.gui.config.tool_zoom_fit_on_screen
    },
    {
        'selector':     '#optsZoom #actualPixels',
        'click':        epie.gui.config.tool_zoom_actual_pixels
    },
    ];