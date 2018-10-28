﻿/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.17
 * 描 述：PC端代码生成模板管理	
 */
var bootstrap = function ($, cx) {
    "use strict";
    var page = {
        init: function () {
            page.bind();
        },
        bind: function () {
            // 自定义开发模板
            $('#lr_custmerCode').on('click', function () {
                cx.layerForm({
                    id: 'CustmerCodeIndex',
                    title: '在线代码生成器 并自动创建代码(自定义开发模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/CustmerCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 快速开发模板
            $('#lr_fastCode').on('click', function () {
                cx.layerForm({
                    id: 'FastCodeIndex',
                    title: '在线代码生成器 并自动创建代码(快速开发模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/FastCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 实体映射类生成
            $('#lr_entityCode').on('click', function () {
                cx.layerForm({
                    id: 'FastCodeIndex',
                    title: '在线代码生成器 并自动创建代码(实体映射类生成)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/EntityCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 系统表单开发模板
            $('#lr_workflowCode').on('click', function () {
                cx.layerForm({
                    id: 'CustmerCodeIndex',
                    title: '在线代码生成器 并自动创建代码(流程系统表单开发模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/WorkflowCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 列表编辑开发模板
            $('#lr_gridEditCode').on('click', function () {
                cx.layerForm({
                    id: 'CustmerCodeIndex',
                    title: '在线代码生成器 并自动创建代码(编辑列表页模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/GridEditCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 报表开发模板
            $('#lr_reportCode').on('click', function () {
                cx.layerForm({
                    id: 'CustmerCodeIndex',
                    title: '在线代码生成器 并自动创建代码(报表显示页模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/ReportCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
            // 移动开发模板
            $('#lr_appCustmerCode').on('click', function () {
                cx.layerForm({
                    id: 'CustmerCodeIndex',
                    title: '在线代码生成器 并自动创建代码(移动开发模板)',
                    url: top.$.rootUrl + '/LR_CodeGeneratorModule/TemplatePC/AppCustmerCodeIndex',
                    width: 1100,
                    height: 700,
                    maxmin: true,
                    btn: null
                });
            });
        }
    };
    page.init();
}