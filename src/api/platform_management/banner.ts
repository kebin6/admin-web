import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { BannerInfo, BannerListResp } from './model/bannerModel';

enum Api {
  CreateBanner = '/wl-api/banner/create',
  UpdateBanner = '/wl-api/banner/update',
  GetBannerList = '/wl-api/banner/list',
  DeleteBanner = '/wl-api/banner/delete',
  GetBannerById = '/wl-api/banner',
}

/**
 * @description: Get banner list
 */

export const getBannerList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<BannerListResp>>(
    { url: Api.GetBannerList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new banner
 */
export const createBanner = (params: BannerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the banner
 */
export const updateBanner = (params: BannerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete banners
 */
export const deleteBanner = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get banner By ID
 */
export const getBannerById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<BannerInfo>>(
    { url: Api.GetBannerById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
