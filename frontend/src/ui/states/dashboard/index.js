'use strict';

require('./dashboard.scss');

angular.module('dashboard', [])
  .controller('DashboardController', require('./dashboard.controller'))
  .config(require('./dashboard.config'));
