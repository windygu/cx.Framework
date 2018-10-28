
namespace cx.Application.WorkFlow
{
    /// <summary>
    /// 版 本 v1.0 辰星科技开发框架
    /// Copyright (c) 山西辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.04.17
    /// 描 述：工作流引擎节点触发方法
    /// </summary>
    public class NodeMethod : INodeMethod
    {
        /// <summary>
        /// 节点审核通过执行方法
        /// </summary>
        /// <param name="processId">流程实例主键</param>
        public void Sucess(string processId)
        {

        }
        /// <summary>
        /// 节点审核失败执行方法
        /// </summary>
        /// <param name="processId">流程实例主键</param>
        public void Fail(string processId)
        {

        }
    }
}
