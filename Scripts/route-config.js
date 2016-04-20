/// <reference path="Services/angular-route.js" />
(function () {
    angular.module("Demo").config(config);
    function config($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "../Views/htmlpage.html",
            controller: "myController"
        }).when("/services", {
            templateUrl: "../Views/ServiceExample.html",
            controller: "serviceController"
        })
    }
    config.$inject = ["$routeProvider"];
}());