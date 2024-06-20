<template>
  <div class="lg:flex">
    <div class="lg:w-10/10 w-full enter-y">
      <Card v-bind="$attrs">
        <CardGrid v-for="(item, index) in growCardList" :key="index">
          <Card
            size="default"
            :loading="loading"
            :title="item.title"
            :bordered="true"
          >
            <div class="py-8 px-6 justify-between items-center">
              <CountTo prefix="" :startVal="1" :endVal="item.value" class="text-2xl" />
            </div>
          </Card>
        </CardGrid>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '@/components/CountTo/index';
  import { Card, CardGrid } from 'ant-design-vue';
  import { growCardList } from '../data';
  import {getOverview} from "@/api/overview/overview";
  import {PageWrapper} from "@/components/Page";
  import {Dayjs} from "dayjs";
  import {ref} from "vue";

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const value3 = ref<Dayjs>();

  const initInfo = async () => {
    const { data } = await getOverview({});
    growCardList[0].value = data.todayParticipateCount
    growCardList[1].value = data.todayNewPlayerCount
    growCardList[2].value = data.todayRoundCount
    growCardList[3].value = data.todayEatCount
    growCardList[4].value = data.todayPlatformProfit
    growCardList[5].value = data.totalPlatformProfit
    growCardList[6].value = data.totalPlayerCount
  }
  initInfo();

</script>
