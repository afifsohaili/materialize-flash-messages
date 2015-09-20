/**
 * flashMessages
 * { message: String,
 *   style: String,
 *   seen: Boolean }
 */
flashMessages = new Mongo.Collection(null);

FlashMessages = {
  send: function(message, options) {
    sendMessage(message, options);
  },
  clear: function() { flashMessages.remove({ seen: true });
  },
  configure: function(options) {
    this.options = this.options || {};
    _.extend(this.options, options);
  },
  options: {
    hideDelay: 4000,
    button: {
      label: "",
      color: "light-blue-text lighten-text-2",
      clickHandler: function(clickEvent) { }
    }
  }
}

sendMessage = function(message, options) {
  var options = options || {};
  var buttonOverrides = options.button;
  options.hideDelay = options.hideDelay || FlashMessages.options.hideDelay;
  options.button = {};
  _.extend(options.button, FlashMessages.options.button);
  _.extend(options.button, buttonOverrides);
  flashMessages.insert({ message: message, seen: false, options: options });
}
