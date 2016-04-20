/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);


// Custom Filter Filters.js


//register the controller
myApp.controller("myController", function ($scope) {
    var technologies = [
        { name: 'C#', likes: 0, dislikes: 0 },
        { name: 'JS', likes: 0, dislikes: 0 },
        { name: 'C++', likes: 0, dislikes: 0 },
        { name: 'AngularJS', likes: 0, dislikes: 0 }
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    $scope.incrementDisLikes = function (technology) {
        technology.dislikes++;
    };

    var employees = [
        { name: 'A', dateOfBirth: new Date("23 Nov 2015"), gender: "Male", salary: 5600.768, city: "London", department: 1 },
        { name: 'B', dateOfBirth: new Date("15 Dec 2015"), gender: "Female", salary: 600.3, city: "Dhaka", department: 2 },
        { name: 'C', dateOfBirth: new Date("16 Jan 2015"), gender: "FeMale", salary: 6500, city: "Pensilvaneya", department: 1 },
        { name: 'D', dateOfBirth: new Date("10 Feb 2015"), gender: "Male", salary: 4600, city: "New York", department: 3 },
        { name: 'E', dateOfBirth: new Date("06 Apr 2015"), gender: "Male", salary: 2600, city: "Chittagong", department: 2 }
    ];

    $scope.employees = employees;
    $scope.rowLimit = 5;

    // Sorting
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column)
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';

        return '';
    };

    // Search
    $scope.search = function (item) {
        if ($scope.searchTextMultiple == undefined) {
            return true;
        }
        else {
            if (item.name.toLowerCase().indexOf($scope.searchTextMultiple.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchTextMultiple.toLowerCase()) != -1)
                return true;
        }

        return false;
    }
    

    //embed another html
    $scope.citiesPage = "CountryList.html";

    var countries = [
        {
            name: "India",
            cities: [
                { name: "Kolkata" },
                {name: "Bangalore"}
            ]
        },
        {
            name: "Bangladesh",
            cities: [
                { name: "Dhaka" },
                { name: "Chittagong" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "New York" },
                { name: "Mishigan" }
            ]
        }
    ];

    $scope.countries = countries;

});
    
    

