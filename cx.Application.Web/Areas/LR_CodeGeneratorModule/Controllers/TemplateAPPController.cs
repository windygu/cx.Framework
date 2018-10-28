using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_CodeGeneratorModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.09
    /// 描 述：移动端代码生成器
    /// </summary>
    public class TemplateAPPController : MvcControllerBase
    {
        #region 视图功能
        public ActionResult Index()
        {
            return View();
        }
        #endregion
    }
}