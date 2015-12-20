import templateUrl from './dashboard.html';


DashboardConfig.$inject = ['$stateProvider'];

export default function DashboardConfig($stateProvider) {
  $stateProvider
    .state('dashboard', {
      parent: 'baseui',
      url: '/dashboard',
      controller: 'DashboardController',
      templateUrl: templateUrl
    });
}