'use strict';

var appConfig = {
  version: '0.0.1',
  debug: false
};

angular.module('config', [])
  .service('Config', function() {

    // TODO: apply configurations here

    return appConfig;
  });

export default appConfig;
