using cx.Cache.Base;
using cx.Cache.Redis;

namespace cx.Cache.Factory
{
    /// <summary>
    /// 版 本 1.0 辰星开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.07
    /// 描 述：定义缓存工厂类
    /// </summary>
    public class CacheFactory
    {
        public static ICache CaChe()
        {
            return new CacheByRedis();
        }
    }
}
