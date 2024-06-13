import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';
import { updateOrder } from '@/api/platform_management/order';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.order.id'),
    dataIndex: 'id',
    width: 100,
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
  {
    title: t('platform_management.order.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('platform_management.order.code'),
    dataIndex: 'code',
    width: 100,
  },
  {
    title: t('platform_management.order.num'),
    dataIndex: 'num',
    width: 100,
  },
  {
    title: t('platform_management.order.toAddress'),
    dataIndex: 'toAddress',
    width: 100,
  },
  {
    title: t('platform_management.order.fromAddress'),
    dataIndex: 'fromAddress',
    width: 100,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 50,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: t('common.on'),
        unCheckedChildren: t('common.off'),
        loading: record.pendingStatus,
        onChange(checked, _) {
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 2;
          updateOrder({ id: record.id, status: newStatus })
            .then(() => {
              record.status = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
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
    field: 'status',
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
