/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.17
 * 描 述：数据库连接	
 */
var refreshGirdData; // 更新数据
var selectedRow;
var bootstrap = function ($, cx) {
    "use strict";
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                var keyword = $('#txt_Keyword').val();
                page.search({ keyword: keyword });
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                cx.layerForm({
                    id: 'Form',
                    title: '添加数据库',
                    url: top.$.rootUrl + '/LR_SystemModule/DatabaseLink/Form',
                    width: 620,
                    height: 350,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                var keyValue = $('#gridtable').jfGridValue('F_DatabaseLinkId');
                if (cx.checkrow(keyValue)) {
                    cx.layerForm({
                        id: 'Form',
                        title: '编辑数据库',
                        url: top.$.rootUrl + '/LR_SystemModule/DatabaseLink/Form',
                        width: 620,
                        height: 350,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('F_DatabaseLinkId');
                if (cx.checkrow(keyValue)) {
                    cx.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            cx.deleteForm(top.$.rootUrl + '/LR_SystemModule/DatabaseLink/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
        },
        initGrid: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/LR_SystemModule/DatabaseLink/GetList',
                headData: [
                    { label: "名称", name: "F_DBName", width: 150, align: "left" },
                    { label: "别名", name: "F_DBAlias", width: 150, align: "left" },
                    { label: "类型", name: "F_DbType", width: 80, align: "center" },
                    { label: "数据库地址", name: "F_ServerAddress", width: 200, align: "left" },
                    { label: "备注", name: "F_Description", width: 300, align: "left" }
                ],
                mainId: 'F_DatabaseLinkId',
                reloadSelected: true
            });
            page.search();
        },
        search: function (param) {
            $('#gridtable').jfGridSet('reload', param);
        }
    };

    // 保存数据后回调刷新
    refreshGirdData = function () {
        page.search();
    }

    page.init();
}


