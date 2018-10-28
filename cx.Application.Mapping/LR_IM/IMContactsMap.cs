﻿using cx.Application.IM;
using System.Data.Entity.ModelConfiguration;

namespace cx.Application.Mapping
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.05.31
    /// 描 述：即时通讯消息内容
    /// </summary>
    public class IMContactsMap : EntityTypeConfiguration<IMContactsEntity>
    {
        public IMContactsMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_IM_CONTACTS");
            //主键
            this.HasKey(t => t.F_Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}
