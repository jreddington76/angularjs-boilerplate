'use strict';

module.exports = function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when("/search", {
            controller: "SearchController",
            templateUrl: "app/js/search/index.html",
            controllerAs: "vm",
            title: "Search"
        })
        .otherwise("/");

    //$locationProvider.html5Mode(true);
}