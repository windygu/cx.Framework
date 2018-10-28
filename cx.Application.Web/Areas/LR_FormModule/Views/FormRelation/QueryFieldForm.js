﻿/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.11
 * 描 述：查询条件字段添加	
 */
var id = request('id');

var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";
    var formscheme = top.layer_Form.formscheme;
    var formFields = top.layer_Form.formFields;
    var queryData = top.layer_Form.queryData;


    var fieldName = '';

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            var formFields2 = [];
            $.each(formFields, function (id, item) {
                if (item.type != 'label' && item.type != 'datetime' && item.type != 'upload' && item.type != 'currentInfo') {
                    formFields2.push(item);
                }
            });

            $('#fieldId').lrselect({
                text: 'title',
                data: formFields2,
                allowSearch: true,
                maxHeight: 140,
                select: function (item) {
                    fieldName = item.title;
                }
            });
            // 所在行所占比
            $('#portion').lrselect({
                data: [
                    {
                        id: '1', text: '1'
                    },
                    {
                        id: '2', text: '1/2'
                    },
                    {
                        id: '3', text: '1/3'
                    },
                    {
                        id: '4', text: '1/4'
                    },
                    {
                        id: '6', text: '1/6'
                    }
                ],
                placeholder: false,
                value: 'id',
                text: 'text'
            }).lrselectSet('1');
        },
        initData: function () {
            if (!!id) {
                for (var i = 0, l = queryData.length; i < l; i++) {
                    if (queryData[i].id == id) {
                        $('#form').lrSetFormData(queryData[i]);
                        break;
                    }
                }
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        postData.id = id || cx.newGuid();
        postData.fieldName = fieldName;
        callBack(postData);
        return true;
    };
    page.init();
}