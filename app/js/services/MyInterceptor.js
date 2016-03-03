/**
 * Created by zimmerd on 3/3/16.
 */

homeProjectApp.factory('MyInterceptor', ['$q', function($q) {

    console.log("in MyInterceptor provider ...");

    var requestInterceptor = {

        request: function(config) {

            debugger;
            console.log("in request interceptor ...");
            console.log(config);

            return config;
        }

    }

    return requestInterceptor;


}]);
