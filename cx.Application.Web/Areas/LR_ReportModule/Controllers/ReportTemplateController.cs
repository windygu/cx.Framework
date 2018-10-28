using cx.Util;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_ReportModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.09
    /// 描 述：报表模板
    /// </summary>
    public class ReportTemplateController : MvcControllerBase
    {
        #region 视图功能
        /// <summary>
        /// 采购报表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult PurchaseReport()
        {
            return View();
        }
        /// <summary>
        /// 销售报表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult SalesReport()
        {
            return View();
        }
        /// <summary>
        /// 仓库报表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult StockReport()
        {
            return View();
        }
        /// <summary>
        /// 收支报表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FinanceReport()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 获取采购报表数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetPurchaseReportList()
        {
            var data = ExcelHelper.ExcelImport(Server.MapPath("~/Areas/LR_ReportModule/Views/ReportTemplate/ReportData/PurchaseReport.xlsx"));
            return Success(data);
        }
        /// <summary>
        /// 获取销售报表数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetSalesReportList()
        {
            var data = ExcelHelper.ExcelImport(Server.MapPath("~/Areas/LR_ReportModule/Views/ReportTemplate/ReportData/SalesReport.xlsx"));
            return Success(data);
        }
        /// <summary>
        /// 获取仓库报表数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetStockReportList()
        {
            var data = ExcelHelper.ExcelImport(Server.MapPath("~/Areas/LR_ReportModule/Views/ReportTemplate/ReportData/StockReport.xlsx"));
            return Success(data);
        }
        /// <summary>
        /// 获取收支报表数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetFinanceReportList()
        {
            var data = ExcelHelper.ExcelImport(Server.MapPath("~/Areas/LR_ReportModule/Views/ReportTemplate/ReportData/FinanceReport.xlsx"));
            return Success(data);
        }
        #endregion
    }
}