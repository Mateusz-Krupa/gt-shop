module gt.content {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/search/:category',
          templateUrl: 'app/modules/content/templates/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        });
    }
  }

  module.config(RouterConfig);
}
