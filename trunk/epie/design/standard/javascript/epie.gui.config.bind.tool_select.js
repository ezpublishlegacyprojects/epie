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