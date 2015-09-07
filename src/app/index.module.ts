/// <reference path="../../.tmp/typings/tsd.d.ts" />

module gt.main {
  'use strict';
  export var module = angular.module('storeAppExample',
    ['ngAnimate',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ngMaterial',
      'gt.components',
      'gt.basket',
      'gt.content']);
}
