import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Player info response
 */
export interface PlayerInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  rank?: number;
  amount?: number;
  invitedNum?: number;
  totalIncome?: number;
  recent100WinPercent?: number;
  inviteCode?: string;
  inviterId?: number;
  invitedCode?: string;
  lamb?: number;
  depositAddress?: string;
  systemCommission?: number;
  email?: string;
}

/**
 *  @description: Player list response
 */

export type PlayerListResp = BaseListResp<PlayerInfo>;
