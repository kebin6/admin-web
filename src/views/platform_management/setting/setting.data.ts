import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.setting.gameRule'),
    dataIndex: 'gameRule',
    width: 100,
  },
  {
    title: t('platform_management.setting.robotNum'),
    dataIndex: 'robotNum',
    width: 100,
  },
  {
    title: t('platform_management.setting.robotLampNum'),
    dataIndex: 'robotLampNum',
    width: 100,
  },
  {
    title: t('platform_management.setting.withdrawCommission'),
    dataIndex: 'withdrawCommission',
    width: 100,
  },
  {
    title: t('platform_management.setting.minWithdrawNum'),
    dataIndex: 'minWithdrawNum',
    width: 100,
  },
  {
    title: t('platform_management.setting.idleTime'),
    dataIndex: 'idleTime',
    width: 100,
  },

];

export const searchFormSchema: FormSchema[] = [
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'gameRule',
    label: t('platform_management.setting.gameRule'),
    component: 'Input',
    required: true,
  },
  {
    field: 'robotNum',
    label: t('platform_management.setting.robotNum'),
    component: 'Input',
    required: true,
  },
  {
    field: 'robotLampNum',
    label: t('platform_management.setting.robotLampNum'),
    component: 'Input',
    required: true,
  },
  {
    field: 'withdrawCommission',
    label: t('platform_management.setting.withdrawCommission'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'minWithdrawNum',
    label: t('platform_management.setting.minWithdrawNum'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'idleTime',
    label: t('platform_management.setting.idleTime'),
    component: 'InputNumber',
    required: true,
  },
];
