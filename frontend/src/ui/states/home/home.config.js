'use strict';

var templateUrl = require('./home.html');

module.exports = ['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: templateUrl
    });

}];