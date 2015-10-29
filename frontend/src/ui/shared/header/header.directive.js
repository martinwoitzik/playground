'use strict';

var templateUrl = require('./header.html');

module.exports = function () {
  return {
    restrict: 'E',
    controller: 'HeaderController',
    templateUrl: templateUrl,
    scope: true,
    link: function(scope, element, attr) {

    }
  }
};