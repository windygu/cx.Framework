﻿using cx.Util;
using System.Collections.Generic;
using System.Data;

namespace cx.Application.Base.SystemModule
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.08
    /// 描 述：数据库表管理
    /// </summary>
    public interface DatabaseTableIBLL
    {
        #region 获取数据
        /// <summary>
        /// 数据表列表
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="tableName">表名</param>
        /// <returns></returns>
        List<DatabaseTableModel> GetTableList(string databaseLinkId, string tableName);
        /// <summary>
        /// 获取树形数据
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <returns></returns>
        List<TreeModel> GetTreeList(string databaseLinkId);
        /// <summary>
        /// 数据表字段列表
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="tableName">表名</param>
        /// <returns></returns>
        IEnumerable<DatabaseTableFieldModel> GetTableFiledList(string databaseLinkId, string tableName);
        /// <summary>
        /// 获取数据表字段树形数据
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="tableName">表名</param>
        /// <returns></returns>
        List<TreeModel> GetFiledTreeList(string databaseLinkId, string tableName);
        /// <summary>
        /// 数据库表数据列表
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="field">表明</param>
        /// <param name="switchWhere">条件</param>
        /// <param name="logic">逻辑</param>
        /// <param name="keyword">关键字</param>
        /// <param name="pagination">分页参数</param>
        /// <returns></returns>
        DataTable GetTableDataList(string databaseLinkId, string tableName, string field, string logic, string keyword, Pagination pagination);
        /// <summary>
        /// 数据库表数据列表
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="tableName">表名</param>
        /// <returns></returns>
        DataTable GetTableDataList(string databaseLinkId, string tableName);

        /// <summary>
        /// 给定查询语句查询字段
        /// </summary>
        /// <param name="databaseLinkId">数据库连接主键</param>
        /// <param name="strSql">表名</param>
        /// <returns></returns>
        List<string> GetSqlColName(string databaseLinkId, string strSql);
        #endregion

        #region 提交数据
        /// <summary>
        /// 创建数据库表
        /// </summary>
        /// <param name="databaseLinkEntity"></param>
        /// <param name="tableName"></param>
        /// <param name="tableRemark"></param>
        /// <param name="colList"></param>
        /// <returns></returns>
        string CreateTable(string databaseLinkId, string tableName, string tableRemark, List<DatabaseTableFieldModel> colList);
        #endregion

        #region 扩展方法
        /// <summary>
        /// C#实体数据类型
        /// </summary>
        /// <param name="datatype">数据库字段类型</param>
        /// <returns></returns>
        string FindModelsType(string datatype);
        #endregion
    }
}
