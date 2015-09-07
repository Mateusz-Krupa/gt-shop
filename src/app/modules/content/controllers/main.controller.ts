module gt.content {
  'use strict';


  export class MainController {

    public data:any;
    public products:any;
    public activeCategory:any;

    /* @ngInject */
    constructor(private $stateParams:any, private GtBasketService:gt.basket.GtBasketService, private $http:any) {
      this.activeCategory = this.setActiveCategory($stateParams.category);
      this.getProductsAndBuildGrid();
    }

  /**
   * @name getProductsAndBuildGrid
   * @module gt.content
   * @kind function
   *
   * @description Function use $http service to fetch data from json and then it
   * will build Angular Material Grid.
   * @returns {void}
   */
    private getProductsAndBuildGrid() {
      this.$http.get("assets/data/products.json").then((res) => {
        this.products = this.buildGridModel(res.data);
      });
    }

  /**
   * @name buildGridModel
   * @module gt.content
   * @kind function
   * @params {array} Array of products
   *
   * @description Builds Angular Material Grid model.
   * @returns {array}
   */
    private buildGridModel(products) {
      var results = [];
      products.forEach(function (product:any) {
        var tmp:any = {};
        tmp.item = product;
        var backgroundColors = ['red', 'green', 'darkBlue', 'blue', 'yellow', 'pink', 'darkBlue', 'purple', 'deepBlue', 'yellow'];
        tmp.background = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

        //naive way to remove probability of big product
        var availableSize = [{row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 2, col: 2}];
        tmp.span = availableSize[Math.floor(Math.random() * availableSize.length)];
        results.push(tmp);
      });
      return results;
    }


  /**
   * @name addToBasket
   * @module gt.content
   * @kind function
   * @params {object}
   *
   * @description Adds product to basket.
   * @returns {void}
   */
    public addToBasket(item) {
      this.GtBasketService.addItem(item);
    }

  /**
   * @name setActiveCategory
   * @module gt.content
   * @kind function
   * @params {string} Category name
   *
   * @description Creates object for $filter.filter angular service. That will be used on ng-repeat.
   * @returns {Object}
   */
    private setActiveCategory(param:string) {
      if (param === 'all') {
        return undefined;
      } else {
        var tmp = {
          item: {
            category: param
          }
        };
        return tmp;
      }
    }
  }

  module.controller('MainController', MainController);
}
