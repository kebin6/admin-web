import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq } from '@/api/model/baseModel';
import { SettingInfo, SettingListResp } from './model/settingModel';

enum Api {
  CreateSetting = '/wl-api/setting/create',
  UpdateSetting = '/wl-api/setting/update',
  GetSettingList = '/wl-api/setting/list',
  DeleteSetting = '/wl-api/setting/delete',
  GetSettingById = '/wl-api/setting/find',
}

/**
 * @description: Get setting list
 */

export const getSettingList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SettingListResp>>(
    { url: Api.GetSettingList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new setting
 */
export const createSetting = (params: SettingInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateSetting, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the setting
 */
export const updateSetting = (params: SettingInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateSetting, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete settings
 */
export const deleteSetting = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteSetting, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get setting By ID
 */
export const getSettingById = (params: { module: string }, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SettingInfo>>(
    { url: Api.GetSettingById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
