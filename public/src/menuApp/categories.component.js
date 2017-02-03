(function () {
'use strict';

angular.module('menuApp')
.component('categoriesList', {
  templateUrl: 'src/menuApp/templates/categories.html',
  bindings: {
    items: '<'
  }
});

})();