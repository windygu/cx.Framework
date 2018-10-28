﻿using cx.Application.OA.File.FileFolder;
using System.Data.Entity.ModelConfiguration;

namespace cx.Application.Mapping.LR_OA
{
    /// <summary>
    /// 版 本 cx-ADMS V6.1.6.0 力软敏捷开发框架
    /// Copyright (c) 2013-2017 上海力软信息技术有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.06.20
    /// 描 述：文件管理
    /// </summary>
    public class FileFolderMap : EntityTypeConfiguration<FileFolderEntity>
    {
        public FileFolderMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_OA_FileFolder");
            //主键
            this.HasKey(t => t.F_FolderId);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}