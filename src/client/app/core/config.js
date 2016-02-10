(function () {
    'use strict';

    /**
     * This module is the "core" of the page, however realistically it's but
     * the backbone. It configures the handling of errors and logging thereof.
     */

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[helloWorld Error] ',
        appTitle: 'helloWorld'
    };

    core.value('config', config);
    core.config(configure);
    //TODO
    configure.$inject = ['$logProvider','exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
