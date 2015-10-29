'use strict';

var appTitle = 'playground.app';

require('./app.scss');

require('expose?$!expose?jQuery!jquery');
require('angular');

require('./foundation-import');
require('api');
require('./config');
require('utils/storage');
require('utils/detection');
require('ui/locale');
require('ui/shared/navbar');
require('ui/shared/header');
require('ui/state/baseui');
require('ui/state/home');
require('ui/state/dashboard');


angular.element(document).ready(function () {
  angular.bootstrap(document, [appTitle]);
});

angular.module(appTitle, [
  'api',
  'ngLocale',
  'config',
  'storage',
  'detection',
  'ngLocale',
  'navbar',
  'header',
  'baseui',
  'home',
  'dashboard'
  ])
  .run(['$rootScope', function ($rootScope) {

    console.log('angular app ' + appTitle + ' is running');

  }])
  .config(['$anchorScrollProvider', function ($anchorScrollProvider) {

    $anchorScrollProvider.disableAutoScrolling();

  }]);

