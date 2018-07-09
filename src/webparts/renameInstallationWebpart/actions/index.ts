import { Action, ActionTypes, ISiteInfo } from './actionTypes';

let nextSiteId: number = 0;
const testSiteCollectionExistsEndpoint = 'https://mlk-site-provisioning-dev-fa-we.azurewebsites.net/api/test-site-collection-exists?code=lPsoWGbAA1FJiHZbaC0/azWRBAN3DTzpuXhwgzIKv26TRrBuVgrYEQ==';
const addSiteUpdateRequestEndpoint = 'https://mlk-site-provisioning-dev-fa-we.azurewebsites.net/api/add-site-update-request?code=W49Z0JyFrBQbO2vmGBXQesTdU6K9Ee1nNn3l6H0c4ba9wnUEg/YuJA==';
const header = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
});

export const getSiteRequest = (): Action => ({
  type: ActionTypes.GET_SITE_REQUEST
});
export const getSiteSuccess = (siteInfo: ISiteInfo): Action => ({
  id: nextSiteId++,
  siteInfo,
  type: ActionTypes.GET_SITE_SUCCESS
});
export const getSiteError = (error: Error): Action => ({
  payload: error.message,
  type: ActionTypes.GET_SITE_ERROR
});

export const updateSitesRequest = (): Action => ({
  type: ActionTypes.UPDATE_SITES_REQUEST
});
export const updateSitesSuccess = (): Action => ({
  type: ActionTypes.UPDATE_SITES_SUCCESS
});
export const updateSitesError = (error: Error): Action => ({
  payload: error.message,
  type: ActionTypes.UPDATE_SITES_ERROR
});

export function getSite(url: string) {
  return async (dispatch: any) => {

    dispatch(getSiteRequest());

    try {
      const data = await fetch(`${testSiteCollectionExistsEndpoint}&relativeUrl=${url}`, {
        headers: header,
        mode: 'cors',
      })
        .then(response => response.json())
        .then(json => json);
      dispatch(getSiteSuccess({
        userProvidedUrl: url,
        ...data
      }));
    } catch (error) {
      dispatch(getSiteError(error));
    }
  };
}

export function updateSites(sites: any[]) {
  return async (dispatch: any) => {

    dispatch(updateSitesRequest());
    let updateMessageBody = '';
    sites.forEach((item) => {
      if (!item.siteInfo.Exists || item.siteInfo.newTitle === null
        || item.siteInfo.newTitle.trim() === ''
        || item.siteInfo.newTitle === item.siteInfo.Title) {
        return;
      }
      updateMessageBody += `{
          "Url": "${item.siteInfo.AbsoluteUri}",
          "Title": "${item.siteInfo.newTitle}"
        },`;
    });
    // remove trailing comma
    updateMessageBody = updateMessageBody.endsWith(',') ?
      updateMessageBody.slice(0, -1) :
      updateMessageBody;
    try {
      await fetch(addSiteUpdateRequestEndpoint, {
        body: `{
          "Type": "UpdateSiteMetadata",
          "Sites": [
            ${updateMessageBody}
          ]
      }`,
        headers: header,
        method: 'POST',
        mode: 'cors'
      });
      dispatch(updateSitesSuccess());
    } catch (error) {
      dispatch(updateSitesError(error));
    }
  };
}
