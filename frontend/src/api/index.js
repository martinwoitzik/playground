import endpoint from './endpoint';
import angular from 'angular';

angular.module('api', [])
  .factory('API', endpoint);