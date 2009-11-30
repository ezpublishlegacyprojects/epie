// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: Ep Image Editor extension for eZ Publish
// SOFTWARE RELEASE: 0.1 (preview only)
// COPYRIGHT NOTICE: Copyright (C) 2009 eZ Systems AS
// SOFTWARE LICENSE: GNU General Public License v2.0
// NOTICE: >
//   This program is free software; you can redistribute it and/or
//   modify it under the terms of version 2.0  of the GNU General
//   Public License as published by the Free Software Foundation.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of version 2.0 of the GNU General
//   Public License along with this program; if not, write to the Free
//   Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//   MA 02110-1301, USA.
//
//
// ## END COPYRIGHT, LICENSE AND WARRANTY NOTICE ##

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