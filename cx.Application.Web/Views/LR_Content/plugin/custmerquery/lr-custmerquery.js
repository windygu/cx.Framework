/*
 * 版 本 v1.0 辰星科技开发框架(http://www.cx.cn)
 * Copyright (c) 山西辰星昇软件科技有限公司
 * 创建人：力软-前端开发组
 * 日 期：2018.03.22
 * 描 述：cxISearch 输入搜索框，支持input输入框，数据异步加载，本地查询
 */
(function ($, cx) {
    "use strict";
    $.lrcustmerquery = {
        init: function ($self) {
            var dfop = $self[0]._lrcustmerquery.dfop;
            $self.parent().append('<div class="cx-isearch-panel"  style="max-height:' + dfop.maxHeight + 'px;" ><ul id="cxisearch_' + dfop.id + '" ></ul></div>');
        },
        bind: function ($self) {
            $self.on('input propertychange', function () {
                var $this = $(this);
                $.cxisearch.triggerSearch($self);
            });
        },
        triggerSearch: function ($self) {
            var dfop = $self[0]._lrcustmerquery.dfop;
            var $showPanel = $('#cxisearch_' + dfop.id);
            $showPanel.parent().hide();
            var _value = $self.val();
            if (_value) {
                if (!dfop._isload) {
                    dfop._isSearchneed = true;
                }
                else {
                    dfop._first = true;
                    dfop._value = _value;
                    dfop._begin = 0;
                    dfop._end = 100 > dfop.data.length ? dfop.data.length : 100;
                    if (dfop._isSearched) {
                        dfop._isSearched = false;
                        setTimeout(function () {
                            $.cxisearch.search($self);
                        });
                    }
                }
            }
            else {
                dfop._isSearchneed = false;
                $showPanel.html("");
            }
        },

        search: function ($self) {// 每次搜索100条
            var dfop = $self[0]._lrcustmerquery.dfop;
            var value = dfop._value;
            var begin = dfop._begin;
            var end = dfop._end;
            var data = dfop.data;

            for (var i = begin; i < end; i++) {
                var _item = data[i];
                if (item[dfop.text].indexOf(value) != -1) {
                    $.cxisearch.renderNone($self, item[dfop.text]);
                }
            }

            if (end < data.length) {
                dfop._begin = end;
                dfop._end = end + 100;
                if (dfop._end > data.length) {
                    dfop._end = data.length;
                }
                setTimeout(function () {
                    $.cxisearch.search($self);
                });
            }
            else {
                dfop._isSearched = true;
            }
        },
        renderNone: function ($self, text) {// 刷新一条数据
            var dfop = $self[0]._lrcustmerquery.dfop;
            var $showPanel = $('#cxisearch_' + dfop.id);
            if (dfop._first) {
                dfop._first = false;
                $showPanel.html("");
                $showPanel.parent().show();
            }
            $showPanel.append('<li>' + text + '</li>');
        }
    };

    $.fn.lrcustmerquery = function (op) {
        var dfop = {
            // 默认查询条件项;[{fields:[{name:'',value:'',condition:''}],Formula:'',name:''}]
            dfData: [],
            // 字段列表[{name:'',value:''}]
            Fields: [],
            // 所属功能地址url
            moduleUrl: '',
            // 加载自定义查询地址
            url: top.$.rootUrl + '/LR_SystemModule/CustmerQuery/GetList',
            // 自定义查询数据
            data: [],


            // 标记性参数
            _isload:false
        };
        $.extend(dfop, op || {});
        var $self = $(this);
        dfop.id = $self.attr('id');
        if (!dfop.id) {
            return false;
        }
        $self[0]._lrcustmerquery = { "dfop": dfop };

        $.lrcustmerquery.init($self);
        //加载数据
        if (!!dfop.url) {
            cx.httpAsync('GET', dfop.url, dfop.param, function (data) {
                $self[0]._lrcustmerquery.dfop.data = data || [];
                dfop._isload = true;
            });
        }
        return $self;
    };
})(jQuery, top.cx);
