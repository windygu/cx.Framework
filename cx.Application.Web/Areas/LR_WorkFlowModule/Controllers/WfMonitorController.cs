﻿using cx.Application.WorkFlow;
using cx.Util;
using System.Collections.Generic;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_WorkFlowModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：流程实例监控
    /// </summary>
    public class WfMonitorController : MvcControllerBase
    {
        private WfProcessInstanceIBLL wfProcessInstanceIBLL = new WfProcessInstanceBLL();

        #region 视图功能
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 获取我的流程信息列表
        /// </summary>
        /// <param name="pagination">分页参数</param>
        /// <param name="queryJson">查询条件</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetPorcessList(string pagination, string queryJson)
        {
            Pagination paginationobj = pagination.ToObject<Pagination>();
            IEnumerable<WfProcessInstanceEntity> list = list = wfProcessInstanceIBLL.GetPageList(paginationobj, queryJson);
            var jsonData = new
            {
                rows = list,
                total = paginationobj.total,
                page = paginationobj.page,
                records = paginationobj.records,
            };
            return Success(jsonData);
        }
        #endregion
    }
}