///// <reference path="Controller/script.js" />
//angular.module("Demo").filter("department", function () {
//    return function (department) {
//        switch (department) {
//            case 1:
//                return "Marketing";
//                break;
//            case 2:
//                return "Development";
//                break;
//            case 3:
//                return "Database";
//                break;

//        }
//    }
//});

(function () {
    angular.module("Demo").filter("department", department);
    function department() {
        return function (department) {
            switch (department) {
                case 1:
                    return "Marketing";
                    break;
                case 2:
                    return "Development";
                    break;
                case 3:
                    return "Database";
                    break;

            }
        }
    }
}());