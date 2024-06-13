import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Player info response
 */
export interface PlayerInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  name?: string;
  rank?: number;
  usdt?: number;
  invitedNum?: number;
  totalIncome?: number;
  profitAndLoss?: number;
  recent100WinPercent?: number;
  inviteCode?: string;
  inviterId?: number;
  invitedCode?: string;
}

/**
 *  @description: Player list response
 */

export type PlayerListResp = BaseListResp<PlayerInfo>;
