using cx.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// �� �� v1.0 ���ǿƼ��������
    /// Copyright (c) ɽ�����ǕN����Ƽ����޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2018-07-11 09:58
    /// �� �����ͻ���ϵ��
    /// </summary>
    public class CrmCustomerContactMap : EntityTypeConfiguration<CrmCustomerContactEntity>
    {
        public CrmCustomerContactMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_CUSTOMERCONTACT");
            //����
            this.HasKey(t => t.F_CustomerContactId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

