module gt.content {
  'use strict';

  export class GtSideNavController {

    public categories:any;
    public active:string;

    /* @ngInject */
    constructor($stateParams:any, $scope:any, $state:any, private $http:any) {
      this.active = $state.params.category;
      this.getCategories();
    }

    //TODO change it to API call
    private getCategories() {
      this.$http.get("assets/data/categories.json").then((res) => {
        this.categories = res.data;
      });
    }

    public setActive(name:any) {
      this.active = name;
    }
  }

  module.controller('gtSideNavController', GtSideNavController);
}
