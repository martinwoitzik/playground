'use strict';

var templateUrl = require('./baseui.html');

module.exports = ['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('baseui', {
      abstract: true,
      templateUrl: templateUrl,
      controller: 'BaseUiController'
    });

}];