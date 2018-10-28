namespace cx.Util
{
    /// <summary>
    /// 版 本 1.0  辰星软件开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.09
    /// 描 述：数据库参数
    /// </summary>
    public class FieldValueParam
    {
        /// <summary>
        /// 字段名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 数据值
        /// </summary>
        public object value { get; set; }
        /// <summary>
        /// 数据类型
        /// </summary>
        public int type { get; set; }
    }
}
