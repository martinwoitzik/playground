'use strict';

require('./navbar.scss');

angular.module('navbar', [])
  .controller('NavbarController', require('./navbar.controller'))
  .directive('navBar', require('./navbar.directive'));