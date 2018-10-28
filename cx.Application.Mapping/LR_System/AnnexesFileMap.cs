﻿using cx.Application.Base.SystemModule;
using System.Data.Entity.ModelConfiguration;

namespace cx.Application.Mapping
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.08
    /// 描 述：附件管理
    /// </summary>
    public class AnnexesFileMap : EntityTypeConfiguration<AnnexesFileEntity>
    {
        public AnnexesFileMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_BASE_ANNEXESFILE");
            //主键
            this.HasKey(t => t.F_Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}
