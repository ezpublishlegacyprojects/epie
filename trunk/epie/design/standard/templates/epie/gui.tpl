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
                        'epie.gui.config.bind.tool_rotation.js',
                        'epie.gui.config.bind.tool_levels.js',
                        'epie.gui.config.bind.opts_attach.js',
                        'epie.gui.config.bind.opts_detach.js',
                        'epie.gui.main_window.js',
                        'epie.gui.tools_window.js',
                        'epie.gui.opts_window.js',
                        'epie.gui.config.bindings.opts_items_sliders.js',
                        'epie.gui.config.bindings.opts_items_buttons.js',
                        'epie.gui.config.bindings.main_window.js',
                        'epie.gui.config.bindings.tools_window.js',
                        'epie.gui.config.bindings.opts_window.js',
                        'jquery.epie.js',
                        'jquery.imgareaselect.min.js',
                        'jquery.hotkeys.js')
                        )
}


{ezcss_require( array( 'epie.css',
                        'slider.css',
                        'imgareaselect-animated.css') )}

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
                        <!--li><a href="" id="epie_file" title="File"></a></li>
                        <li><a href="" id="epie_edition" title="Edition"></a></li>
                        <li><a href="" id="epie_help" title="Help"></a></li-->
                        <li><a href="" id="epie_save_and_close" title="Save and Close this interface">Save & Close</a></li>
                        <li><a href="" id="epie_quit_without_saving" title="Close this interface without saving">Quit</a></li>
                    </ul>
                    <div id="grid">

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
                            <input type="text" name="color" value="FFFFFF" />
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
                                <li><a class="tool" id="epie_select" href="" title="Select tool"></a></li>
                                <li><a class="tool" id="epie_zoom" href="" title="Zoom tool"></a></li>
                                <li><a class="tool" id="epie_undo" href="" title="Undo tool"></a></li>
                                <li><a class="tool" id="epie_redo" href="" title="Redo tool"></a></li>
                                <li><a class="tool" id="epie_pot" href="" title="Paint Pot tool"></a></li>
                                <li><a class="tool" id="epie_img" href="" title="Image tool"></a></li>
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
                                <li><a href="" id="epie_rotation" title="Rotation">Rotation</a></li>
                                <li><a href="" id="epie_watermark" title="Watermark">Watermark</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="sectionHeader">
                            <h4 class="closed">Effects</h4>
                        </div>
                        <div class="sectionContent">
                            <ul class="filters">
                                <li><a href="" id="epie_blur" title="Blur">Blur</a></li>
                                <li><a href="" id="epie_saturation" title="Saturation">Saturation</a></li>
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

</div>
