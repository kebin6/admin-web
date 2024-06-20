import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp } from '@/api/model/baseModel';
import { OverviewInfo } from './model/overviewModel';

enum Api {
  GetOverview = '/wl-api/overview',
}

/**
 * @description: Get player list
 */

export const getOverview = (params: { startTime?: number, endTime?: number }, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OverviewInfo>>(
    { url: Api.GetOverview, params },
    { errorMessageMode: mode },
  );
};
