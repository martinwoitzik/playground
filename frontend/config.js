'use strict';

var appConfig = {};

appConfig.version = '0.0.1';
appConfig.debug = false;

angular.module('config', [])
  .service('Config', function() {

    // TODO: apply configurations here

    return appConfig;
  });

module.exports = appConfig;
