'use strict';

angular.module('api', [])
  .factory('API', require('./endpoint'))
  .run([function () {

    // nothing yet

  }]);