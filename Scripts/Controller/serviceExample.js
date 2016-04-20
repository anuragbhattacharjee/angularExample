/// <reference path="../angular.min.js" />

var myServiceExample = angular
                        .module("serviceModule", [])
                        .controller("serviceController", function ($scope, $http, $log, stringService) {
                            $scope.transformString = function (input) {
                                $scope.output = stringService.processString(input);
                            }
                        });