/*
 * 版 本 cx-ADMS V7.0.0 力软敏 捷开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端 开发组
 * 日 期：2018.03.16
 * 描 述：tab窗口操作方法
 */
(function ($, cx) {
    "use strict";
    //初始化菜单和tab页的属性Id
    var iframeIdList = {};

    cx.frameTab = {
        iframeId: '',
        init: function () {
            cx.frameTab.bind();
        },
        bind: function () {
            $(".lr-frame-tabs-wrap").lrscroll();
        },
        setCurrentIframeId: function (iframeId) {
            cx.iframeId = iframeId;
        },
        open: function (module, notAllowClosed) {
            var $tabsUl = $('#lr_frame_tabs_ul');
            var $frameMain = $('#lr_frame_main');

            if (iframeIdList[module.F_ModuleId] == undefined || iframeIdList[module.F_ModuleId] == null) {
                // 隐藏之前的tab和窗口
                if (cx.frameTab.iframeId != '') {
                    $tabsUl.find('#lr_tab_' + cx.frameTab.iframeId).removeClass('active');
                    $frameMain.find('#lr_iframe_' + cx.frameTab.iframeId).removeClass('active');
                    iframeIdList[cx.frameTab.iframeId] = 0;
                }
                var parentId = cx.frameTab.iframeId;
                cx.frameTab.iframeId = module.F_ModuleId;
                iframeIdList[cx.frameTab.iframeId] = 1;

                // 打开一个功能模块tab_iframe页面
                var $tabItem = $('<li class="lr-frame-tabItem active" id="lr_tab_' + module.F_ModuleId + '" parent-id="' + parentId + '"  ><span>' + module.F_FullName + '</span></li>');
                // 翻译
                cx.language.get(module.F_FullName, function (text) {
                    $tabItem.find('span').text(text);
                });

                if (!notAllowClosed) {
                    $tabItem.append('<span class="reomve" title="关闭窗口"></span>');
                }
                var $iframe = $('<iframe class="lr-frame-iframe active" id="lr_iframe_' + module.F_ModuleId + '" frameborder="0" src="' + $.rootUrl + module.F_UrlAddress + '"></iframe>');
                $tabsUl.append($tabItem);
                $frameMain.append($iframe);

                var w = 0;
                var width = $tabsUl.children().each(function () {
                    w += $(this).outerWidth();
                });
                $tabsUl.css({ 'width': w });
                $tabsUl.parent().css({ 'width': w });


                $(".lr-frame-tabs-wrap").lrscrollSet('moveRight');

             

                //绑定一个点击事件
                $tabItem.on('click', function () {
                    var id = $(this).attr('id').replace('lr_tab_', '');
                    cx.frameTab.focus(id);
                });
                $tabItem.find('.reomve').on('click', function () {
                    var id = $(this).parent().attr('id').replace('lr_tab_', '');
                    cx.frameTab.close(id);
                    return false;
                });

                if (!!cx.frameTab.opencallback) {
                    cx.frameTab.opencallback();
                }
                if (!notAllowClosed) {
                    $.ajax({
                        url: top.$.rootUrl + "/Home/VisitModule",
                        data: { moduleName: module.F_FullName, moduleUrl: module.F_UrlAddress },
                        type: "post",
                        dataType: "text"
                    });
                }
            }
            else {
                cx.frameTab.focus(module.F_ModuleId);
            }
        },
        focus: function (moduleId) {
            if (iframeIdList[moduleId] == 0) {
                // 定位焦点tab页
                $('#lr_tab_' + cx.frameTab.iframeId).removeClass('active');
                $('#lr_iframe_' + cx.frameTab.iframeId).removeClass('active');
                iframeIdList[cx.frameTab.iframeId] = 0;

                $('#lr_tab_' + moduleId).addClass('active');
                $('#lr_iframe_' + moduleId).addClass('active');
                cx.frameTab.iframeId = moduleId;
                iframeIdList[moduleId] = 1;

                if (!!cx.frameTab.opencallback) {
                    cx.frameTab.opencallback();
                }
            }
        },
        leaveFocus: function () {
            $('#lr_tab_' + cx.frameTab.iframeId).removeClass('active');
            $('#lr_iframe_' + cx.frameTab.iframeId).removeClass('active');
            iframeIdList[cx.frameTab.iframeId] = 0;
            cx.frameTab.iframeId = '';
        },
        close: function (moduleId) {
            delete iframeIdList[moduleId];

            var $this = $('#lr_tab_' + moduleId);
            var $prev = $this.prev();// 获取它的上一个节点数据;
            if ($prev.length < 1) {
                $prev = $this.next();
            }
            $this.remove();
            $('#lr_iframe_' + moduleId).remove();
            if (moduleId == cx.frameTab.iframeId && $prev.length > 0) {
                var prevId = $prev.attr('id').replace('lr_tab_', '');

                $prev.addClass('active');
                $('#lr_iframe_' + prevId).addClass('active');
                cx.frameTab.iframeId = prevId;
                iframeIdList[prevId] = 1;
            }
            else {
                if ($prev.length < 1) {
                    cx.frameTab.iframeId = "";
                }
            }

            var $tabsUl = $('#lr_frame_tabs_ul');
            var w = 0;
            var width = $tabsUl.children().each(function () {
                w += $(this).outerWidth();
            });
            $tabsUl.css({ 'width': w });
            $tabsUl.parent().css({ 'width': w });

            if (!!cx.frameTab.closecallback) {
                cx.frameTab.closecallback();
            }
        }
        // 获取当前窗口
        ,currentIframe: function () {
            var ifameId = 'lr_iframe_' + cx.frameTab.iframeId;
            if (top.frames[ifameId].contentWindow != undefined) {
                return top.frames[ifameId].contentWindow;
            }
            else {
                return top.frames[ifameId];
            }
        }
        ,parentIframe: function () {
            var ifameId = 'lr_iframe_' + top.$('#lr_tab_'+cx.frameTab.iframeId).attr('parent-id');
            if (top.frames[ifameId].contentWindow != undefined) {
                return top.frames[ifameId].contentWindow;
            }
            else {
                return top.frames[ifameId];
            }
        }


        , opencallback: false
        , closecallback: false
    };

    cx.frameTab.init();
})(window.jQuery, top.cx);
