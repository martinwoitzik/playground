
import './baseui.scss';
import ctrl from './baseui.controller';
import config from './baseui.config';

import 'ui/shared/header';
import 'ui/shared/navbar';

angular.module('baseui', [
  'header',
  'navbar'
])
  .controller('BaseUiController', ctrl)
  .config(config);