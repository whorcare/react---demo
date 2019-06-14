// 为了防止state被改变 immutable 对象 设置为不能 被改变
import { fromJS } from  'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA :
      console.log(action)
      // return state.set('topicList', fromJS(action.topicList));
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    default :
      return state
  }
}
