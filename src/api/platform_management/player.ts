import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { PlayerInfo, PlayerListResp } from './model/playerModel';

enum Api {
  CreatePlayer = '/wl-api/player/create',
  UpdatePlayer = '/wl-api/player/update',
  GetPlayerList = '/wl-api/player/list',
  DeletePlayer = '/wl-api/player/delete',
  GetPlayerById = '/wl-api/player',
}

/**
 * @description: Get player list
 */

export const getPlayerList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<PlayerListResp>>(
    { url: Api.GetPlayerList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new player
 */
export const createPlayer = (params: PlayerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreatePlayer, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the player
 */
export const updatePlayer = (params: PlayerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdatePlayer, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete players
 */
export const deletePlayer = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeletePlayer, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get player By ID
 */
export const getPlayerById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<PlayerInfo>>(
    { url: Api.GetPlayerById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
