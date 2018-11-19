using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.Test_CodeDemo
{
    public class Test_CodeDemoAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Test_CodeDemo";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Test_CodeDemo_default",
                "Test_CodeDemo/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}