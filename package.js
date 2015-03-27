Package.describe({
  name: 'cryptoquick:isomer',
  version: '0.2.5',
  summary: 'An isometric graphics library for HTML5 canvas.',
  git: 'https://github.com/cryptoquick/meteor-isomer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('isomer.js');
});
