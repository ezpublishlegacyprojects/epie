var epie = window.epie || {};

// This is the global namespace of the UI.
epie.gui = epie.gui || {};

// Sub-namespace of the UI namespace, contains various configuration
// objects
epie.gui.config = epie.gui.config || {};

// Namespace to set the association between an item and the function to be excuted
epie.gui.config.bindings = epie.gui.config.bindings || {};

// Namespace used for the definition of the binded functions
epie.gui.config.bind = epie.gui.config.bind || {};
// Namespace used for the definition of actions. Similar to gui.config.bind but
// not for actions triggered by a click event
epie.gui.config.actions = epie.gui.config.action || {};

// Namespace for the interactions between the ui and ez publish
epie.ezconnect = epie.ezconnect || {};
