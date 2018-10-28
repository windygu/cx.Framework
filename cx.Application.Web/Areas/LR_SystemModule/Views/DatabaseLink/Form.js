/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.11
 * 描 述：数据库管理	
 */
var keyValue = "";
var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";
    var selectedRow = cx.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_DbType').lrDataItemSelect({ code: 'DbVersion' });

            $('#lr_test').on('click', function () {
                var dbType = $('#F_DbType').lrselectGet();
                if (!dbType) {
                    cx.alert.error('请选择数据库类型');
                    return false;
                }
                var connection = $('#F_DbConnection').val();
                if (!connection) {
                    cx.alert.error('请填写数据库连接串');
                    return false;
                }
                $.lrPostForm(top.$.rootUrl + '/LR_SystemModule/DatabaseLink/TestConnection', { connection: connection, dbType: dbType, keyValue: keyValue });
            });
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_DatabaseLinkId;
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
        $.lrSaveForm(top.$.rootUrl + '/LR_SystemModule/DatabaseLink/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}