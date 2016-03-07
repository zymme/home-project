/**
 * Created by zimmerd on 3/7/16.
 */

homeProjectApp.factory('paramHolderSvc', function() {

    var polnum = null;
    var online_session_id = null;
    var redirect = false;


    return {

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
