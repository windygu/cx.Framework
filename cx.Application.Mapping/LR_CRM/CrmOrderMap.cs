using cx.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// �� �� v1.0 ���ǿƼ��������
    /// Copyright (c) ɽ�����ǕN����Ƽ����޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2018-07-10 17:59
    /// �� ������������
    /// </summary>
    public class LR_CRM_OrderMap : EntityTypeConfiguration<CrmOrderEntity>
    {
        public LR_CRM_OrderMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_ORDER");
            //����
            this.HasKey(t => t.F_OrderId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

