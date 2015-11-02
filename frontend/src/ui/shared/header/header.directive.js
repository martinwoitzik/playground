import templateUrl from './header.html';

module.exports = function () {
  return {
    restrict: 'E',
    controller: 'HeaderController',
    templateUrl: templateUrl,
    scope: true
  }
};