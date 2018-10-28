﻿/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.17
 * 描 述：表单模板记录
 */
var keyValue = request('keyValue');

var refreshGirdData; // 更新数据
var bootstrap = function ($, cx) {
    "use strict";

    var nowschemeId = cx.frameTab.currentIframe().nowschemeId;

    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 预览表单
            $('#lr_preview').on('click', function () {
                var schemeId = $('#gridtable').jfGridValue('F_Id');


                if (cx.checkrow(schemeId)) {
                    cx.layerForm({
                        id: 'custmerForm_PreviewForm',
                        title: '预览当前表单',
                        url: top.$.rootUrl + '/LR_FormModule/Custmerform/PreviewForm?schemeInfoId=' + keyValue,
                        width: 800,
                        height: 600,
                        maxmin: true,
                        btn: null
                    });
                }
            });

            // 更新到此版本
            $('#lr_update').on('click', function () {
                var schemeId = $('#gridtable').jfGridValue('F_Id');
                if (cx.checkrow(schemeId)) {
                    if (schemeId != nowschemeId) {
                        cx.layerConfirm('是否要更新到该版本！', function (res) {
                            if (res) {
                                cx.postForm(top.$.rootUrl + '/LR_FormModule/Custmerform/UpdateScheme', { schemeInfoId: keyValue, schemeId: schemeId }, function () {
                                    nowschemeId = schemeId;
                                    cx.frameTab.currentIframe().nowschemeId = schemeId;
                                    cx.frameTab.currentIframe().refreshGirdData();
                                    refreshGirdData();

                                });
                            }
                        });
                    }
                    else {
                        cx.alert.warning('已经是当前版本了!');
                    }
                }
            });
        },
        initGrid: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/LR_FormModule/Custmerform/GetSchemePageList',
                headData: [
                    { label: "创建人", name: "F_CreateUserName", width: 160, align: "left" },
                    {
                        label: "创建时间", name: "F_CreateDate", width: 160, align: "left",
                        formatter: function (cellvalue) {
                            return cx.formatDate(cellvalue, 'yyyy-MM-dd hh:mm:ss');
                        }
                    },
                    {
                        label: "状态", name: "F_Type", width: 80, align: "center",
                        formatter: function (cellvalue, row) {
                            if (row.F_Type == 1) {
                                return '<span class=\"label label-success\" style=\"cursor: pointer;\">正式</span>';
                            }
                            else {
                                return '<span class=\"label label-info\" style=\"cursor: pointer;\">草稿</span>';
                            }
                        }
                    },
                    {
                        label: "", name: "F_Id", width: 80, align: "center",
                        formatter: function (cellvalue) {
                            if (cellvalue == nowschemeId) {
                                return '<span class=\"label label-danger\" style=\"cursor: pointer;\">当前版本</span>';
                            }
                        }
                    }
                ],
                mainId: 'F_Id',
                reloadSelected: true,
                isPage: true,
                sidx: 'F_CreateDate',
                sord: 'DESC'
            });
            page.search();
        },
        search: function (param) {
            $('#gridtable').jfGridSet('reload', { schemeInfoId: keyValue });
        }
    };

    // 保存数据后回调刷新
    refreshGirdData = function () {
        page.search();
    }

    page.init();
}