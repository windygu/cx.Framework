
namespace cx.Application.Base.SystemModule
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.01
    /// 描 述：编号规则
    /// </summary>
    public class CodeRuleFormatModel
    {
        #region 实体成员
        /// <summary>
        /// 项目类型
        /// </summary>		
        public int? itemType { get; set; }
        /// <summary>
        /// 项目类型名称
        /// </summary>		
        public string itemTypeName { get; set; }
        /// <summary>
        /// 格式化字符串
        /// </summary>		
        public string formatStr { get; set; }
        /// <summary>
        /// 步长
        /// </summary>		
        public int? stepValue { get; set; }
        /// <summary>
        /// 初始值
        /// </summary>		
        public int? initValue { get; set; }
        /// <summary>
        /// 备注
        /// </summary>		
        public string description { get; set; }
        #endregion
    }
}
