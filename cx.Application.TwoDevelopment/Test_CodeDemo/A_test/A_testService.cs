using Dapper;
using cx.DataBase.Repository;
using cx.Util;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

namespace cx.Application.TwoDevelopment.Test_CodeDemo
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创 建：超级管理员
    /// 日 期：2018-10-30 17:13
    /// 描 述：test
    /// </summary>
    public class A_testService : RepositoryFactory
    {
        #region 获取数据

        /// <summary>
        /// 获取页面显示列表数据
        /// <summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns></returns>
        public IEnumerable<A_TestEntity> GetPageList(Pagination pagination, string queryJson)
        {
            try
            {
                var strSql = new StringBuilder();
                strSql.Append("SELECT ");
                strSql.Append(@"
                t.id,
                t.name,
                t.F_CompanyId
                ");
                strSql.Append("  FROM A_Test t ");
                strSql.Append("  WHERE 1=1 ");

                var queryParam = queryJson.ToJObject();

                // 虚拟参数 
                var dp = new DynamicParameters(new { });
                if (!queryParam["F_CompanyId"].IsEmpty())
                {
                    dp.Add("F_CompanyId", queryParam["F_CompanyId"].ToString(), DbType.String);
                    strSql.Append(" AND t.F_CompanyId = @F_CompanyId ");
                }
                return this.BaseRepository().FindList<A_TestEntity>(strSql.ToString(), dp, pagination);



                //string F_CompanyId = "";
                //if (!queryParam["F_CompanyId"].IsEmpty())
                //{
                //    strSql.Append(" And F_CompanyId = @F_CompanyId");
                //    F_CompanyId = queryParam["F_CompanyId"].ToString();
                //}

                //// 虚拟参数
                ////var dp = new DynamicParameters(new { companyId = companyId });
                //return this.BaseRepository().FindList<A_TestEntity>(strSql.ToString(), new { F_CompanyId = F_CompanyId }, pagination);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 获取A_Test表实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public A_TestEntity GetA_TestEntity(string keyValue)
        {
            try
            {
                return this.BaseRepository().FindEntity<A_TestEntity>(keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        #endregion

        #region 提交数据

        /// <summary>
        /// 删除实体数据
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void DeleteEntity(string keyValue)
        {
            try
            {
                this.BaseRepository().Delete<A_TestEntity>(t => t.id == keyValue);
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        /// <summary>
        /// 保存实体数据（新增、修改）
        /// <param name="keyValue">主键</param>
        /// <summary>
        /// <returns></returns>
        public void SaveEntity(string keyValue, A_TestEntity entity)
        {
            try
            {
                if (!string.IsNullOrEmpty(keyValue))
                {
                    entity.Modify(keyValue);
                    this.BaseRepository().Update(entity);
                }
                else
                {
                    entity.Create();
                    this.BaseRepository().Insert(entity);
                }
            }
            catch (Exception ex)
            {
                if (ex is ExceptionEx)
                {
                    throw;
                }
                else
                {
                    throw ExceptionEx.ThrowServiceException(ex);
                }
            }
        }

        #endregion

    }
}
