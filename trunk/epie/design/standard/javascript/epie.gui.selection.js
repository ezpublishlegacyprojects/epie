epie.gui.selection_impl = function() {
    var selection = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };

    var active = false;

    var isSelectionActive = function () {
        return active;
    };

    var removeSelection = function() {
        selection.x = 0;
        selection.y = 0;
        selection.w = 0;
        selection.h = 0;

        active = false;
    }

    var setSelection = function (c) {
        selection.x = c.x;
        selection.y = c.y;
        selection.w = c.w;
        selection.h = c.h;

        if (c.w == 0 || c.h == 0) {
            active = false;
        } else {
            active = true;
        }

        $.log('[selection] (x, y) : (' + selection.x + ',  ' + selection.y + ') - (w, h)' + '(' + selection.w + ', ' + selection.h + ')');
    };

    var hasSelection = function() {
        return (selection.w != 0 && selection.h != 0);
    }

    var getSelection = function() {
        return selection;
    };

    var getZoomedSelection = function(zoom) {
        zoom = zoom / 100;
        $.log('[zoomed selection] '+
            '(x, y) : (' + (selection.x * zoom) + ',  ' + (selection.y * zoom) + ') '+
            '- (w, h)' + '(' + (selection.w * zoom) + ', ' + (selection.h * zoom) + ')');

        return {
            x: (selection.x * zoom),
            y: (selection.y * zoom),
            w: (selection.w * zoom),
            h: (selection.h * zoom)
        };
    };

    var getArrayZoomedSelection = function(zoom) {
        select = getZoomedSelection(zoom);

        return {
            'selection[x]': select.x,
            'selection[y]': select.y,
            'selection[w]': select.w,
            'selection[h]': select.h
        };
    }

    var getArraySelection = function() {
        select = getSelection();
        var res = [];
        res['x'] = select.x;
        res['y'] = select.y;
        res['w'] = select.w;
        res['h'] = select.h;
        return res;
    }

    return {
        isSelectionActive:isSelectionActive,
        hasSelection:hasSelection,
        remove:removeSelection,
        selection:getSelection,
        set:setSelection,
        zoomedSelection:getZoomedSelection,
        arrayZoomedSelection:getArrayZoomedSelection,
        arraySelection: getArraySelection
    };
}

epie.gui.selection_instance = null;
epie.gui.selection = function() {
    if (epie.gui.selection_instance == null) {
        epie.gui.selection_instance = new epie.gui.selection_impl();
    }

    return epie.gui.selection_instance;
};
