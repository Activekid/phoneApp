//控制器模块
var controllers = angular.module('controllers', []);
controllers.controller('indexCtrl', ['$scope', function($scope) {
    $scope.tabs = 1;
    $scope.changeTab = function(tabs) {
        $scope.tabs = tabs
    }
}]).controller('recommendCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.isSearch = false;
    $scope.search = function() {
        $scope.isSearch = true
    }
    $scope.cancel = function() {
        $scope.searchName = ''
        $scope.isSearch = false
    }
    $scope.isShowActionSheet = false
    $scope.showActionSheet = function() {
        $scope.isShowActionSheet = true
    }
    $scope.hideActionSheet = function() {
        $scope.isShowActionSheet = false
    }
    $scope.searchName = '';
    $scope.isloadMore = false;
    $scope.page = 1;
    $scope.news = [];
    $scope.sort = true;
    $scope.loadMore = function() {
        $scope.isLoadMore = false;
        $http.get('js/show_list.json', {
            params: {
                page: $scope.page++,
                channel_id: $state.params.id
            }
        }).success(function(data) {
            console.log(data);
            $scope.news = $scope.news.concat(data.news_list);
            $scope.isLoadMore = true
        })
    }
    $scope.loadMore();
}]).controller('detailCtrl', ['$scope', '$http', '$state', '$sce', function($scope, $http, $state, $sce) {
    console.log($state.params.id);
    $http.get('js/show_detail' + $state.params.id + '.json', {
        params: {
            id: $state.params.id
        }
    }).success(function(data) {
        console.log(data);
        $scope.new = data.news_list[0]
    })
    $scope.isGallery = false;
    $scope.imgUrl = '';
    $scope.gallery = function(imgUrl) {
        $scope.isGallery = true;
        $scope.imgUrl = imgUrl;
    }
}]).controller('insertCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.submit = function() {
        console.log($scope.title)
        console.log($scope.text)
        $http.get('http://localhost:81/news/php/index.php/news_api/insert_news', {
            params: {
                title: $scope.title,
                text: $scope.text
            }
        }).success(function(data) {
            console.log(data)
        })
    }
}]).controller('loginCtrl', ['$scope', '$http', 'cookie', '$window', function($scope, $http, cookie, $window) {
    $scope.submit = function() {
        console.log($scope.username);
        console.log($scope.password);
        $http.post('http://localhost:81/news/php/index.php/login_api/login', {
            params: {
                username: $scope.username,
                password: $scope.password
            }
        }).success(function(data) {
            cookie.setCookie('username', data.user_name);
            cookie.setCookie('token', data.info.token);
            $window.location.href = '#/index/recommend/6'
        })
    }
}])
