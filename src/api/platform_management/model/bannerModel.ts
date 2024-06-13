import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Banner info response
 */
export interface BannerInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  endpoint?: string;
  module?: string;
  fileType?: number;
  path?: string;
  jumpUrl?: string;
  file?: *FileInfo;
}

/**
 *  @description: Banner list response
 */

export type BannerListResp = BaseListResp<BannerInfo>;
