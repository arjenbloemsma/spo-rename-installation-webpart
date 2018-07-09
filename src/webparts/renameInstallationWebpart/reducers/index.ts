import { AnyAction, combineReducers } from 'redux';
import { ISiteInfo } from '../actions/actionTypes';
import sites from './sites';

export default combineReducers({
  sites
});
