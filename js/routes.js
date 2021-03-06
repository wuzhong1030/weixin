/*global define, require */

define(['app'], function(app) {
    'use strict';
    app/*.run(function ($ionicPlatform, $http, $rootScope) {
            $rootScope.platform = ionic.Platform.platform();
            $http.defaults.headers.common.token = 'admin';
            $rootScope.$on('$ionicView.beforeEnter', function(event, viewData) {
                console.log(111)
                viewData.enableBack = true;
            });
            $rootScope.$on('$ionicView.afterEnter', function() {
                console.log(222)
            }, false);
        })*/
        .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
            // setup an abstract state for the tabs directive
              /*  .state('wx', {
                url: '/wx',
                abstract: true,
                templateUrl: 'templates/wx.tpl.html'
            })*/
            // Each tab has its own nav history stack:

            .state('bonus', {
                url: '/bonus',
                templateUrl: 'templates/bonus/bonus.tpl.html',
                data:{pageTitle:'bonus'},
                controller: 'indexCtrl'
            })
            .state('record', {
                url: '/record',
                templateUrl: 'templates/bonus/bonus-record.tpl.html',
                 controller: 'indexCtrl'
            })
            .state('exchange', {
                url: '/exchange',
                templateUrl: 'templates/bonus/bonus-exchange.tpl.html',
                 controller: 'indexCtrl'
            })
            .state('order', {
                url: '/order',
                templateUrl: 'templates/order/order-form.tpl.html',
                 controller: 'indexCtrl'
            })
            .state('seraddrtime', { //服务地址
                url: '/seraddrtime',
                templateUrl: 'templates/order/ser-addr-time.tpl.html',
                controller: 'indexCtrl'
            })
                .state('presonal', { //个人中心
                    url: '/presonal',
                    templateUrl: 'templates/order/presonal.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('qr-code', { //二维码
                    url: '/qr-code',
                    templateUrl: 'templates/order/qr-code.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('detail', { //订单详情
                    url: '/detail',
                    templateUrl: 'templates/order/order-detail.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('detail_', { //详细
                    url: '/detail_',
                    templateUrl: 'templates/order/detail.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('login', { //登陆
                    url: '/login',
                    templateUrl: 'templates/order/login.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('rated', { //评价
                    url: '/rated',
                    templateUrl: 'templates/order/rated.tpl.html',
                    controller: 'indexCtrl'
                })
                .state('address', { //我的地址
                    url: '/address',
                    templateUrl: 'templates/order/my-address.tpl.html',
                    controller: 'indexCtrl'
                })
            /*.state('tab.sort', {
                url: '/sort',
                views: {
                    'tab-sort': {
                        templateUrl: 'templates/sort/index.html',
                        controller: 'sortCtrl'
                    }
                }
            })
            .state('tab.cart', {
                url: '/cart',
                views: {
                    'tab-cart': {
                        templateUrl: 'templates/cart/index.html',
                        controller: 'cartCtrl'
                    }
                }
            })
            .state('tab.member', {
                url: '/member',
                views: {
                    'tab-member': {
                        templateUrl: 'templates/member/index.html',
                        controller: 'memberCtrl'
                    }
                }
            })
            .state('tab.more', {
                url: '/more',
                views: {
                    'tab-more': {
                        templateUrl: 'templates/etc/more.html',
                        controller: 'moreCtrl'
                    }
                }
            })
            .state('map', {
                url: '/map',
                templateUrl: 'templates/etc/map.html',
                controller: 'mapCtrl'
            });*/
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/bonus');

    }]);
});
