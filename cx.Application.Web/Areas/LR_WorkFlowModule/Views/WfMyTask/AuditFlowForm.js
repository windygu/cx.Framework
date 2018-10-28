/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.04.18
 * 描 述：审核流程	
 */
var acceptClick;
var bootstrap = function ($, cx) {
    "use strict";
    var processId = cx.frameTab.currentIframe().processId;
    var taskId = cx.frameTab.currentIframe().taskId;
    var formData = cx.frameTab.currentIframe().allFormDatas;
    var shcemeCode = cx.frameTab.currentIframe().shcemeCode;


    var page = {
        init: function () {
            page.initData();

            /// 获取下一个节点的审核人信息数据
            cx.workflowapi.auditer({
                isNew: (!!shcemeCode) ? true : false,
                schemeCode: shcemeCode,
                processId: processId,
                taskId: taskId,
                formData: JSON.stringify(formData),
                callback: function (res) {
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

            // 如果驳回隐藏掉下一个节点审核人员
            // 权限设置
            $('[name="verifyType"]').on('click', function () {
                var $this = $(this);
                var value = $this.val();
                if (value == '1') {
                    $('.nodeId').parent().show();
                }
                else {
                    $('.nodeId').parent().hide();
                }
            });
        },
        initData: function () {
            //$('#form').lrSetFormData(currentLine);
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();

        if (formData.verifyType == undefined) {
            cx.alert.error('请选择审核结果！');
            return false;
        }
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


        callBack(formData);
        return true;
    };
    page.init();
}