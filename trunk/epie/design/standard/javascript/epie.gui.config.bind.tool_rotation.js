epie.gui.config.bind.tool_rotation_show = function() {
    $.log('starting rotation');
    epie.gui.epiegui.getInstance().opts().showOpts("#optsRotation");
}

epie.gui.config.bind.tool_rotation_submit = function() {
    var angle = $("#optsRotation input[name='angle']").val();
    var color = $("#optsRotation input[name='color']").val();
    var cw = $("#optsRotation input[name='clockwise']:first").attr('checked');
    if (cw) {
        cw = "yes";
    } else {
        cw = 'no';
    }

    epie.ezconnect.connect.instance().action({
        'action': 'tool_rotation',
        'data': {
            'angle':angle,
            'color':color,
            'clockwise': cw
        }
    });

    $.log("rotation value send : " + angle);
}

epie.gui.config.tool_rotation = function(angle) {
    var color = $("#optsRotation input[name='color']").val();

    epie.ezconnect.connect.instance().action({
        'action': 'tool_rotation',
        'data': {
            'angle':angle,
            'color':color
        }
    });

    $.log("rotation value send : " + angle);
}

epie.gui.config.bind.tool_rotation_slide = function(value) {
    $("#optsRotation input[name='angle']").val(value);
}

epie.gui.config.bind.tool_rotation_preview = function() {
    var angle = $("#optsRotation .slider:first").slider("value");
    $("#optsRotation input[name='angle']").val(angle);
    $.log("rotation preview : " + angle);
}