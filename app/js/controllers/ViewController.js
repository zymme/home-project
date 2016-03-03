/**
 * Created by zimmerd on 3/3/16.
 */

homeProjectApp.controller('ViewController', function ViewController($scope, $routeParams, $route) {

    console.log("In view controller");

    console.log($route.current.params.param1);
    console.log($route.current.params.param2);

    $scope.p1 = null;
    $scope.p2 = null;

    $scope.p1 = $route.current.params.param1;
    $scope.p2 = $route.current.params.param2;

});
