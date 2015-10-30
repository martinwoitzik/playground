'use strict';

require('./baseui.scss');

angular.module('baseui', [
  'header',
  'navbar'
])
  .controller('BaseUiController', require('./baseui.controller'))
  .config(require('./baseui.config'));