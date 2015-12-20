import templateUrl from './baseui.html';


BaseUiConfig.$inject = ['$stateProvider'];

export default function BaseUiConfig($stateProvider) {
  $stateProvider
    .state('baseui', {
      abstract: true,
      templateUrl: templateUrl,
      controller: 'BaseUiController'
    });
}
