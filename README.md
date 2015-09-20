materialize-flash-messages [![Build Status](https://travis-ci.org/afifsohaili/materialize-flash-messages.svg)](https://travis-ci.org/afifsohaili/materialize-flash-messages)
==============

Package for displaying flash messages in the form of MaterializeCSS Toast. This is based on [mrt:flash-messages](https://github.com/camilosw/flash-messages)

Include the template somewhere in your index.html file:
```javascript
  {{> materializeFlashMessages}}
```
And then send messages:
```javascript
  FlashMessages.send("Form submitted successfully!");
```

If you want a button on the toast, you can do:
```javascript
  var buttonOptions = {
    label: "UNDO",
    color: "red-text text-lighten-1",
    clickHandler: function() {
      console.log("Undo deleting the item");
    }
  };
  FlashMessages.send("Deleted item #4", { button: buttonOptions });
```

To clear messages:
```javascript
  FlashMessages.clear();
```
Only the seen messages will be cleared.
  
##Configure

You can configure globally the way the messages behave with FlashMessages.configure (the below sample shows the default values):
```javascript
  FlashMessages.configure({
    hideDelay: 5000,
  });
```

- `hideDelay`: set the desired number of milliseconds for the flash message to be displayed (when `autoHide` is `true`).

You can also set individual options on messages. This will override global configuration:
```javascript
  FlashMessages.send("Hide after 5 seconds", { hideDelay: 5000 });
  FlashMessages.send("Hide after 2 seconds and display a button", { hideDelay: 5000, button: { label: "DISMISS" }});
```

##Iron Router Support

```javascript
Router.onRun("materializeFlashMessages");
Router.onAfterAction("materializeFlashMessages");
```

```javascript
// do something

FlashMessages.send("Successful!");
Router.go("/");
```
