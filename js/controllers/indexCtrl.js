define(/*['mainCtrl'],*/ function () {
    'use strict';
    function ctrl($scope, $ionicPopover, $ionicPopup, /*$mainServices, $indexServices,*/ $ionicTabsDelegate, $ionicSlideBoxDelegate) {
        //$mainServices.showLoading();
       /* $indexServices.get(function(data){

            if(data !== null && data !== undefined){
                $mainServices.hideLoding();
            }
            $scope.bannerList = data.banner.item;
            $scope.couponList = data.coupon.item;
            $scope.dazheList = data.tejia.item;
        });*/
        $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        });

        // .fromTemplateUrl() 方法
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        // 清除浮动框
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // 在隐藏浮动框后执行
        $scope.$on('popover.hidden', function() {
            // 执行代码
        });
        // 移除浮动框后执行
        $scope.$on('popover.removed', function() {
            // 执行代码
        });

        function changeCss(type){
            switch (type){
                case 0:
                    $(".dot-line").css('left', '5%');
                    break;
                case 1:
                    $(".dot-line").css('left', '38%');
                    break;
                case 2:
                    $(".dot-line").css('left', '72%');
                    break;
            }
            $(".nav-box > ul > li > span").css('color', '#0D0D0D');
            $(".nav-box > ul > li:eq("+type+") > span").css('color', '#0c60ee');
        }

        $scope.selectType = function(type){
            changeCss(type);
            $ionicSlideBoxDelegate.slide(type);
        };

        $scope.index = 0;
        $scope.go_changed=function(index){
            changeCss(index)
        };
        var second = 60, timer, flag = true;
        function getTimes(){
            var $code = $("#get-code"),
                _width = $code.width();

            $code.width(_width);
            $code.css('font-size', '14px')
            second--;
            flag = false;
            $code.text('重新发送'+second+'秒');
            timer = setTimeout(getTimes, 1000);
            if ( second <= 0 ){
                second = 60;
                flag = true;
                $code.text('获取验证码');
                clearTimeout(timer);
            }
        }
        $scope.getCode = function(){
            if(flag){
                getTimes();
            }
        };


    }
    
    ctrl.$inject = ['$scope', '$ionicPopover', '$ionicPopup', /*'$mainServices', '$indexServices', */'$ionicTabsDelegate', '$ionicSlideBoxDelegate'];
    return ctrl;
    
});