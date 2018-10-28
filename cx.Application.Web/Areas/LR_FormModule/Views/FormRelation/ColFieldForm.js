/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.11
 * 描 述：列表字段添加	
 */
var id = request('id');

var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";
    var formscheme = top.layer_Form.formscheme;
    var formFields = top.layer_Form.formFields;
    var colData = top.layer_Form.colData;


    var fieldName = '';
    var compontId = '';

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#fieldId').lrselect({
                text: 'title',
                value: 'field',
                data: formFields,
                allowSearch: true,
                select: function (item) {
                    fieldName = item.title;
                    compontId = item.id;
                }
            });
            // 所在行所占比
            $('#align').lrselect().lrselectSet('left');
        },
        initData: function () {
            if (!!id) {
                for (var i = 0, l = colData.length; i < l; i++) {
                    if (colData[i].id == id) {
                        $('#form').lrSetFormData(colData[i]);
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
        postData.compontId = compontId;
        callBack(postData);
        return true;
    };
    page.init();
}