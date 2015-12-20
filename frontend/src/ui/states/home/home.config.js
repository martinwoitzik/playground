import templateUrl from './home.html';


HomeConfig.$inject = ['$stateProvider'];

export default function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'baseui',
      url: '/',
      templateUrl: templateUrl
    });
}