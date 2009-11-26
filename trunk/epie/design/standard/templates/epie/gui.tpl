{* Require jQuery, using JS Core *}
{ezscript_require( array( 'ezjsc::jquery',
                        'ezjsc::jqueryio',
                        'jquery-ui-1.7.2.custom.min.js',
                        'epie.namespaces.js',
                        'epie.js',
                        'epie.ezconnect.success_default.js',
                        'epie.ezconnect.failure_default.js',
                        'epie.ezconnect.complete_default.js',
                        'epie.ezconnect.connect.js',
                        'epie.ezconnect.prepare.js',
                        'epie.history.js',
                        'epie.gui.js',
                        'epie.gui.selection.js',
                        'epie.gui.config.bind.filter_black_and_white.js',
                        'epie.gui.config.bind.filter_blur.js',
                        'epie.gui.config.bind.filter_sepia.js',
                        'epie.gui.config.bind.filter_grain.js',
                        'epie.gui.config.bind.menu_edit.js',
                        'epie.gui.config.bind.menu_file.js',
                        'epie.gui.config.bind.menu_help.js',
                        'epie.gui.config.bind.menu_close_without_saving.js',
                        'epie.gui.config.bind.menu_save_and_close.js',
                        'epie.gui.config.bind.tool_saturation.js',
                        'epie.gui.config.bind.tool_flip_hor.js',
                        'epie.gui.config.bind.tool_flip_ver.js',
                        'epie.gui.config.bind.tool_img.js',
                        'epie.gui.config.bind.tool_pot.js',
                        'epie.gui.config.bind.tool_redo.js',
                        'epie.gui.config.bind.tool_select.js',
                        'epie.gui.config.bind.tool_undo.js',
                        'epie.gui.config.bind.tool_watermark.js',
                        'epie.gui.config.bind.tool_pixelate.js',
                        'epie.gui.config.bind.tool_rotation.js',
                        'epie.gui.config.bind.tool_levels.js',
                        'epie.gui.config.bind.tool_zoom.js',
                        'epie.gui.config.bind.opts_attach.js',
                        'epie.gui.config.bind.opts_detach.js',
                        'epie.gui.config.zoom.js',
                        'epie.gui.main_window.js',
                        'epie.gui.tools_window.js',
                        'epie.gui.opts_window.js',
                        'epie.gui.variations_bar.js',
                        'epie.gui.config.bindings.opts_items_sliders.js',
                        'epie.gui.config.bindings.opts_items_buttons.js',
                        'epie.gui.config.bindings.main_window.js',
                        'epie.gui.config.bindings.tools_window.js',
                        'epie.gui.config.bindings.opts_window.js',
                        'epie.gui.config.bindings.variations_bar.js',
                        'jquery.epie.js',
                        'jquery.jCrop.min.js',
                        'jquery.hotkeys.js',
                        'colorpicker/colorpicker.js',
                        'eye.js',
                        'utils.js',
                        'vtip-min.js',
                        'wait.js')
                        )
}

{ezcss_require( array(  'epie.css',
                        'slider.css',
                        'imgareaselect-animated.css',
                        'variation.css',
                        'colorpicker.css',
                        'vtip.css',
                        'jquery.Jcrop.css',) )}

