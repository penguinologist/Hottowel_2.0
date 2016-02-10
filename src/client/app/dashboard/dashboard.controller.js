(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /**
     * In order to call on the constructor, variables are injected to
     * force the call upon the function DashboardController.
     * @type {string[]}
     */
    DashboardController.$inject = ['$q', 'dataservice', 'logger','$rootScope'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger,$rootScope) {
        var vm = this;
        vm.news = {
            title: 'helloWorld',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        $rootScope.title = 'Dashboard';
        activate();

        /**
         * This method calls the getMessageCount method an the getPeople method,
         * and upon successfull completion of both, it announces to the logger
         * that it has terminated successfully.
         * @returns {*}
         */
        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        /**
         * This calls the dataservice to count all the messages. Once that's
         * completed, it assigns that value to the view.
         * @returns {*}
         */
        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        /**
         * This method calls the dataservice and retrieves all the people.
         * The getPeople function from dataservice returns an array of
         * people, which is then added one by one to the view.
         * @returns {*}
         */
        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
