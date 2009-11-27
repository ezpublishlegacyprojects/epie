// This static class stores the information relative to
// the interaction between the gui and ez publish for _one_ edition
//
// Basically it's data that is sent at every action so the backend can
// know what image we are editing. It must be initialiazed at the response
// of prepare (see: epie.gui.config.action.prepare.js) and should be reseted
// when closing the interface, whether the edition has been saved or not.
//
// This class is a singleton and _MUST_ be used calling
//  epie.ezzconnect.connect.instance() first
epie.ezconnect.connect = function() {

    var ezdata = {
        // The key is a value sent by the backend when prepare is called.
        // it has to be sent at every communication with the backend except
        // when calling prepare.        
        'key': null,
        // node id of the image object in ez publish
        'image_id': null,
        // version number of the object in ez publish
        'image_version': null,
        // history version number in epie
        // Related to the undo and redo actions
        'history_version': null,
        // url used to send make an action (like applying a filter)
        // format: /{site_access}/{module}/
        // append {action_name} to call apply the action on the image
        'module_url': null
    };

    // Sets the attributes at unusables values
    var reset = function() {
        ezdata.key = null;
        ezdata.image_id = null;
        ezdata.image_version = null;
        ezdata.history_version = null;
        ezdata.module_url = null;
    };

    // This method should be called after receiving the response of prepare
    var set = function(options) {
        var settings = {
            'key': ezdata.key,
            'image_id': ezdata.image_id,
            'image_version': ezdata.image_version,
            'history_version': ezdata.history_version,
            'module_url': ezdata.module_url
        };

        $.extend(settings, options);

        ezdata.key = settings.key;
        ezdata.image_id = settings.image_id;
        ezdata.image_version = settings.image_version;
        ezdata.history_version = settings.history_version;
        ezdata.module_url = settings.module_url;
    };

    var sendAction = function(options) {
        var settings = {
            'url': null,
            'success': epie.ezconnect.success_default,
            'complete': epie.ezconnect.complete_default,
            'error': epie.ezconnect.failure_default,
            'type': 'POST',
            'dataType': 'json'
        };

        // TODO: this is not compatible with IE 5.5
        // check with eZ if it's an issue'
        $.extend(settings, options);
        if (!settings.data) {
            settings.data = {}
        }
        $.extend(settings.data, ezdata);

        if (epie.gui.selection().hasSelection()) {
            var zoom = epie.gui.config.zoom().get();
            var selection = epie.gui.selection().arrayZoomedSelection(zoom);

            $.extend(settings.data, selection);
        }

        epie.gui.epiegui.getInstance().freeze(true);
        epie.gui.epiegui.getInstance().main().showLoading();

        $.ajax(settings);
    }

    var prepare = function(options) {
        var settings = {
            'url': null,
            'success': null,
            'complete':null,
            'type': 'GET',
            'error': epie.ezconnect.failure_default,
            'dataType': 'json'
        };

        $.extend(settings, options);

        if (settings.url == null) {
            $.log('invalid url to prepare the image');
            return;
        }
        epie.gui.epiegui.getInstance().main().showLoading();
        $.ajax(settings);
    }

    var action = function(options) {
        var settings = {
            'action': null,
            'data': {},
            'url': null
        };

        $.extend(settings, options);
        if (settings.action == null) {
            $.log("No action called...");
            return;
        }

        if (settings.url == null) {
            settings.url = ezdata.module_url + "/" + settings.action;
        }
        sendAction(settings);
    }

    return {
        set:set,
        reset:reset,
        prepare:prepare,
        action:action
    };
}

epie.ezconnect.connect.the_instance = null;

epie.ezconnect.connect.instance = function() {
    if (epie.ezconnect.connect.the_instance == null) {
        epie.ezconnect.connect.the_instance = new epie.ezconnect.connect();
    }

    return epie.ezconnect.connect.the_instance;
}