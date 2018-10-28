/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.05
 * 描 述：工作流模板预览	
 */
var schemeId = request('schemeId');

var currentNode;
var currentLine;
var bootstrap = function ($, cx) {
    "use strict";

    var page = {
        init: function () {
            // 设计页面初始化
            $('#flow').lrworkflow({
                isPreview:true,
                openNode: function (node) {
                    currentNode = node;
                    if (node.type != 'endround') {
                        cx.layerForm({
                            id: 'NodeForm',
                            title: '节点信息设置【' + node.name + '】',
                            url: top.$.rootUrl + '/LR_WorkFlowModule/WfScheme/NodeForm?layerId=layer_PreviewForm&isPreview=1',
                            width: 700,
                            height: 500,
                            btn: null
                        });
                    }
                }
            });
            
            if (!!schemeId) {
                $.lrSetForm(top.$.rootUrl + '/LR_WorkFlowModule/WfScheme/GetScheme?schemeId=' + schemeId, function (res) {
                    var shceme = JSON.parse(res.F_Scheme);
                    $('#flow').lrworkflowSet('set', { data: shceme });
                });
            }
        }
    };

    page.init();
}