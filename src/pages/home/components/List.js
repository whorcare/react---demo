/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ListItem, ListInfo
} from '../style'

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
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

      </div>
    )
  }
}

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

// export default List;
// export default Topic;
export default connect(mapStateToProps, mapDispatchToProps)(List);