(function () {
    'use strict';

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
        //routerHelperProvider.configure({docTitle: config.appTitle + ': '});

    }

})();