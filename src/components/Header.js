import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  state = {
    txt: ""
  };
  render() {
    const { txt } = this.state;
    return (
      <Head>
        <div className="left">
          <div className="img-logo">
            <img
              src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
              alt=""
            />
          </div>
          <div className="input">
            <input type="text" value={txt} onChange={this.handleInput} />
          </div>
        </div>
        <ul className="right">
          <li>首页</li>
          <li>关于</li>
          <li>API</li>
          <li>登录</li>
          <li>退出</li>
        </ul>
      </Head>
    );
  }
  handleInput = event => {
    this.setState({
      txt: event.target.value
    });
  };
}

export default Header;

const Head = styled.div`
  display: flex;
  background: #444;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  color: #ccc;
  .img-logo {
    width: 120px;
  }
  .img-logo > img {
    width: 100%;
  }
  .left {
    display: flex;
    .input {
      margin-left: 20px;
    }
  }
  .right {
    display: flex;
    line-height: 56px;
    list-style: none;
    > li {
      padding: 0 10px;
    }
  }
`;
