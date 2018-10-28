﻿using cx.Application.TwoDevelopment.SystemDemo;
using cx.Util;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_WorkFlowModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：系统表单-请假单
    /// </summary>
    public class WfSystemDemoController : MvcControllerBase
    {
        #region 请假表单
        // 请假表单后台方法
        DemoleaveIBLL demoleaveIBLL = new DemoleaveBLL();

        /// <summary>
        /// 系统请假单(视图)
        /// </summary>
        /// <returns></returns>
        public ActionResult DemoLeaveForm()
        {
            return View();
        }
        /// <summary>
        /// 系统请假单(列表视图)
        /// </summary>
        /// <returns></returns>
        public ActionResult DemoLeaveIndex()
        {
            return View();
        }

        /// <summary>
        /// 获取分页数据
        /// </summary>
        /// <param name="pagination">分页参数</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetPageList(string pagination)
        {
            Pagination paginationobj = pagination.ToObject<Pagination>();
            var data = demoleaveIBLL.GetPageList(paginationobj);
            var jsonData = new
            {
                rows = data,
                total = paginationobj.total,
                page = paginationobj.page,
                records = paginationobj.records,
            };
            return Success(jsonData);
        }


        /// <summary>
        /// 系统请假单(保存数据)
        /// </summary>
        /// <param name="keyValue"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        public ActionResult DemoLeaveSaveForm(string keyValue, DemoleaveEntity entity)
        {
            demoleaveIBLL.SaveEntity(keyValue, entity);
            return Success("保存成功");
        }
        /// <summary>
        /// 系统请假单(获取数据)
        /// </summary>
        /// <param name="processId">流程实例主键</param>
        /// <returns></returns>
        public ActionResult DemoLeaveGetFormData(string processId)
        {
            var data = demoleaveIBLL.GetEntity(processId);
            return Success(data);
        }
        #endregion
    }
}