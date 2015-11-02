
let appTitle = 'playground.app';

import './app.scss';

import $ from 'jquery';
import angular from 'angular';
import ui_router from 'angular-ui-router';

import 'api';
import './config';
// import './foundation-import';
import 'ui/locale';

import 'utils/detection';
import 'utils/storage';

import 'ui/states/baseui';
import 'ui/states/dashboard';
import 'ui/states/home';


angular.element(document).ready(function () {
  angular.bootstrap(document, [appTitle]);
});

angular.module(appTitle, [
  'ui.router',
  'api',
  'config',
  'ngLocale',
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
  .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

  }]);

