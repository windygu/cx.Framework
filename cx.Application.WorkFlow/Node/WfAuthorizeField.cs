
namespace cx.Application.WorkFlow
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：工作流字段权限信息
    /// </summary>
    public class WfAuthorizeField
    {
        /// <summary>
        /// 字段名称
        /// </summary>
        public string fieldName { get; set; }
        /// <summary>
        /// 字段Id
        /// </summary>
        public string fieldId { get; set; }
        /// <summary>
        /// 是否可编辑1是0不是
        /// </summary>
        public int isEdit { get; set; }
        /// <summary>
        /// 是否可查看1是0不是
        /// </summary>
        public int isLook { get; set; }
    }
}
