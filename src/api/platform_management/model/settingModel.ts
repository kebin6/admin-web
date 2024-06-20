import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Setting info response
 */
export interface SettingInfo {
  gameRule: GameRuleInfo;
  robotNum: RobotNumInfo;
  robotLampNum: RobotLampNumInfo;
  withdrawCommission: number;
  minWithdrawNum: number;
  idleTime: number;
  gameCommission: number;
  withdrawThreshold: number;
}

export interface GameRuleInfo {
  title: string;
  content: string;
}

export interface RobotNumInfo {
  min: number;
  max: number;
}

export interface RobotLampNumInfo {
  min: number;
  max: number;
}

/**
 *  @description: Setting list response
 */

export type SettingListResp = BaseListResp<SettingInfo>;
