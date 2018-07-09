export enum ActionTypes {
  GET_SITE_REQUEST,
  GET_SITE_SUCCESS,
  GET_SITE_ERROR,
  UPDATE_SITES_REQUEST,
  UPDATE_SITES_SUCCESS,
  UPDATE_SITES_ERROR,
}

export interface ISiteInfo {
  id: number;
  userProvidedUrl: string;
  newTitle: string;
}

export type Action =
  { type: ActionTypes.GET_SITE_REQUEST } |
  { type: ActionTypes.GET_SITE_SUCCESS, id: number, siteInfo: ISiteInfo } |
  { type: ActionTypes.GET_SITE_ERROR, payload: string } |
  { type: ActionTypes.UPDATE_SITES_REQUEST } |
  { type: ActionTypes.UPDATE_SITES_SUCCESS } |
  { type: ActionTypes.UPDATE_SITES_ERROR, payload: string };
