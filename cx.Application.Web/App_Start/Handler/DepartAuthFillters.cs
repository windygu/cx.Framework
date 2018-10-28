using cx.Application.Base.AuthorizeModule;
using System.Web.Mvc;

namespace cx.Application.Web
{
    /// <summary>
    /// 描 述：控制器执行后执行
    /// </summary>
    public class DepartAuthFillters : FilterAttribute, IActionFilter
    {
        /// <summary>
        /// 执行完action后跳转后执行
        /// </summary>
        /// <param name="filterContext"></param>
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
        }
        /// <summary>
        /// 执行完action后跳转前执行
        /// </summary>
        /// <param name="filterContext"></param>
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            DataAuthorizeBLL dataAuthorizeBLL = new DataAuthorizeBLL();
            dataAuthorizeBLL.SetWhereSql();
        }
    }
}