module gt.basket {
  'use strict';

  export class GtBasketService {

    public items:any;
    /* @ngInject */
    constructor() {
      this.items = {};
    }

    public addItem(item) {
      if (!!this.items[item.id]) {
        this.items[item.id].quantity = this.items[item.id].quantity + 1;
      } else {
        item.quantity = 1;
        this.items[item.id] = item;
      }
    }

    public removeItem(id) {
      delete this.items[id];
    }

  }
  module.service('GtBasketService', GtBasketService);
}
