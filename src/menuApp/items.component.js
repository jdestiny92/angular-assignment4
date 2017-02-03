(function () {
'use strict';

angular.module('menuApp')
.component('itemsList', {
  templateUrl: 'src/menuApp/templates/items.html',
  bindings: {
    items: '<'
  }
});

})();