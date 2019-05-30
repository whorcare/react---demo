// redux 合并 将 多个reducer 合并 成为一个reducer
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store'; // as => ES6 给 对象起个别名

const reducer = combineReducers ({
  header: headerReducer
});

export default reducer;