<div id="epieMainContainer">
    <div class="epieBox drawZone" id="epieMainWindow">
        <div class="topBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="topBarContent">
                <h2>eZ Image Editor</h2>
                <ul id="window">
                    <!--<li><a id="epie_expand" class="smallUi" href=""></a></li>-->
                    <li><a id="epie_close" href="#"></a></li>
                </ul>
            </div>
        </div>
        <div class="contentLeft"><div class="contentRight">
                <div class="content" id="resize">
                    <ul class="topMenu">
                        <li><a href="" id="epie_save_and_close" title="Save and Close this interface">Save & Close</a></li>
                        <li><a href="" id="epie_quit_without_saving" title="Close this interface without saving">Quit</a></li>
                    </ul>
                    <div id="grid">
                        <span id="main_image">
                        </span>
                    </div>
                    <div id="sideBar" class="detachBox">
                        <div class="topMenu">
                            <h2>Thumbnail</h2>
                            <a class="sep" href="#"></a>
                        </div>
                        <div id="miniature">

                        </div>
                        <div id="toolsOptions">
                            <div id="optsGrain" class="opts">
                                <div class="topMenu"><h2>Grain</h2></div>
                                <div class="slider"></div>
                            </div>
                            <div id="optsWatermark" class="opts">

                            </div>
                            <div id="optsBlur" class="opts">
                                <div class="topMenu"><h2>Blur</h2></div>
                                <div class="slider"></div>
                                <button type="button">Ok</button>
                            </div>
                        </div>
                        <div id="optsRotation" class="opts">
                            <div class="topMenu"><h2>Rotation</h2></div>
                            <div class="slider"></div>
                            <input type="text" name="angle" value="0" />
                            <ul class="tools">
                                <li><a id="epie_rotation_left" class="vtip" title="90° counter-clockwise rotation" href="#"></a></li>
                                <li><a id="epie_rotation_right" class="vtip" title="90° clockwise rotation" href="#"></a></li>
                            </ul>
                            <label for="cw"><input id="cw" type="radio" name="clockwise"  value="yes" checked="checked" />Clockwise</label>
                            <label for="ccw"><input id="ccw" type="radio" name="clockwise" value="no"  />Counter-clockwise</label>
                            <input type="hidden" name="color" value="FFFFFF" />
                            <div id="colorSelector"><div style="background-color: #ffffff"></div></div>
                            <button type="button">Ok</button>
                        </div>
                        <div id="optsLevels" class="opts">
                            <div class="topMenu"><h2>Levels</h2></div>
                            <div id="channelR" class="slider"></div>
                            <div id="channelG" class="slider"></div>
                            <div id="channelB" class="slider"></div>
                            <div id="channelA" class="slider"></div>
                            <input type="text" name="value" value="255" />
                            <a class="button" href="#">Auto Contrast</a>
                            <button type="button">Ok</button>
                        </div>
                        <div id="optsSaturation" class="opts">
                            <div class="topMenu"><h2>Saturation</h2></div>
                            <div class="slider"></div>
                            <input type="text" name="saturation" value="0" />
                            <button type="button">Ok</button>
                        </div>
                        <div id="optsZoom" class="opts">
                            <div class="topMenu"><h2>Zoom</h2></div>
                            <ul class="tools">
                                <li class="current"><a id="zoomIn" href="#"></a></li>
                                <li><a id="zoomOut" href="#"></a></li>
                            </ul>
                            <button id="actualPixels">Actual pixels</button>
                            <button id="fitOnScreen">Fit on screen</button>
                        </div>
                    </div>
                </div>
        </div></div>
        <div class="bottomBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="bottomBarContent">
                <p>Status, informations...</p>
                <div id="loadingBar"></div>
            </div>
        </div>
    </div>


    <div class="epieBox" id="epieToolsWindow">
        <div class="topBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="topBarContent">
                <h2>Actions</h2>
            </div>
        </div>
        <div class="contentLeft"><div class="contentRight">
                <div class="content">
                    <div class="section">
                        <div class="sectionHeader">
                            <h4>Tools</h4>
                        </div>
                        <div class="sectionContent">
                            <ul class="tools">
                                <li><a class="vtip" id="epie_select" href="" title="Select tool"></a></li>
                                <li><a class="vtip" id="epie_undo" href="" title="Undo tool"></a></li>
                                <li><a class="vtip" id="epie_redo" href="" title="Redo tool"></a></li>
                                <li class="current"><a class="vtip" id="epie_zoom" href="" title="Zoom tool"></a></li>
                                <li><a class="vtip" id="epie_pot" href="" title="Paint Pot tool"></a></li>
                                <li><a class="vtip" id="epie_img" href="" title="Image tool"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="sectionHeader">
                            <h4>Image</h4>
                        </div>
                        <div class="sectionContent">
                            <ul class="filters">
                                <!--li><a href="" id="epie_grain" title="Grain">Grain photo</a></li-->
                                <li><a href="" id="epie_flip_hor" title="Horizontal Flip">Horizontal Flip</a></li>
                                <li><a href="" id="epie_flip_ver" title="Vertical Flip">Vertical Flip</a></li>
                                <li class="more"><a href="" id="epie_rotation" title="Rotation">Rotation</a></li>
                                <li class="more"><a href="" id="epie_watermark" title="Watermark">Watermark</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="sectionHeader">
                            <h4 class="closed">Effects</h4>
                        </div>
                        <div class="sectionContent">
                            <ul class="filters">
                                <li class="more"><a href="" id="epie_blur" title="Blur">Blur</a></li>
                                <li><a href="" id="epie_pixelate" title="Pixelate">Pixelate</a></li>
                                <li class="more"><a href="" id="epie_saturation" title="Saturation">Saturation</a></li>
                                <li><a href="" id="epie_blackandwhite" title="Black and White">Black and White</a></li>
                                <li><a href="" id="epie_sepia" title="Sepia">Sepia</a></li>
                                <!--li><a href="" id="epie_levels" title="Levels">Levels</a></li-->
                            </ul>
                        </div>
                    </div>
                </div>
        </div></div>
        <div class="bottomBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="bottomBarContent">
                <p>Status</p>
            </div>
        </div>
    </div>

    <div class="epieBox" id="epieOptsWindow">
        <div class="topBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="topBarContent">
                <h2>Options</h2>
            </div>
        </div>
        <div class="contentLeft"><div class="contentRight">
                <div class="content">

                </div>
        </div></div>
        <div class="bottomBar">
            <div class="leftCorner"></div><div class="rightCorner"></div>
            <div class="bottomBarContent">
                <p>Status</p>
            </div>
        </div>
    </div>


    <div id="epieControlBar"></div>

    <div id="epieVariationsBar">
        <div id="epieVariationsTop">
            <h2>Variations</h2>
        </div>
        <div id="epieVariationsContent">
            <ul id="epieVariations">
                <li><a href="#"><img src="/ezpp/extension/epie/design/standard/images/variation.png" alt="" /></a></li>
                <li><a href="#"><img src="/ezpp/extension/epie/design/standard/images/variation.png" alt="" /></a></li>
                <li><a href="#"><img src="/ezpp/extension/epie/design/standard/images/variation.png" alt="" /></a></li>
                <li><a href="#"><img src="/ezpp/extension/epie/design/standard/images/variation.png" alt="" /></a></li>
            </ul>
        </div>
    </div>
</div>