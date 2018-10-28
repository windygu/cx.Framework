using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_CodeDemo.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.12
    /// 描 述：附件管理
    /// </summary>
    public class GridDemoController : MvcControllerBase
    {
        /// <summary>
        /// 普通表格
        /// </summary>
        /// <returns></returns>
        public ActionResult CommonIndex()
        {
            return View();
        }


        /// <summary>
        /// 编辑表格
        /// </summary>
        /// <returns></returns>
        public ActionResult EditIndex()
        {
            return View();
        }

        /// <summary>
        /// 报表表格
        /// </summary>
        /// <returns></returns>
        public ActionResult ReportIndex()
        {
            return View();
        }
    }
}