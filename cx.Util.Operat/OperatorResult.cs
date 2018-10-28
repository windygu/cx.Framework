
namespace cx.Util.Operat
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2018.03.08
    /// 描 述：当前连接用户信息返回数据
    /// </summary>
    public class OperatorResult
    {
        /// <summary>
        /// 状态码-1未登录,1登录成功,0登录过期
        /// </summary>
        public int stateCode { get; set; }
        /// <summary>
        /// 登录者用户信息
        /// </summary>
        public UserInfo userInfo { get; set; }
    }
}
