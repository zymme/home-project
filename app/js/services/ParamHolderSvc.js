/**
 * Created by zimmerd on 3/7/16.
 */

homeProjectApp.factory('paramHolderSvc', function($http) {

    var polnum = null;
    var online_session_id = null;
    var redirect = false;

    var token = null;


    return {

        setToken: function(val) {
            token = val;
            //debugger;

            return $http.get('http://localhost:8811/gettoken/' + token)
                .then(function(response) {
                    console.log(response);
                    //debugger;
                    polnum = response.data.decoded.policynum;
                    online_session_id = response.data.decoded.osessid;
                })
                .catch(function(error){
                    console.error(error);
                })


        },

        getPolnum: function() {

            return polnum;
        },

        setPolnum: function(pnum) {
            polnum = pnum;
        },


        getOnlineSessId: function() {
            return online_session_id;
        },

        setOnlineSessId: function(osid) {
            online_session_id = osid;
        },

        getRedirect: function() {
            return redirect;
        },

        setRedirect: function(val) {
            redirect = val;
        }

    }


});
