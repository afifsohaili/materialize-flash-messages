Template.materializeFlashMessages.rendered = function () {
  var messages = flashMessages.find({ seen: false }).fetch();
  _.map(messages, function(message) {
    Meteor.defer(function() {
      flashMessages.update(message._id, { $set: { seen: true }});
    });
    if (message.options && message.options.hideDelay) {
      Materialize.toast(message.message, message.options.hideDelay);
    }
  });
};
