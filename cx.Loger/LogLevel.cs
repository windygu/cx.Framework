﻿using System.ComponentModel;
namespace cx.Loger
{
    /// <summary>
    /// 版 本 1.0 辰星开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.04
    /// 描 述：日志级别
    /// </summary>
    public enum LogLevel
    {
        /// <summary>
        /// 错误
        /// </summary>
        [Description("错误")]
        Error,
        /// <summary>
        /// 警告
        /// </summary>
        [Description("警告")]
        Warning,
        /// <summary>
        /// 信息
        /// </summary>
        [Description("信息")]
        Info,
        /// <summary>
        /// 调试
        /// </summary>
        [Description("调试")]
        Debug
    }
}
