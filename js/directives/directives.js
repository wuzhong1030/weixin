/*global define */

define(['app','services'/*,'mainDirective'*/], function(app){
    'use strict';

    var directives = angular.module('app.directives', ['app.services']);

    directives.directive('cMark',[function(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                mark: "="
            },
            template:'<span><i class="ion-ios-star mark" style="color: #d1d1d1;font-size: 18px;margin-left: 4px;" ng-click="doMark(1)"></i>' +
            '<i class="ion-ios-star mark" style="color: #d1d1d1;font-size: 18px;margin-left: 4px;" ng-click="doMark(2)"></i>' +
            '<i class="ion-ios-star mark" style="color: #d1d1d1;font-size: 18px;margin-left: 4px;" ng-click="doMark(3)"></i>' +
            '<i class="ion-ios-star mark" style="color: #d1d1d1;font-size: 18px;margin-left: 4px;" ng-click="doMark(4)"></i>' +
            '<i class="ion-ios-star mark" style="color: #d1d1d1;font-size: 18px;margin-left: 4px;" ng-click="doMark(5)"></i></span>',
            link:function(scope){
                scope.doMark = function(num){
                    var mark = document.getElementsByClassName("mark");
                    for(var i = 0;i < 5; i++){
                        mark[i].style.color = '#d1d1d1';
                    }
                    for(var i = 0;i < num; i++){
                        mark[i].style.color = '#E6D932';
                    }
                    scope.mark = num;
                }
            }
        }
    }])
    .directive('cPhoto', function($ionicBackdrop){
        return{
            restrict: 'E',
            scope:{},
            templateUrl: './templates/directive/photo.tpl.html',
            link: function(scope){
                scope.cameraClick = function(){
                    angular.element("input[type='file']").click();
                };
                var $uploaderInput = angular.element("#uploaderInput"),
                    uploadImgs = [],
                    $gallery = angular.element("#gallery");
                $uploaderInput.on("change", function(e){
                    var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
                    console.log(files)
                    for (var i = 0, len = files.length; i < len; ++i) {
                        var file = files[i];
                        if (url) {
                            src = url.createObjectURL(file);
                        } else {
                            src = e.target.result;
                        }
                        uploadImgs.push({
                            src: src
                        });
                    };
                    scope.$apply(function () {
                        scope.uploadImgs = uploadImgs;
                    });
                    console.log(scope.uploadImgs)
                });
                // $ionicBackdrop.retain();
                scope.checkImg = function(imgObj){
                   // $ionicBackdrop.retain();
                    $('body').append('<div class="backdrop visible active"></div>');
                    $gallery.children('img').remove();
                    $gallery.append(createImg(imgObj));
                    $gallery.fadeIn(100);
                };

                scope.checkOver = function(){
                    $gallery.fadeOut(100);
                };

                scope.removeImg = function(index){
                    uploadImgs.splice(index, 1);
                    scope.uploadImgs = uploadImgs;
                };

                function createImg(imgObj){
                    var innerH = window.innerHeight - 60,//顶部的margin-top, 底部的height
                        innerW = window.innerWidth,
                        imgHTML,
                        radio = innerH/innerW,
                        img = new Image();
                    img.src = imgObj.src;
                    $gallery.height(innerH).width(innerW).css('line-height', innerH + 'px');
                    console.log(img.height, img.width);
                    if(img.height/img.width > radio){
                        imgHTML = '<img height="100%" alt="" src="'+ img.src +'" style="display: block;margin: 0 auto;">';
                    }else{
                        imgHTML = '<img width="100%" alt="" src="'+ img.src +'" style="vertical-align: middle;">';
                    }
                    return imgHTML;
                }
            }
        }
    });
    
    return directives;

});