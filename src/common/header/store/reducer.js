import * as constants from './constants'
// 为了防止state被改变 immutable 对象 设置为不能 被改变
import { fromJS } from  'immutable';

const defaultState = fromJS({
  focused: false, // input焦点
  list: [], // tag 数据(immutable数组)
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS :
      return state.set('focused', true); // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    case constants.SEARCH_BLUR :
      return state.set('focused', false);
    case constants.CHANGE_LIST :
      return state.set('list', action.data);
    default :
      return state
  }
}