﻿/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.18
 * 描 述：岗位管理	
 */
var companyId = request('companyId');

var acceptClick;
var keyValue = '';
var bootstrap = function ($, cx) {
    "use strict";
    var selectedRow = cx.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_ParentId').lrformselect({
                placeholder: '请选择上级岗位',
                layerUrl: top.$.rootUrl + '/LR_OrganizationModule/Post/SelectForm',
                layerUrlH: 500,
                dataUrl: top.$.rootUrl + '/LR_OrganizationModule/Post/GetEntityName'
            });
            // 所属部门
            $('#F_DepartmentId').lrDepartmentSelect({ companyId: companyId, maxHeight: 100 });
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_PostId;
                $('#form').lrSetFormData(selectedRow);
            }
            else {
                $('#F_CompanyId').val(companyId);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        if (postData["F_ParentId"] == undefined || postData["F_ParentId"] == '' || postData["F_ParentId"] == '&nbsp;') {
            postData["F_ParentId"] = '0';
        }
        $.lrSaveForm(top.$.rootUrl + '/LR_OrganizationModule/Post/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}