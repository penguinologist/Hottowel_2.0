(function () {
    'use strict';

    /**
     * This module is but the throughput of other data that gets called from the /api/ directory.
     */
    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /**
     * We create an instance of dataservice by injecting parameters.
     * @type {string[]}
     */
    dataservice.$inject = ['$http', '$q', 'exception'];
    /* @ngInject */
    function dataservice($http, $q, exception) {

        //The data as a service which is to be returned
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        /**
         * This method counts the number of messages (but only up to 72)
         * @returns {*|requestHandler|Promise}
         */
        function getMessageCount() { return $q.when(72); }

        /**
         * This method retrieves the data from the /api/people directory. This could be replaced by any API call.
         *
         * Upon success, it returns the response data. Upon failure, it calls the
         * fail method and logs the error with the exception handler (called the exception.catcher).
         * @returns {*}
         */
        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
