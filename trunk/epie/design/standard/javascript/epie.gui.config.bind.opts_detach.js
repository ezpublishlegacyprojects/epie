epie.gui.config.bind.opts_detach = function () {
    $(this).closest(".detachBox")
            .removeClass("detachBox")
            .addClass("attachBox");
    $.log('class switched :) (detach)');
}
