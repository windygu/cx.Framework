using log4net;
using System;
namespace cx.Loger
{
    /// <summary>
    /// 版 本 1.0 辰星开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.04
    /// 描 述：日志
    /// </summary>
    public class Log
    {
        /// <summary>
        /// 日志实体类
        /// </summary>
        private ILog logger;
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="log">日志操作对象</param>
        public Log(ILog log)
        {
            this.logger = log;
        }
        /// <summary>
        /// 调试日志
        /// </summary>
        /// <param name="message">消息</param>
        public void Debug(object message)
        {
            this.logger.Debug(message);
        }
        /// <summary>
        /// 错误日志
        /// </summary>
        /// <param name="message">消息</param>
        public void Error(object message)
        {
            this.logger.Error(message);
        }
        /// <summary>
        /// 信息日志
        /// </summary>
        /// <param name="message">消息</param>
        public void Info(object message)
        {
            this.logger.Info(message);
        }
        /// <summary>
        /// 警告日志
        /// </summary>
        /// <param name="message">消息</param>
        public void Warn(object message)
        {
            this.logger.Warn(message);
        }
    }
}
