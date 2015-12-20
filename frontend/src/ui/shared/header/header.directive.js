import templateUrl from './header.html';

module.exports = function () {
  return {
    restrict: 'E',
    controller: 'HeaderController as vm',
    scope: true,
    templateUrl: templateUrl
  }
};