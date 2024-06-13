import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';
import { updateBanner } from '@/api/platform_management/banner';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.banner.id'),
    dataIndex: 'id',
    width: 100,
  },
  {
    title: t('platform_management.banner.createdAt'),
    dataIndex: 'createdAt',
    width: 100,
  },
  {
    title: t('platform_management.banner.updatedAt'),
    dataIndex: 'updatedAt',
    width: 100,
  },
  {
    title: t('platform_management.banner.endpoint'),
    dataIndex: 'endpoint',
    width: 100,
  },
  {
    title: t('platform_management.banner.module'),
    dataIndex: 'module',
    width: 100,
  },
  {
    title: t('platform_management.banner.fileType'),
    dataIndex: 'fileType',
    width: 100,
  },
  {
    title: t('platform_management.banner.path'),
    dataIndex: 'path',
    width: 100,
  },
  {
    title: t('platform_management.banner.jumpUrl'),
    dataIndex: 'jumpUrl',
    width: 100,
  },
  {
    title: t('platform_management.banner.file'),
    dataIndex: 'file',
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
          updateBanner({ id: record.id, status: newStatus })
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
    label: t('platform_management.banner.id'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'createdAt',
    label: t('platform_management.banner.createdAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'updatedAt',
    label: t('platform_management.banner.updatedAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'endpoint',
    label: t('platform_management.banner.endpoint'),
    component: 'Input',
    required: true,
  },
  {
    field: 'module',
    label: t('platform_management.banner.module'),
    component: 'Input',
    required: true,
  },
  {
    field: 'fileType',
    label: t('platform_management.banner.fileType'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'path',
    label: t('platform_management.banner.path'),
    component: 'Input',
    required: true,
  },
  {
    field: 'jumpUrl',
    label: t('platform_management.banner.jumpUrl'),
    component: 'Input',
    required: true,
  },
  {
    field: 'file',
    label: t('platform_management.banner.file'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('platform_management.banner.status'),
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
