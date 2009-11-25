epie.epiehistory = function() {
    var history = [];
    var history_version = -1;

    var resetHistory = function() {
        history = [];
        history_version = -1;
    }

    var tellEzConnect = function() {
        epie.ezconnect.connect.instance().set({
            'history_version': history_version
        });
    };

    var undo = function() {
        if (history_version > 0) {
            moveInHistory(-1); // goes back one step
        }
    };

    var redo = function() {
        if (history_version < (history.length - 1)) {
            moveInHistory(1);
        }
    };

    var moveInHistory = function(move) {
        history_version = history_version + move;
        tellEzConnect();
    };

    var addItem = function(image_url, thumbnail_url) {
        moveInHistory(1);

        var time = new Date();
        time = time.getTime();

        if (history_version < history.length && history[history_version]) {
            if (history[history_version].mixed == time) {
                time = time + Math.floor(Math.random()*254345);
            }

            history[history_version].mixed = time;
            history[history_version].image = image_url;
            history[history_version].thumbnail = thumbnail_url;

            for (i = history_version + 1; i < history.length; ++i) {
                history[i] = null;
            }

            history.length = history_version + 1;
        }
        else {
            history.push({
                'mixed':        time,
                'image':        image_url,
                'thumbnail':    thumbnail_url
            })
        }
    };

    var hasAntecedent = function() {
        $.log(history_version);
        return (history_version > 0);
    }
    var hasSuccessor = function() {
        $.log("history : " + history.length);
        return (history_version != -1 && history_version + 1 < history.length);
    }

    var refreshItem = function() {
        if (history_version < 0 || history_version > history.length) {
            return;
        }

        var time = new Date();
        time = time.getTime();
        if (history[history_version].mixed == time) {
            time = time + Math.floor(Math.random()*254345);
        }

        history[history_version].mixed = time;
    }

    var current = function() {
        if (history_version >= 0
            && history_version < history.length)
            return history[history_version];
        else
            return null;
    }

    var version = function() {
        return history_version;
    }

    return {
        add:addItem,
        undo:undo,
        redo:redo,
        current:current,
        version:version,
        refreshCurrent:refreshItem,
        reset:resetHistory,
        hasSuccessor:hasSuccessor,
        hasAntecedent:hasAntecedent
    };
};


epie.history_instance = null;

epie.history = function() {
    if (epie.history_instance == null) {
        epie.history_instance = new epie.epiehistory();
    }

    return epie.history_instance;
}