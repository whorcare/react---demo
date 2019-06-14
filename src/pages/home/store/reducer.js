// 为了防止state被改变 immutable 对象 设置为不能 被改变
import { fromJS } from  'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA :
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    case constants.ADD_ARTICLE_LIST :
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
      })
      // return state.set('articleList', state.get('articleList').concat(action.list))
    default :
      return state
  }
}
