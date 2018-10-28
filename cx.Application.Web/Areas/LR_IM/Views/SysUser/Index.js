/* * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：超级管理员
 * 日  期：2018-05-24 10:00
 * 描  述：即时通讯用户管理
 */
var refreshGirdData;
var bootstrap = function ($, cx) {
    "use strict";
    var page = {
        init: function () {
            page.initGird();
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
                cx.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/LR_IM/SysUser/Form',
                    width: 500,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('F_Id');
                if (cx.checkrow(keyValue)) {
                    cx.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/LR_IM/SysUser/Form?keyValue=' + keyValue,
                        width: 500,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('F_Id');
                if (cx.checkrow(keyValue)) {
                    cx.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            cx.deleteForm(top.$.rootUrl + '/LR_IM/SysUser/DeleteForm', { keyValue: keyValue }, function () {
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/LR_IM/SysUser/GetPageList',
                headData: [
                    { label: '用户名称', name: 'F_Name', width: 160, align: "left" },
                    { label: '用户编码', name: 'F_Code', width: 100, align: "left" },
                    {
                        label: '图标', name: 'F_Icon', width: 60, align: 'center',
                        formatter: function (cellvalue) {
                            return '<i class="' + cellvalue + '" ></i>';
                        }
                    },
                    { label: '创建用户', name: 'F_CreateUserName', width: 100, align: 'left' },
                    {
                        label: '创建时间', name: 'F_CreateDate', width: 130, align: 'left',
                        formatter: function (cellvalue) {
                            return cx.formatDate(cellvalue, 'yyyy-MM-dd hh:mm');
                        }
                    },
                    { label: '备注', name: 'F_Description', width: 200, align: "left" }
                ],
                mainId: 'F_Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            $('#gridtable').jfGridSet('reload', param || {});
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
