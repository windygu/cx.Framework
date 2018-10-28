﻿/* * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn) 
 * Copyright (c) 山西辰星昇软件科技有限公司 
 * 创建人：超级管理员 
 * 日  期：2018-07-02 17:20 
 * 描  述：App首页图片管理
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, cx) {
    "use strict";
    var selectedRow = cx.frameTab.currentIframe().selectedRow;


    function uploadImg() {
        var f = document.getElementById('uploadFile').files[0]
        var src = window.URL.createObjectURL(f);
        document.getElementById('uploadPreview').src = src;
    };

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#uploadFile').on('change', uploadImg);
            $('.file').prepend('<img id="uploadPreview"  src="' + top.$.rootUrl + '/AppManager/DTImg/GetImg?keyValue=' + keyValue + '" >');

        },
        initData: function () {
            if (!!selectedRow) {
                $('#form').lrSetFormData(selectedRow);
            }
        }
    };
    // 保存数据 
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();

        if (!keyValue && !postData.uploadFile) {
            cx.alert.error("请选择图片");
            return false; 
        }

        var f = document.getElementById('uploadFile').files[0];
        if (!!f) {
            cx.loading(true, '正在保存...');
            $.ajaxFileUpload({
                data: postData,
                url: top.$.rootUrl + "/AppManager/DTImg/UploadFile?keyValue=" + keyValue,
                secureuri: false,
                fileElementId: 'uploadFile',
                dataType: 'json',
                success: function (data) {
                    if (!!callBack) {
                        callBack();
                    }
                    cx.loading(false);
                    cx.layerClose(window.name);
                }
            });
        }
        else {
            $.lrSaveForm(top.$.rootUrl + '/AppManager/DTImg/SaveForm?keyValue=' + keyValue, postData, function (res) {
                // 保存成功后才回调 
                if (!!callBack) {
                    callBack();
                }
            });
        }
    };
    page.init();
} 