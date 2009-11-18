epie.gui.config.bind.opts_attach = function () {
     $(this).closest(".attachBox")
            .removeClass("attachBox")
            .addClass("detachBox");
     $.log('class switched :) (attach)');
}
