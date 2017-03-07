//路由模块的定义
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //第一层路由index
    $stateProvider.state('index', {
            url: '/index',
            controller: 'indexCtrl',
            templateUrl: 'template/index.html'
                //第二层路由recommend
        }).state('index.recommend', {
            url: '/recommend/:id',
            controller: 'recommendCtrl',
            templateUrl: 'template/recommend.html'
        }).state('index.hot', {
            url: '/hot/:id',
            templateUrl: 'template/hot.html'
        }).state('index.entertaiment', {
            url: '/entertainment/:id',
            templateUrl: 'template/entertainment.html'
        }).state('search', {
            url: '/search',
            controller: 'homeCtrl',
            templateUrl: 'template/search.html'
                //第一层路由detail
        }).state('detail', {
            url: '/detail/:id',
            controller: 'detailCtrl',
            templateUrl: 'template/detail.html'
        }).state('insert', {
            url: '/insert',
            controller: 'insertCtrl',
            templateUrl: 'template/insert.html'
        }).state('login', {
            url: '/login',
            controller: 'loginCtrl',
            templateUrl: 'template/login.html'
        })
        //默认进入的路由页面
    $urlRouterProvider.when('', '/index/recommend/6')
}])
