using cx.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// �� �� v1.0 ���ǿƼ��������
    /// Copyright (c) ɽ�����ǕN����Ƽ����޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2018-07-11 14:48
    /// �� ����Ӧ���˿�
    /// </summary>
    public class LR_CRM_ReceivableMap : EntityTypeConfiguration<CrmReceivableEntity>
    {
        public LR_CRM_ReceivableMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_RECEIVABLE");
            //����
            this.HasKey(t => t.F_ReceivableId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

