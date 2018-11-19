using cx.Util;
using System.Data;
using System.Collections.Generic;

namespace cx.Application.TwoDevelopment.Test_CodeDemo
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创 建：超级管理员
    /// 日 期：2018-10-30 17:13
    /// 描 述：test
    /// </summary>
    public interface A_testIBLL
    {
        #region 获取数据

        /// <summary>
        /// 获取页面显示列表数据
        /// <summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns></returns>
        IEnumerable<A_TestEntity> GetPageList(Pagination pagination, string queryJson);
        /// <summary>
        /// 获取A_Test表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        A_TestEntity GetA_TestEntity(string keyValue);
        #endregion

        #region 提交数据

        /// <summary>
        /// 删除实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        void DeleteEntity(string keyValue);
        /// <summary>
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        void SaveEntity(string keyValue, A_TestEntity entity);
        #endregion

    }
}
