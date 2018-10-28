/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.05.11
 * 描 述：添加扩展按钮	
 */
var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";

    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        if (!!callBack) {
            callBack(formData);
        }

        return true;
    };
}