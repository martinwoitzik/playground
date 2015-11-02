import templateUrl from './home.html';


HomeConfig.$inject = ['$stateProvider'];

function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'baseui',
      url: '/',
      templateUrl: templateUrl
    });
}

module.exports = HomeConfig;