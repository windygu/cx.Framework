﻿/* * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：超级管理员
 * 日  期：2018-03-12 11:52
 * 描  述：添加常用字段
 */
var acceptClick;
var keyValue = request('keyValue');

var bootstrap = function ($, cx) {
    "use strict";

    var selectedRow = cx.frameTab.currentIframe().selectedRow;

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_DataType').lrDataItemSelect({ code: 'DbFieldType', maxHeight: 100 });
        },
        /*初始化数据*/
        initData: function () {
            if (!!keyValue) {
                console.log(selectedRow);
                $('#form').lrSetFormData(selectedRow);
            }
        },

    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/LR_SystemModule/DbField/SaveForm?keyValue=' + keyValue, postData, function (res) {
            callBack();
        });
    };
    page.init();
}

