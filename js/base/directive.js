//组件模块的定义
var directives = angular.module('directives', []);
directives.directive('wheader', function() {
    return {
        templateUrl: 'directive/wheader.html'
    }
}).directive('wsearch', function() {
    return {
        templateUrl: 'directive/wsearch.html'
    }
}).directive('wpanel', function() {
    return {
        templateUrl: 'directive/wpanel.html'
    }
}).directive('wactionsheet', function() {
    return {
        templateUrl: 'directive/wactionsheet.html'
    }
}).directive('wcarousel', function() {
    return {
        templateUrl: 'directive/wcarousel.html',
        link: function(scope, ele, attr) {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
    }
})
