<template>
  <PageWrapper>
    <ACard :title="t('platform_management.setting.setting')" style="width: 100%">
      <AForm
        :model="formData"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 8 }"
        autocomplete="off"
        @submit="handleSubmit()"
      >
        <AFormItem :label="t('platform_management.setting.gameCommission')" name="gameCommission" :rules="[{ required: true, type: 'number' }]">
          <a-input-number v-model:value="formData.gameCommission"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.withdrawCommission')" name="withdrawCommission" :rules="[{ required: true }]">
          <a-input-number v-model:value="formData.withdrawCommission"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.minWithdrawNum')" name="minWithdrawNum" :rules="[{ required: true, type: 'integer' }]">
          <a-input-number v-model:value="formData.minWithdrawNum"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.withdrawThreshold')" name="withdrawThreshold" :rules="[{ required: true }]">
          <a-input-number v-model:value="formData.withdrawThreshold"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.idleTime')" name="idleTime" :rules="[{ required: true, type: 'integer' }]">
          <a-input-number v-model:value="formData.idleTime"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.minRobotNum')" name="robotNum.min" :rules="[{ type: 'integer' }]">
          <a-input-number v-model:value="formData.robotNum.min"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.maxRobotNum')" name="robotNum.max" :rules="[{ type: 'integer' }]">
          <a-input-number v-model:value="formData.robotNum.max"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.minRobotLampNum')" name="robotLampNum.min" :rules="[{ type: 'integer' }]">
          <a-input-number v-model:value="formData.robotLampNum.min"/>
        </AFormItem>
        <AFormItem :label="t('platform_management.setting.maxRobotLampNum')" name="robotLampNum.max" :rules="[{ type: 'integer' }]">
          <a-input-number v-model:value="formData.robotLampNum.max"/>
        </AFormItem>
        <AFormItem v-show="false" name="gameRule.title">
          <a-input v-model:value="formData.gameRule.title" v-show="false" />
        </AFormItem>
        <AFormItem v-show="false" name="gameRule.content">
          <a-input v-model:value="formData.gameRule.content" v-show="false" />
        </AFormItem>
        <AFormItem :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">{{ t('common.saveText') }}</a-button>
        </AFormItem>
      </AForm>
    </ACard>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { PageWrapper } from '@/components/Page';
import {Card, Form, FormItem, message, Modal, InputNumber} from 'ant-design-vue';
import {reactive, createVNode} from 'vue';
import { useI18n } from 'vue-i18n';
import {getSettingById, updateSetting} from "@/api/platform_management/setting";
import {
  SettingInfo,
  RobotNumInfo,
  GameRuleInfo
} from "@/api/platform_management/model/settingModel";
import {ExclamationCircleOutlined} from "@ant-design/icons-vue/lib/icons";

const ACard = Card;
const AForm = Form;
const AFormItem = FormItem;
const AInputNumber = InputNumber;
const { t } = useI18n();

const formData = reactive<SettingInfo>({
  gameCommission: 0,
  withdrawCommission: 0,
  minWithdrawNum: 0,
  withdrawThreshold: 0,
  idleTime: 0,
  robotNum: reactive<RobotNumInfo>({
    min: 0,
    max: 0,
  }),
  robotLampNum: reactive<RobotNumInfo>({
    min: 0,
    max: 0,
  }),
  gameRule: reactive<GameRuleInfo>({
    title: '',
    content: '',
  })
});

const getSettting = async () => {
  const resp = await getSettingById({module: 'platform_setting'});
  if (resp.code != 0) {
    message.error(resp.msg);
    return;
  }
  let data = resp.data;
  formData.gameCommission = data.gameCommission ? data.gameCommission : 0;
  formData.withdrawCommission = data.withdrawCommission ? data.withdrawCommission : 0;
  formData.minWithdrawNum = data.minWithdrawNum ? data.minWithdrawNum : 0;
  formData.withdrawThreshold = data.withdrawThreshold ? data.withdrawThreshold : 0;
  formData.idleTime = data.idleTime ? data.idleTime : 0;
  formData.robotNum = data.robotNum ? data.robotNum : {
    min: 0,
    max: 0,
  };
  formData.robotLampNum = data.robotLampNum ? data.robotLampNum : {
    min: 0,
    max: 0,
  };
}
getSettting();

async function handleSubmit() {
  console.log('formData', formData);
  Modal.confirm({
    title: t('common.updateConfirm'),
    icon: createVNode(ExclamationCircleOutlined),
    async onOk() {
      await updateSetting(formData);
    },
    onCancel() {
    },
  });
}
</script>
