import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';
import { updatePlayer } from '@/api/platform_management/player';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.player.id'),
    dataIndex: 'id',
    width: 100,
  },
  {
    title: t('platform_management.player.createdAt'),
    dataIndex: 'createdAt',
    width: 100,
  },
  {
    title: t('platform_management.player.updatedAt'),
    dataIndex: 'updatedAt',
    width: 100,
  },
  {
    title: t('platform_management.player.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('platform_management.player.rank'),
    dataIndex: 'rank',
    width: 100,
  },
  {
    title: t('platform_management.player.usdt'),
    dataIndex: 'usdt',
    width: 100,
  },
  {
    title: t('platform_management.player.invitedNum'),
    dataIndex: 'invitedNum',
    width: 100,
  },
  {
    title: t('platform_management.player.totalIncome'),
    dataIndex: 'totalIncome',
    width: 100,
  },
  {
    title: t('platform_management.player.profitAndLoss'),
    dataIndex: 'profitAndLoss',
    width: 100,
  },
  {
    title: t('platform_management.player.recent100WinPercent'),
    dataIndex: 'recent100WinPercent',
    width: 100,
  },
  {
    title: t('platform_management.player.inviteCode'),
    dataIndex: 'inviteCode',
    width: 100,
  },
  {
    title: t('platform_management.player.inviterId'),
    dataIndex: 'inviterId',
    width: 100,
  },
  {
    title: t('platform_management.player.invitedCode'),
    dataIndex: 'invitedCode',
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
          updatePlayer({ id: record.id, status: newStatus })
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
    label: t('platform_management.player.id'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'createdAt',
    label: t('platform_management.player.createdAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'updatedAt',
    label: t('platform_management.player.updatedAt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'name',
    label: t('platform_management.player.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'rank',
    label: t('platform_management.player.rank'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'usdt',
    label: t('platform_management.player.usdt'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'invitedNum',
    label: t('platform_management.player.invitedNum'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'totalIncome',
    label: t('platform_management.player.totalIncome'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'profitAndLoss',
    label: t('platform_management.player.profitAndLoss'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'recent100WinPercent',
    label: t('platform_management.player.recent100WinPercent'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'inviteCode',
    label: t('platform_management.player.inviteCode'),
    component: 'Input',
    required: true,
  },
  {
    field: 'inviterId',
    label: t('platform_management.player.inviterId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'invitedCode',
    label: t('platform_management.player.invitedCode'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('platform_management.player.status'),
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
