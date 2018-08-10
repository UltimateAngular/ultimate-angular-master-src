angular
    .module('app', [
        'home',
        'about',
        'contact',
        'repos'
    ])
    .config(function ($locationProvider) {
        $locationProvider
            .hashPrefix('');
    });