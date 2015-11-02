
import './dashboard.scss';
import ctrl from './dashboard.controller';
import config from './dashboard.config';

angular.module('dashboard', [
  'api'
])
  .controller('DashboardController', ctrl)
  .config(config);
