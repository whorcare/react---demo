import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  render() {

    const { list } = this.props;

    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
            )
          })
        }
        {/* <RecommendItem imgUrl="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></RecommendItem>
        <RecommendItem imgUrl="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></RecommendItem>
        <RecommendItem imgUrl="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></RecommendItem>
        <RecommendItem imgUrl="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"></RecommendItem> */}
      </RecommendWrapper>
    )
  }
}

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

// export default Recommend;
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);