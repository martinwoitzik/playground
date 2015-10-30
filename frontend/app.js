'use strict';

var appTitle = 'playground.app';

require('./app.scss');

require('expose?$!expose?jQuery!foundation-sites/js/vendor/jquery');
require('angular');

//require('./foundation-import');
require('api');
require('./config');
require('utils/storage');
require('utils/detection');
require('ui/locale');
require('ui/shared/navbar');
require('ui/shared/header');
require('ui/states/baseui');
require('ui/states/home');
require('ui/states/dashboard');


angular.element(document).ready(function () {
  angular.bootstrap(document, [appTitle]);
});

angular.module(appTitle, [
  require('angular-ui-router'),
  'api',
  'ngLocale',
  'config',
  'storage',
  'detection',
  'ngLocale',
  'baseui',
  'home',
  'dashboard'
  ])
  .run(['$rootScope', function ($rootScope) {

    console.log('angular app ' + appTitle + ' is running');

  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

  }]);

