using cx.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  cx.Application.Mapping
{
    /// <summary>
    /// �� �� v1.0 ���ǿƼ��������
    /// Copyright (c) ɽ�����ǕN����Ƽ����޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2018-07-11 14:28
    /// �� ��������֧��
    /// </summary>
    public class CrmExpensesMap : EntityTypeConfiguration<CrmExpensesEntity>
    {
        public CrmExpensesMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_EXPENSES");
            //����
            this.HasKey(t => t.F_ExpensesId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

