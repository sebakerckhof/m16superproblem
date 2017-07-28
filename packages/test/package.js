Package.describe({
  name: 'test',
  version: '0.1.0',
  summary: 'Test',
  git: 'https://git.barco.com/ED/blue'
})

Npm.depends({
  'event-stream': '3.3.4',
})

Package.onUse(function (api) {
  api.versionsFrom('1.4.4.2')

  api.use([
    "check",
    "underscore",
    "ecmascript",
    "mongo",
    "ejson",
    ],'server');

  api.mainModule('main.js', 'server')
})

Package.onTest(function (api) {})
