/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.03.16
 * 描 述：excel 导入导出
 */
(function ($, cx) {
    "use strict";
    $(function () {
        function excelInit() {
            if (!!lrModule) {
                // 导入
                cx.httpAsync('GET', top.$.rootUrl + '/LR_SystemModule/ExcelImport/GetList', { moduleId: lrModule.F_ModuleId }, function (data) {
                    if (!!data && data.length > 0) {
                        var $layouttool = $('.lr-layout-tool-right');
                        var $btnGroup = $('<div class=" btn-group btn-group-sm"></div>');
                        var hasBtn = false;
                        $.each(data, function (id, item) {
                            if (!!lrModuleButtonList[item.F_ModuleBtnId]) {
                                hasBtn = true;
                                var $btn = $('<a id="' + item.F_ModuleBtnId + '" data-value="' + item.F_Id + '"  class="btn btn-default"><i class="fa fa-sign-in"></i>&nbsp;' + item.F_BtnName + '</a>')
                                $btn.on('click', function () {
                                    var id = $(this).attr('data-value');
                                    var text = $(this).text();
                                    cx.layerForm({
                                        id: 'ImportForm',
                                        title: text,
                                        url: top.$.rootUrl + '/LR_SystemModule/ExcelImport/ImportForm?id=' + id,
                                        width: 600,
                                        height: 400,
                                        maxmin: true,
                                        btn: null
                                    });
                                });
                                $btnGroup.append($btn);
                            }
                        });
                        $layouttool.append($btnGroup);
                    }
                });
                // 导出
                cx.httpAsync('GET', top.$.rootUrl + '/LR_SystemModule/ExcelExport/GetList', { moduleId: lrModule.F_ModuleId }, function (data) {
                    if (!!data && data.length > 0) {
                        var $layouttool = $('.lr-layout-tool-right');
                        var $btnGroup = $('<div class=" btn-group btn-group-sm"></div>');
                        var hasBtn = false;
                        $.each(data, function (id, item) {
                            if (!!lrModuleButtonList[item.F_ModuleBtnId]) {
                                hasBtn = true;
                                var $btn = $('<a id="' + item.F_ModuleBtnId + '" class="btn btn-default"><i class="fa fa-sign-out"></i>&nbsp;' + item.F_BtnName + '</a>')
                                $btn[0].dfop = item;
                                $btn.on('click', function () {
                                    item = $btn[0].dfop;
                                    cx.layerForm({
                                        id: "ExcelExportForm",
                                        title: '导出Excel数据',
                                        url: top.$.rootUrl + '/Utility/ExcelExportForm?gridId=' + item.F_GridId + '&filename=' + encodeURI(encodeURI(item.F_Name)),
                                        width: 500,
                                        height: 380,
                                        callBack: function (id) {
                                            return top[id].acceptClick();
                                        },
                                        btn: ['导出Excel', '关闭']
                                    });
                                });
                                $btnGroup.append($btn);
                            }
                        });
                        $layouttool.append($btnGroup);
                    }
                });
            }
            else {
                setTimeout(excelInit, 100);
            }
        }
        excelInit();
    });

})(window.jQuery, top.cx);
