using cx.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创 建：超级管理员
    /// 日 期：2018-07-11 14:20
    /// 描 述：现金余额
    /// </summary>
    public class CrmCashBalanceMap : EntityTypeConfiguration<CrmCashBalanceEntity>
    {
        public CrmCashBalanceMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_CRM_CASHBALANCE");
            //主键
            this.HasKey(t => t.F_CashBalanceId);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

