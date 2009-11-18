epie.gui.config.bind.tool_saturation_show = function() {
    $.log('starting saturation');
    epie.gui.epiegui.getInstance().opts().showOpts("#optsSaturation");
}

epie.gui.config.bind.tool_saturation_submit = function() {
    var sat = $("#optsSaturation input[name='saturation']").val();

    epie.ezconnect.connect.instance().action({
        'action': 'tool_saturation',
        'data': {
            'saturation':sat
        }
    });

    $.log("saturation value send : " + sat);
}

epie.gui.config.bind.tool_saturation_preview = function() {
    var sat = $("#optsSaturation .slider:first").slider("value");
    $("#optsSaturation input[name='saturation']").val(sat);
    $.log("saturation preview : " + sat);
}