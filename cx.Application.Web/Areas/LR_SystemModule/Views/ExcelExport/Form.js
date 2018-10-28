/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.11
 * 描 述：区域管理	
 */
var keyValue = '';
var acceptClick;
var moduleId = request('moduleId');
var bootstrap = function ($, cx) {
    "use strict";
    var selectedRow = cx.frameTab.currentIframe().selectedRow;
    var btnName = '';
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_ModuleBtnId').lrselect({
                url: top.$.rootUrl + '/LR_SystemModule/Module/GetButtonListNoAuthorize',
                param: {
                    moduleId: moduleId
                },
                value: 'F_EnCode',
                text: 'F_FullName',
                select: function (item) {
                    if (!!item) {
                        btnName = item.F_FullName
                    }
                    else {
                        btnName = '';
                    }

                },
                maxHeight:170
            });
        },
        initData: function () {
            $('#F_ModuleId').val(moduleId);
            if (!!selectedRow) {
                $('#F_ModuleBtnId').lrselectRefresh({
                    param: {
                        moduleId: selectedRow.F_ModuleId
                    }
                });
                keyValue = selectedRow.F_Id;
                $('#form').lrSetFormData(selectedRow);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        postData.F_BtnName = btnName;
        $.lrSaveForm(top.$.rootUrl + '/LR_SystemModule/ExcelExport/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}