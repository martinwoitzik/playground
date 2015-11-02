import ctrl from './header.controller';
import directive from './header.directive';

angular.module('header', [])
  .controller('HeaderController', ctrl)
  .directive('headerDirective', directive);