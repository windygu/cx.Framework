
using System.Collections.Generic;
namespace cx.Application.Base.CodeGeneratorModule
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：代码生成器配置信息类
    /// </summary>
    public class CodeBaseConfigModel
    {
        /// <summary>
        /// 数据库主键
        /// </summary>
        public string databaseLinkId { get; set; }
        /// <summary>
        /// 数据库表
        /// </summary>
        public string tableName { get; set; }
        /// <summary>
        /// 数据库表串
        /// </summary>
        public string tableNames { get; set; }
        /// <summary>
        /// 功能名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 功能描述
        /// </summary>
        public string describe { get; set; }
        /// <summary>
        /// 后端项目
        /// </summary>
        public string backProject { get; set; }
        /// <summary>
        /// 后端区域
        /// </summary>
        public string backArea { get; set; }
        /// <summary>
        /// 前端区域
        /// </summary>
        public string area { get; set; }
        /// <summary>
        /// 映射区域
        /// </summary>
        public string mapping { get; set; }
        /// <summary>
        /// 映射类目录
        /// </summary>
        public string mappingDirectory { get; set; }
        /// <summary>
        /// 后端服务类输出目录
        /// </summary>
        public string serviceDirectory { get; set; }
        /// <summary>
        /// 前端页面输出目录
        /// </summary>
        public string webDirectory { get; set; }
        /// <summary>
        /// 发布功能信息
        /// </summary>
        public string moduleEntityJson { get; set; }
    }
}
