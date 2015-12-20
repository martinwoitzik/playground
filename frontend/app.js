
let appTitle = 'playground.app';

import './app.scss';

import $ from 'jquery';
import angular from 'angular';
import 'angular-ui-router';

import 'api';
import './config';
import 'foundation';

import 'utils/detection-tool';
import 'utils/storage';

import 'ui/states/baseui';
import 'ui/states/dashboard';
import 'ui/states/home';


angular.element(document).ready(function () {
  angular.bootstrap(document, [appTitle]);
});

angular.module(appTitle, [
  'ui.router',
  'config',
  'api',
  'baseui',
  'dashboard',
  'detection-tool',
  'home',
  'ngLocale',
  'storage'
  ])
  .run(AppRun)
  .config(AppConfig);

AppRun.$inject = ['$rootScope'];
AppConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

function AppRun($rootScope) {
  console.log('angular app ' + appTitle + ' is running');
}

function AppConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  //$locationProvider.html5Mode(true);
}
