import './navbar.scss';
import ctrl from './navbar.controller';
import directive from './navbar.directive';

angular.module('navbar', [])
  .controller('NavbarController', ctrl)
  .directive('navBar', directive);