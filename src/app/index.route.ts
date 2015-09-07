module gt.main {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
      $urlRouterProvider.otherwise('/search/all');
    }
  }

  module.config(RouterConfig);
}
