namespace cx.Application.Organization
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.27
    /// 描 述：部门数据模型
    /// </summary>
    public class DepartmentModel
    {
        /// <summary>
        /// 部门上级id
        /// </summary>
        public string parentId { get; set; }
        /// <summary>
        /// 公司主键
        /// </summary>
        public string companyId { get; set; }
        /// <summary>
        /// 公司名字
        /// </summary>
        public string name { get; set; }
    }
}
