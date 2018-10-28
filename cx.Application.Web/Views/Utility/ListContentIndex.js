/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.28
 * 描 述：桌面消息查看
 */
var id = request('id');
var bootstrap = function ($, cx) {
    "use strict";

    var page = {
        init: function () {
            var item = top['dtlist' + id];
            $('.title p').text(item.f_title);
            $('.con').html($('<div></div>').html(item.f_content).text());
        }
    };
    page.init();
}