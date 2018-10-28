
using System.Collections.Generic;
namespace cx.Util
{
    /// <summary>
    /// 版 本 1.0  辰星软件开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.09
    /// 描 述：树结构数据
    /// </summary>
    public class TreeModelEx<T> where T : class
    {
        /// <summary>
        /// 节点id
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// 父级节点ID
        /// </summary>
        public string parentId { get; set; }
        /// <summary>
        /// 数据
        /// </summary>
        public T data { get; set; }
        /// <summary>
        /// 子节点列表数据
        /// </summary>
        public List<TreeModelEx<T>> ChildNodes { get; set; }
    }
}
