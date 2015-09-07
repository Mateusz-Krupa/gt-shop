module gt.basket {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('basket', {
          url: '/basket',
          templateUrl: 'app/modules/basket/templates/basket.html',
          controller: 'BasketController',
          controllerAs: 'vm'
        })
        .state('invoice', {
          url: '/invoice',
          templateUrl: 'app/modules/basket/templates/basket.html',
          controller: 'BasketController',
          controllerAs: 'vm'
        });
    }
  }

  module.config(RouterConfig);
}
