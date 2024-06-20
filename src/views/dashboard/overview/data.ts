export interface GrowCardItem {
  title: string;
  value: number;
  total: number;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '今日参与游戏玩家数',
    value: 0,
    total: 0,
  },
  {
    title: '今日新增游戏玩家数',
    value: 0,
    total: 0,
  },
  {
    title: '今日游戏开局次数',
    value: 0,
    total: 0,
  },
  {
    title: '今日累积吃羊数',
    value: 0,
    total: 0,
  },
  {
    title: '今日平台收益',
    value: 0,
    total: 0,
  },
  {
    title: "平台累积收益",
    value: 0,
    total: 0,
  },
  {
    title: '平台累积人数',
    value: 0,
    total: 0,
  },
];
