

/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.11
 * 描 述：个人中心-我的头像	
 */
var loaddfimg;
var baseinfo;
var bootstrap = function ($, cx) {
    "use strict";
    var getBaseinfo = function (callback) {
        baseinfo = cx.frameTab.currentIframe().baseinfo;
        if (!baseinfo) {
            setTimeout(function () { getBaseinfo(callback) }, 100);
        }
        else {
            callback();
        }
    };


    var page = {
        init: function () {
            getBaseinfo(function () {
                page.initData();
                page.bind();
            });
        },
        bind: function () {
            function uploadImg() {
                var f = document.getElementById('uploadFile').files[0]
                var src = window.URL.createObjectURL(f);
                document.getElementById('uploadPreview').src = src;
            };

            $('#uploadFile').on('change', uploadImg);
            
            $('#lr_save_btn').on('click', function () {
                var f = document.getElementById('uploadFile').files[0];
                if (!!f)
                {
                    cx.loading(true, '正在保存...');
                    $.ajaxFileUpload({
                        url: top.$.rootUrl + "/UserCenter/UploadFile",
                        secureuri: false,
                        fileElementId: 'uploadFile',
                        dataType: 'json',
                        success: function (data) {
                            cx.loading(false);
                            $('#uploadFile').on('change', uploadImg);
                            if (data.code == 200) {
                                cx.alert.success('保存成功');
                            }
                        }
                    });
                }
            });
        },
        initData: function () {
            $('.file').prepend('<img id="uploadPreview"  src="' + top.$.rootUrl + '/LR_OrganizationModule/User/GetImg?userId=' + baseinfo.userId + '" >');
        }
    };
    page.init();
}