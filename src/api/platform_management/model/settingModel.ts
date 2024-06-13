import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Setting info response
 */
export interface SettingInfo {
  gameRule?: GameRuleInfo;
  robotNum?: RobotNumInfo;
  robotLampNum?: RobotLampNumInfo;
  withdrawCommission?: number;
  minWithdrawNum?: number;
  idleTime?: number;
}

/**
 *  @description: Setting list response
 */

export type SettingListResp = BaseListResp<SettingInfo>;
