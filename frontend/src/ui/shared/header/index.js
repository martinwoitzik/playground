'use strict';

angular.module('header', [])
  .controller('HeaderController', require('./header.controller'))
  .directive('headerDirective', require('./header.directive'));