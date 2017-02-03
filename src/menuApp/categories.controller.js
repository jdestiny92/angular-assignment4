(function () {
'use strict';

angular.module('menuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var category = this;
  category.items = [];

  category.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      category.items = result.data;
      console.log(result.data);
    });
  };

}

})();
