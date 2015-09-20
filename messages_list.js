// for Iron Router switching routes
Iron.Router.hooks.materializeFlashMessages = function () {
  if (this.ready()) {
    renderMaterializeToasts();
  }
  if (this.next) {
    this.next();
  }
};

function renderMaterializeToasts() {
  var messages = flashMessages.find({ seen: false }).fetch();
  _.map(messages, function(msgObject, index) {
    var toastId = "toast-" + index;
    flashMessages.update(msgObject._id, { $set: { seen: true }});
    var hideDelay = msgObject.options && msgObject.options.hideDelay;
    var message = buildMessage(toastId, msgObject.message, msgObject.options.button);
    Materialize.toast(message, msgObject.options.hideDelay, toastId);
  });

  function buildMessage(toastId, message, buttonOptions) {
    if (buttonOptions.label === "") {
      return message;
    }
    var button = buildButton(toastId, buttonOptions);
    var message = $("<span/>").html(message);
    return message.prop("outerHTML") + button.prop("outerHTML");
  }

  function buildButton(toastId, buttonOptions) {
    var buttonId = "buttonId";
    var $button = $("<a/>").addClass(buttonOptions.color).attr("id", buttonId).
                    text(buttonOptions.label).attr("href", "#");
    $("body").on(
      "click", "#" + buttonId, { toastClass: toastId }, buttonOptions.clickHandler
    );
    return $button;
  }
}
