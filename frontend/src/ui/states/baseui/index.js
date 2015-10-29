'use strict';

require('./baseui.scss');

angular.module('baseui', [])
  .controller('BaseUiController', require('./baseui.controller'))
  .config(require('./baseui.config'));