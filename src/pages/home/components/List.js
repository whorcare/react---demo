/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import { 
  ListItem, ListInfo, LoadMore
} from '../style'

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img 
                  className='pic' 
                  src={item.get('imgUrl')}
                />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  {/* <h3 className='title'>title</h3> */}
                  <p className='desc'>{item.get('desc')}</p>
                  {/* <p className='desc'>desc</p> */}
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
  }
};

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
});

// export default List;dad
// export default Topic;
export default connect(mapStateToProps, mapDispatchToProps)(List);