/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.18
 * 描 述：提交发起流程	
 */
var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";
    var type = cx.frameTab.currentIframe().type;
    var shcemeCode = cx.frameTab.currentIframe().shcemeCode;
    var processId = cx.frameTab.currentIframe().processId;
    var taskId = cx.frameTab.currentIframe().taskId;
    var formData = cx.frameTab.currentIframe().allFormDatas;

    //console.log(type, shcemeCode, processId, taskId);

    var page = {
        init: function () {
            if (type == 2) {
                $('#processName').parent().remove();
            }
            /// 获取下一个节点的审核人信息数据
            cx.workflowapi.auditer({
                isNew: (!!shcemeCode) ? true : false,
                schemeCode: shcemeCode,
                processId: processId,
                taskId: taskId,
                formData: JSON.stringify(formData),
                callback: function (res) {
                    console.log(res);
                    var $form = $('#description').parent();
                    $.each(res, function (_i, _item) {
                        if (_item.all || _item.list.length == 0) {
                            $form.before('<div class="col-xs-12 lr-form-item"><div class="lr-form-item-title" >' + _item.name + '</div><div id="' + _item.nodeId + '" class="nodeId"></div></div >');
                            $('#' + _item.nodeId).lrUserSelect(0);
                        }
                        else if (_item.list.length > 1) {
                            $form.before('<div class="col-xs-12 lr-form-item"><div class="lr-form-item-title" >' + _item.name + '</div><div id="' + _item.nodeId + '" class="nodeId" ></div></div >');
                            $('#' + _item.nodeId).lrselect({
                                data: _item.list,
                                id: 'id',
                                text: 'name'
                            });
                        }
                    });
                }
            });

        },
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        // 获取审核人员
        var auditers = {};
        $('#form').find('.nodeId').each(function () {
            var $this = $(this);
            var id = $this.attr('id');
            var type = $this.attr('type');
            if (!!formData[id]) {
                var point = {
                    userId: formData[id],
                };
                if (type == 'lrselect') {
                    point.userName = $this.find('.lr-select-placeholder').text();
                }
                else {
                    point.userName = $this.find('span').text();
                }
                auditers[id] = point;
            }
        });

        callBack(formData, auditers);
        return true;
    };
    page.init();
}