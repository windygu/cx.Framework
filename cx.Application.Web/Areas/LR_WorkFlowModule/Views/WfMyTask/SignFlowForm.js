﻿/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.18
 * 描 述：流程加签	
 */
var acceptClick;
var auditorName = '';
var bootstrap = function ($, cx) {
    "use strict";
    var page = {
        init: function () {
            $('#auditorId').lrselect({
                value: 'F_UserId',
                text: 'F_RealName',
                title: 'F_RealName',
                // 展开最大高度
                maxHeight: 190,
                // 是否允许搜索
                allowSearch: true,
                select: function (item) {
                    if (item) {
                        auditorName = item.F_RealName;
                    }
                }
            });
            $('#department').lrDepartmentSelect({
                maxHeight: 220
            }).on('change', function () {
                var value = $(this).lrselectGet();
                $('#auditorId').lrselectRefresh({
                    url: top.$.rootUrl + '/LR_OrganizationModule/User/GetList',
                    param: { departmentId: value }
                });
            });
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        callBack(formData);
        return true;
    };
    page.init();
}