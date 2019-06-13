/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {

    const { list } = this.props;

    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img 
                  className='topic-pic' 
                  src={item.get('imgUrl')}
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }

      </TopicWrapper>
    )
  }
}

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

// export default Topic;
export default connect(mapStateToProps, mapDispatchToProps)(Topic);