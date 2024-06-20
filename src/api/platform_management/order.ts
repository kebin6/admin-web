import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { OrderInfo, OrderListResp } from './model/orderModel';

enum Api {
  CreateOrder = '/wl-api/order/create',
  UpdateOrder = '/wl-api/order/update',
  GetOrderList = '/wl-api/order/list',
  DeleteOrder = '/wl-api/order/delete',
  GetOrderById = '/wl-api/order',
}

/**
 * @description: Get order list
 */

export const getOrderList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OrderListResp>>(
    { url: Api.GetOrderList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new order
 */
export const createOrder = (params: OrderInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateOrder, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the order
 */
export const updateOrder = (params: OrderInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateOrder, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete orders
 */
export const deleteOrder = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteOrder, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get order By ID
 */
export const getOrderById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OrderInfo>>(
    { url: Api.GetOrderById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
