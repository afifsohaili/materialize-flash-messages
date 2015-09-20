Package.describe({
  name: 'afifsohaili:materialize-flash-messages',
  summary: 'A package to display flash messages to the user using \
           MaterializeCSS framework',
  version: '0.0.1',
  git: 'https://github.com/afifsohaili/materialize-flash-messages.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles([
    'messages.js',
    'messages_list.html',
    'messages_list.js',
  ], 'client');

  if (api.export) {
    api.export(['FlashMessages', 'flashMessages'], 'client');
  }
});

Package.on_test(function(api) {
  api.use('mrt:flash-messages', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('messages_tests.js', 'client');
});
