/* 统一管理action */
import * as constants from './constants';
import axios from 'axios';
import { fromJS } from  'immutable';

const changeList  = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const getList = () => {
  //type: constants.GET_LIST,
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data)); // dispatch 方法 派发给 store(语法糖)
    }).catch(() => {
      console.log('error');
    })
  }
};