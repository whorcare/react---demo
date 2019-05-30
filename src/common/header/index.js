import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false, // 聚焦状态
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
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
              in={this.state.focused}
              timeout={200}
              className="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
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
  }

  // 聚焦状态时
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  // 失去焦点
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;