import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { updatePlayer } from '@/api/platform_management/player';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('platform_management.player.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('platform_management.player.email'),
    dataIndex: 'email',
    width: 200,
  },
  {
    title: t('platform_management.player.rank'),
    dataIndex: 'rank',
    width: 80,
  },
  {
    title: t('platform_management.player.amount'),
    dataIndex: 'amount',
    width: 80,
  },
  {
    title: t('platform_management.player.invitedNum'),
    dataIndex: 'invitedNum',
    width: 80,
  },
  {
    title: t('platform_management.player.totalIncome'),
    dataIndex: 'totalIncome',
    width: 80,
  },
  {
    title: t('platform_management.player.inviteCode'),
    dataIndex: 'inviteCode',
    width: 80,
  },
  {
    title: t('platform_management.player.lamb'),
    dataIndex: 'lamb',
    width: 80,
  },
  {
    title: t('platform_management.player.depositAddress'),
    dataIndex: 'depositAddress',
    width: 100,
  },
  {
    title: t('platform_management.player.systemCommission'),
    dataIndex: 'systemCommission',
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
    title: t('platform_management.player.status'),
    dataIndex: 'status',
    width: 60,
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
    label: t('platform_management.player.id'),
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'email',
    label: t('platform_management.player.email'),
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
    field: 'amount',
    label: t('platform_management.player.amount'),
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
    field: 'inviteCode',
    label: t('platform_management.player.inviteCode'),
    component: 'Input',
    required: true,
  },
  {
    field: 'invitedCode',
    label: t('platform_management.player.invitedCode'),
    component: 'Input',
    required: true,
  },
  {
    field: 'lamb',
    label: t('platform_management.player.lamb'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'depositAddress',
    label: t('platform_management.player.depositAddress'),
    component: 'Input',
    required: true,
  },
  {
    field: 'systemCommission',
    label: t('platform_management.player.systemCommission'),
    component: 'InputNumber',
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
