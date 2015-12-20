import templateUrl from './navbar.html';

export default function () {
  return {
    restrict: 'E',
    controller: 'NavbarController as vm',
    scope: true,
    templateUrl: templateUrl
  }
};