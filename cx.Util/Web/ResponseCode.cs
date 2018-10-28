namespace cx.Util
{
    /// <summary>
    /// 版 本 1.0  辰星软件开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.08
    /// 描 述：接口响应码
    /// </summary>
    public enum ResponseCode
    {
        /// <summary>
        /// 成功
        /// </summary>
        success = 200,
        /// <summary>
        /// 失败
        /// </summary>
        fail = 400,
        /// <summary>
        /// 异常
        /// </summary>
        exception = 500,
        /// <summary>
        /// 没有登录信息
        /// </summary>
        nologin = 410
    }
}
