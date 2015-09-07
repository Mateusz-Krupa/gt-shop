module gt.basket {
  'use strict';

  export class BasketController {
    public items:any;
    public totalPrice:number;
    public totalQuantity:number;
    public submitted:boolean;
    public invoiceNumber:number;
    public discount:number;

    /* @ngInject */
    constructor(public GtBasketService:gt.basket.GtBasketService, private $scope:any, private $state:any) {
      this.init();
      this.initWatchers();
    }


    private init(){
      if (this.$state.current.name === 'invoice') {
        this.submitted = true;
        this.invoiceNumber = Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
        this.items = angular.copy(this.GtBasketService.items);
        console.log(this.GtBasketService.items);
        this.GtBasketService.items = {};
      } else {
        this.items = this.GtBasketService.items;
      }
    }

    /**
     * @name isEmpty
     * @module gt.basket
     * @kind function
     * @params (object)
     *
     * @description Check if object is empty.
     * Returns true if object is empty, false if it isn't.
     * @returns {boolean}
     */

    public isEmpty(obj) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          return false;
        }
      }
      return true;
    }


    /**
     * @name initWatchers
     * @module gt.basket
     * @kind function
     *
     * @description Watch for changes in items, and updates totalPrice and totalQuantity
     * @returns {void}
     */
    private initWatchers() {
      this.$scope.$watch('vm.items', (newValue, oldValue) => {
          this.totalPrice = this.totalQuantity = 0;
          for (var key in newValue) {
            var item = newValue[key];
            var totalProductPrice = item.quantity * item.price;
            this.totalQuantity = this.totalQuantity + item.quantity;
            this.totalPrice = this.totalPrice + totalProductPrice
          }
          this.totalPrice = this.checkAndApplyDiscount(this.totalPrice);
        }, true
      )
    }

    /**
     * @name checkAndApplyDiscount
     * @module gt.basket
     * @kind function
     * @params (number)
     *
     * @description Check and apply discount, it also sets discount value.
     * @returns {number} totalPrice
     */
    private checkAndApplyDiscount(totalPrice) {
      if (totalPrice > 50) {
        var newPrice = totalPrice * 0.9;
        this.discount = this.totalPrice - newPrice;
        return newPrice;
      }
      this.discount = null;
      return totalPrice;
    }

  }
  module.controller('BasketController', BasketController);
}
