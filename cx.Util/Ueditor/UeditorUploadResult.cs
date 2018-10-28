﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cx.Util.Ueditor
{
    /// <summary>
    /// 版 本 1.0  辰星软件开发框架
    /// Copyright (c) 辰星昇软件科技有限公司
    /// 创建人：辰星-框架开发组
    /// 日 期：2018.03.09
    /// 描 述：百度编辑器UE上传返回结果
    /// </summary>
    public class UeditorUploadResult
    {
        public UeditorUploadState State { get; set; }
        public string Url { get; set; }
        public string OriginFileName { get; set; }

        public string ErrorMessage { get; set; }
    }

    public enum UeditorUploadState
    {
        Success = 0,
        SizeLimitExceed = -1,
        TypeNotAllow = -2,
        FileAccessError = -3,
        NetworkError = -4,
        Unknown = 1,
    }
}
