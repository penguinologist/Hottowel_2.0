/**
 * Created by jeroen on 2/9/16.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function CoreController($q, dataservice, logger) {
        var vm = this;
        //vm.news = {
        //    title: 'helloWorld',
        //    description: 'Hot Towel Angular is a SPA template for Angular developers.'
        //};
        //vm.messageCount = 0;
        //vm.people = [];
        //vm.title = 'Dashboard';




    }
})();
