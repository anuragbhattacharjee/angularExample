(function () {
    angular.module("Demo").controller(serviceController);
    function serviceController($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        }
    }
    serviceController.$inject = ["$scope", "stringService"];
}());