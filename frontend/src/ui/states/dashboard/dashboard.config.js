'use strict';

var templateUrl = require('./dashboard.html');

module.exports = ['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('dashboard', {
      parent: 'baseui',
      url: '/dashboard',
      controller: 'DashboardController',
      templateUrl: templateUrl
    });

}];