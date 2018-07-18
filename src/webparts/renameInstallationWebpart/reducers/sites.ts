import { ActionTypes, ISiteInfo } from '../actions/actionTypes';

export const initialState: ISiteInfo[] = [];

const sites = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SITE_SUCCESS:
      return [
        ...state,
        {
          id: action.id,
          siteInfo: { ...action.siteInfo, newTitle: null }
        }
      ];
    case ActionTypes.UPDATE_SITES_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default sites;
