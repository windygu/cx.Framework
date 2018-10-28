namespace cx.Util
{
    /// <summary>
    /// 版 本 1.0  辰星软件开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.08
    /// 描 述：接口响应数据
    /// </summary>
    public class ResParameter
    {
        /// <summary>
        /// 接口响应码
        /// </summary>
        public ResponseCode code { get; set; }
        /// <summary>
        /// 接口响应消息
        /// </summary>
        public string info { get; set; }
        /// <summary>
        /// 接口响应数据
        /// </summary>
        public object data { get; set; }
    }
}
