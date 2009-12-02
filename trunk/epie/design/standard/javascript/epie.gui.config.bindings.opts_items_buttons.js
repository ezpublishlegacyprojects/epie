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
    {
        'selector':    '#optsWatermarks .epie-watermark-image',
        'click':           epie.gui.config.bind.tool_place_watermark
    },
    {
        'selector':     '#optsWatermarks button.submit',
        'click':           epie.gui.config.bind.tool_watermark_submit
    },
    {
        'selector':     '#optsWatermarksPositions button',
        'click':            epie.gui.config.bind.tool_watermark_set_pos
    }
];