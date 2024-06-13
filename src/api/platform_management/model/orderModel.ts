import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Order info response
 */
export interface OrderInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  type?: string;
  code?: string;
  num?: number;
  toAddress?: string;
  fromAddress?: string;
}

/**
 *  @description: Order list response
 */

export type OrderListResp = BaseListResp<OrderInfo>;
