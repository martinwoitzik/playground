import templateUrl from './baseui.html';


BaseUiConfig.$inject = ['$stateProvider'];

function BaseUiConfig($stateProvider) {
  $stateProvider
    .state('baseui', {
      abstract: true,
      templateUrl: templateUrl,
      controller: 'BaseUiController'
    });
}

module.exports = BaseUiConfig;
