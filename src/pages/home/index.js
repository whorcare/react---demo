/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Write from './components/write';
import { actionCreators } from './store';

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';

class Home extends Component {

  // 回到顶部
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
        <Recommend/>
          <Write/>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
      </HomeWrapper>
    )
  }

  // 当组价挂载完毕
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  // 页面移除钩子
  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toogleTopShow(true));
    } else {
      dispatch(actionCreators.toogleTopShow(false));
    }
  }
});

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
