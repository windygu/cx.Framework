using cx.Application.CRM;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_CRMModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创 建：超级管理员
    /// 日 期：2018-07-11 14:20
    /// 描 述：现金余额
    /// </summary>
    public class CashBalanceController : MvcControllerBase
    {
        private CrmCashBalanceIBLL crmCashBalanceIBLL = new CrmCashBalanceBLL();

        #region 视图功能
        /// <summary>
        /// 列表页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns>返回列表Json</returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetList(string queryJson)
        {
            var data = crmCashBalanceIBLL.GetList(queryJson);
            return Success(data);
        }
        #endregion
    }
}