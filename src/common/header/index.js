import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  Sous
} from './style.js'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            className="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <Sous></Sous>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="writting">写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
};

// 链接规则 将state 的 数据 映射 为 props
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'), // 使用 get
  }
};

// 改变 store 数据
// store .dispatch. props
const mapDispatchToProps = (dispatch) => {
  return {
    // 聚焦状态时
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    // 失去焦点
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);