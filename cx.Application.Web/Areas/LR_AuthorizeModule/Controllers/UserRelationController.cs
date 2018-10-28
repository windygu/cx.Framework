﻿using cx.Application.Base.AuthorizeModule;
using cx.Application.Organization;
using System.Web.Mvc;

namespace cx.Application.Web.Areas.LR_AuthorizeModule.Controllers
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：用户对应对象
    /// </summary>
    public class UserRelationController : MvcControllerBase
    {
        private UserRelationIBLL userRelationIBLL = new UserRelationBLL();
        private UserIBLL userIBLL = new UserBLL();

        #region 获取视图
        /// <summary>
        /// 人员选择
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult SelectForm()
        {
            return View();
        }
        /// <summary>
        /// 人员选择
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult LookForm()
        {
            return View();
        }

        #endregion

        #region 获取数据
        /// <summary>
        /// 获取用户主键列表信息
        /// </summary>
        /// <param name="objectId">用户主键</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetUserIdList(string objectId)
        {
            var data = userRelationIBLL.GetUserIdList(objectId);
            string userIds = "";
            foreach (var item in data)
            {
                if (userIds != "")
                {
                    userIds += ",";
                }
                userIds += item.F_UserId;
            }
            var userList = userIBLL.GetListByUserIds(userIds);
            var datajson = new
            {
                userIds = userIds,
                userInfoList = userList
            };
            return Success(datajson); 
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 保存表单数据
        /// </summary>
        /// <param name="objectId">对象主键</param>
        /// <param name="category">分类:1-角色2-岗位</param>
        /// <param name="userIds">对用户主键列表</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        [AjaxOnly]
        public ActionResult SaveForm(string objectId, int category, string userIds)
        {
            userRelationIBLL.SaveEntityList(objectId, category, userIds);
            return Success("保存成功！");
        }
        #endregion
    }
}