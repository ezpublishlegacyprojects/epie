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

epie.gui.config.bindings.tools_window = [
    {
        'selector':     '#epie_select',
        'click':        epie.gui.config.bind.tool_select,
        'shortcut':     's'
    },
    {
        'selector':     '#epie_undo',
        'click':        epie.gui.config.bind.tool_undo,
        'shortcut':     'ctrl+z'
    },
    {
        'selector':     '#epie_redo',
        'click':        epie.gui.config.bind.tool_redo,
        'shortcut':     'ctrl+y'
    },
    {
        'selector':     '#epie_pot',
        'click':        epie.gui.config.bind.tool_pot,
        'shortcut':     'g'
    },
    {
        'selector':     '#epie_zoom',
        'click':        epie.gui.config.bind.tool_zoom_show,
        'shortcut':     'z'
    },
    {
        'selector':     '#epie_img',
        'click':        epie.gui.config.bind.tool_img,
        'shortcut':     'i'
    },
    {
        'selector':     '#epie_watermark',
        'click':        epie.gui.config.bind.tool_watermark,
        'shortcut':     'w'
    },
    {
        'selector':     '#epie_saturation',
        'click':        epie.gui.config.bind.tool_saturation_show,
        'shortcut':     'a'
    },
    {
        'selector':     '#epie_blackandwhite',
        'click':        epie.gui.config.bind.filter_black_and_white,
        'shortcut':     'b'
    },
    {
        'selector':     '#epie_sepia',
        'click':        epie.gui.config.bind.filter_sepia,
        'shortcut':     'p'
    },/*
    {
        'selector':     '#epie_grain',
        'click':        epie.gui.config.bind.filter_grain,
        'shortcut':     'r'
    },*/
    {
        'selector':     '#epie_flip_hor',
        'click':        epie.gui.config.bind.tool_flip_hor,
        'shortcut':     'h'
    },
    {
        'selector':     '#epie_flip_ver',
        'click':        epie.gui.config.bind.tool_flip_ver,
        'shortcut':     'e'
    },
    {
        'selector':     '#epie_blur',
        'click':        epie.gui.config.bind.filter_blur_show,
        'shortcut':     'l'
    },
    {
        'selector':      '#epie_rotation',
        'click':         epie.gui.config.bind.tool_rotation_show,
        'shortcut':      'n'
    },
    {
        'selector':      '#epie_levels',
        'click':         epie.gui.config.bind.tool_levels_show,
        'shortcut':      '1'
    },
    {
        'selector':     '#epie_pixelate',
        'click':        epie.gui.config.bind.tool_pixelate,
        'shortcut':     null
    },
    {
        'selector':     '#epie_crop',
        'click':        epie.gui.config.bind.tool_crop,
        'shortcut':     'ctrl+c'
    },
    ];