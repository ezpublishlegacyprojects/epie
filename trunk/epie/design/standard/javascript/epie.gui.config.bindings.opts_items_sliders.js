epie.gui.config.bindings.opts_items_sliders = [
    {
        'selector':     '#optsBlur .slider',
        'change':       epie.gui.config.bind.filter_blur_preview,
        'min' :         0,
        'max' :         25,
        'step' :        1
    },
    {
        'selector':     '#optsRotation .slider',
        'change':       epie.gui.config.bind.tool_rotation_preview,
        'min':          0,
        'max':          360,
        'step' :        1
    },
    {
        'selector':     '#optsLevels #channelR',
        'change':       function () { epie.gui.config.bind.tool_levels_preview('#channelR') },
        'min':          0,
        'max':          100,
        'step' :        0.01
    },
    {
        'selector':     '#optsLevels #channelG',
        'change':       function () { epie.gui.config.bind.tool_levels_preview('#channelG') },
        'min':          0,
        'max':          100,
        'step' :        0.01
    },
    {
        'selector':     '#optsLevels #channelB',
        'change':       function () { epie.gui.config.bind.tool_levels_preview('#channelB') },
        'min':          0,
        'max':          100,
        'step' :        0.01
    },
    {
        'selector':     '#optsLevels #channelA',
        'change':       function () { epie.gui.config.bind.tool_levels_preview('#channelA') },
        'min':          0,
        'max':          100,
        'step' :        0.01
    },
    {
        'selector':     '#optsSaturation .slider',
        'change':       epie.gui.config.bind.tool_saturation_preview,
        'min':          -100,
        'max':          100,
        'step' :        1
    },
    ];

