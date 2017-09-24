var module = angular.module("Calculate", []);

var controller = module.controller("CalculateCtrl", function ($scope) {
    $scope.add = function () {
        var firstNum = $scope.xVar;
        var secondNum = $scope.yVar;
        var result = parseInt(firstNum) + parseInt(secondNum);
        document.getElementById("Result").innerHTML = "Result = " + result;
    };
    $scope.div = function () {
        var firstNum = $scope.xVar;
        var secondNum = $scope.yVar;
        var result = firstNum / secondNum;
        document.getElementById("Result").innerHTML = "Result = " + result;
    };
    $scope.multiple = function () {
        var firstNum = $scope.xVar;
        var secondNum = $scope.yVar;
        var result = firstNum * secondNum;
        document.getElementById("Result").innerHTML = "Result = " + result;
    };
    $scope.sub = function () {
        var firstNum = $scope.xVar;
        var secondNum = $scope.yVar;
        var result = firstNum - secondNum;
        document.getElementById("Result").innerHTML = "Result = " + result;
    };


});