(function () {
'use strict';

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuApp/templates/main.categories.html',
    controller: 'CategoriesController as category'
  })

  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/menuApp/templates/items.html',
    controller: 'ItemsController as item',
    resolve: {
      myData: ['$stateParams', function($stateParams){
        return $stateParams.category;
      }]
    }
  });
}

})();
