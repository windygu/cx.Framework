using cx.Application.TwoDevelopment.Test_CodeDemo;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创 建：超级管理员
    /// 日 期：2018-10-30 17:13
    /// 描 述：test
    /// </summary>
    public class A_TestMap : EntityTypeConfiguration<A_TestEntity>
    {
        public A_TestMap()
        {
            #region 表、主键
            //表
            this.ToTable("A_TEST");
            //主键
            this.HasKey(t => t.id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

