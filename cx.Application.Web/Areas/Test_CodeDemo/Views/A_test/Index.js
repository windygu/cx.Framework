/* * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：超级管理员
 * 日  期：2018-10-30 17:13
 * 描  述：test
 */
var refreshGirdData;
var bootstrap = function ($, cx) {
    "use strict";
    var loginInfo = cx.clientdata.get(['userinfo']);
    var companyId = loginInfo.companyId;
    var page = {
        init: function () {
            page.initGird();
            page.bind();
        },
        bind: function () {
            if (loginInfo.isSystem)
                // 初始化左侧树形数据
                $('#dataTree').lrtree({
                    url: top.$.rootUrl + '/LR_SystemModule/DataSource/GetTree?code=company&parentId=f_parentid&Id=f_companyid&showId=f_fullname',
                    nodeClick: function (item) {
                        page.search({ F_CompanyId: item.value });
                        companyId = item.value;
                    }
                });
            page.search({ F_CompanyId: loginInfo.companyId });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                cx.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/Test_CodeDemo/A_test/Form?companyId=' + companyId,
                    width: 600,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('id');
                if (cx.checkrow(keyValue)) {
                    cx.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Test_CodeDemo/A_test/Form?keyValue=' + keyValue + '&companyId=' + companyId,
                        width: 600,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('id');
                if (cx.checkrow(keyValue)) {
                    cx.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            cx.deleteForm(top.$.rootUrl + '/Test_CodeDemo/A_test/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
            // 打印
            $('#lr_print').on('click', function () {
                $('#gridtable').jqprintTable();
            });
        },
        // 初始化列表
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Test_CodeDemo/A_test/GetPageList',
                headData: [
                    { label: "文本框", name: "name", width: 100, align: "left" },
                    {
                        label: "当前信息", name: "F_CompanyId", width: 100, align: "left",
                        formatterAsync: function (callback, value, row, op, $cell) {
                            cx.clientdata.getAsync('company', {
                                key: value,
                                callback: function (_data) {
                                    callback(_data.name);
                                }
                            });
                        }
                    },
                ],
                mainId: 'id',
                isPage: true
            });
            //page.search();
        },
        search: function (param) {
            param = param || {};
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search({ F_CompanyId: loginInfo.companyId });
    };
    page.init();
}
