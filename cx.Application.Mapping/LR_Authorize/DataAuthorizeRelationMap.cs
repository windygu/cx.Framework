using cx.Application.Base.AuthorizeModule;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// �� �� v1.0 ���ǿƼ��������
    /// Copyright (c) ɽ�����ǕN����Ƽ����޹�˾
    /// �� ���������ܿ�����
    /// �� �ڣ�2018-06-21 16:30
    /// �� ��������Ȩ��
    /// </summary>
    public class LR_Base_DataAuthorizeRelationMap : EntityTypeConfiguration<DataAuthorizeRelationEntity>
    {
        public LR_Base_DataAuthorizeRelationMap()
        {
            #region ������
            //��
            this.ToTable("LR_BASE_DATARELATION");
            //����
            this.HasKey(t => t.F_Id);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

