// redux 合并 将 多个reducer 合并 成为一个reducer
import { combineReducers } from 'redux-immutable'; // 将 store 改为immutable 不能直接修改的对象
import { reducer as headerReducer } from '../common/header/store'; // as => ES6 给 对象起个别名
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers ({
  header: headerReducer,
  home: homeReducer
});

export default reducer;