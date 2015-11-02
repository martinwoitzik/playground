import Endpoint from './endpoint';

angular.module('api', [])
  .factory('Endpoint', Endpoint.endpointFactory);