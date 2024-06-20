import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.order.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('platform_management.order.code'),
    dataIndex: 'code',
    width: 120,
  },
  {
    title: t('platform_management.order.transactionId'),
    dataIndex: 'transactionId',
    width: 120,
  },
  {
    title: t('platform_management.order.type'),
    dataIndex: 'type',
    width: 80,
  },
  {
    title: t('platform_management.order.num'),
    dataIndex: 'num',
    width: 80,
  },
  {
    title: t('platform_management.order.toAddress'),
    dataIndex: 'toAddress',
    width: 180,
  },
  {
    title: t('platform_management.order.fromAddress'),
    dataIndex: 'fromAddress',
    width: 180,
  },
  {
    title: t('common.status'),
    dataIndex: 'statusDesc',
    width: 180,
  },
  {
    title: t('platform_management.order.createdAt'),
    dataIndex: 'createdAt',
    width: 100,
  },
  {
    title: t('platform_management.order.updatedAt'),
    dataIndex: 'updatedAt',
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
    field: 'id',
    label: t('platform_management.order.id'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'createdAt',
    label: t('platform_management.order.createdAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'updatedAt',
    label: t('platform_management.order.updatedAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'type',
    label: t('platform_management.order.type'),
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: t('platform_management.order.code'),
    component: 'Input',
    required: true,
  },
  {
    field: 'num',
    label: t('platform_management.order.num'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'toAddress',
    label: t('platform_management.order.toAddress'),
    component: 'Input',
    required: true,
  },
  {
    field: 'fromAddress',
    label: t('platform_management.order.fromAddress'),
    component: 'Input',
    required: true,
  },
  {
    field: 'transactionId',
    label: t('platform_management.order.transactionId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'statusDesc',
    label: t('platform_management.order.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
    },
  },
];
