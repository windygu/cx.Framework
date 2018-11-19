/* * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：超级管理员
 * 日  期：2018-10-30 17:13
 * 描  述：test
 */
var acceptClick;
var keyValue = request('keyValue');
var companyId = request('companyId');
var bootstrap = function ($, cx) {
    "use strict";
    var loginInfo = cx.clientdata.get(['userinfo']);
    var page = {
        init: function () {
            $('.lr-form-wrap').lrscroll();
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_CompanyId')[0].lrvalue = companyId;
            cx.clientdata.getAsync('company', {
                key: companyId,
                callback: function (_data) {
                    //alert(_data.name);
                    $('#F_CompanyId').val(_data.name);
                }
            });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Test_CodeDemo/A_test/GetFormData?keyValue=' + keyValue, function (data) {
                    for (var id in data) {
                        if (!!data[id].length && data[id].length > 0) {
                            $('#' + id).jfGridSet('refreshdata', data[id]);
                        }
                        else {
                            $('[data-table="' + id + '"]').lrSetFormData(data[id]);
                        }
                    }
                });
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('body').lrValidform()) {
            return false;
        }
        var postData = {
            strEntity: JSON.stringify($('body').lrGetFormData())
        };
        $.lrSaveForm(top.$.rootUrl + '/Test_CodeDemo/A_test/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
