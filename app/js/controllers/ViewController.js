/**
 * Created by zimmerd on 3/3/16.
 */

homeProjectApp.controller('ViewController', function ViewController($scope, $routeParams, $route, $location, $window, paramHolderSvc) {

    console.log("In view controller");


    $scope.p1 = null;
    $scope.p2 = null;


    if($route.current.params.param1 !== undefined) {
        paramHolderSvc.setPolnum($route.current.params.param1);
    }


    if($route.current.params.param2 !== undefined) {
        paramHolderSvc.setOnlineSessId($route.current.params.param2);
    }



    $scope.p1 = paramHolderSvc.getPolnum();
    $scope.p2 = paramHolderSvc.getOnlineSessId();


    // so location.path will get us to the root of the path and strip the query params from url preventing
    // bookmarking and possible exploitation with policy numbers (although Auth will catch that as well)

    if(paramHolderSvc.getRedirect() === false) {
        paramHolderSvc.setRedirect(true);
        $location.url($location.path("/"));
    }







});
