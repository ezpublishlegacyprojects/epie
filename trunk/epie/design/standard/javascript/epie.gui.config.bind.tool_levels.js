epie.gui.config.bind.tool_levels_show = function() {
    $.log('starting levels');
    epie.gui.epiegui.getInstance().opts().showOpts("#optsLevels");
}

epie.gui.config.bind.tool_levels_submit = function() {
    var r = $("#optsLevels #channelR").slider("value");
    var g = $("#optsLevels #channelG").slider("value");
    var b = $("#optsLevels #channelB").slider("value");
    var a = $("#optsLevels #channelA").slider("value");

    epie.ezconnect.connect.instance().action({
        'action': 'tool_levels',
        'data': {
            'r':r,
            'g':g,
            'b':b,
            'a':a
        }
    });

    $.log("Levels values send : " + r + ' ' + g + ' ' + b + ' ' + a);
}

epie.gui.config.bind.tool_levels_preview = function(channel) {
    var value = $("#optsLevels " + channel).slider("value");
    $("#optsLevels input[name='value']").val(value);
    $.log("value => " + value + " - channel =>" + channel);
}