(function () {
'use strict';

angular.module('menuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'myData'];
function ItemsController(MenuDataService, myData) {
  var item = this;
  item.items = [];
  item.category = myData;

  item.$onInit = function () {
    MenuDataService.getItemsForCategory(item.category)
    .then(function (result) {
      item.items = result.data.menu_items;
      console.log(result.data.menu_items);
    });
  };

}

})();