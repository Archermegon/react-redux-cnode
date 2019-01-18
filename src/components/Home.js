import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import Post from "./Post";
import { getPost } from "./../actions";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <ul className="topNav">
          <li>
            <NavLink to="/post/all">全部</NavLink>
          </li>
          <li>
            <NavLink to="/post/good">精华</NavLink>
          </li>
          <li>
            <NavLink to="/post/share">分享</NavLink>
          </li>
          <li>
            <NavLink to="/post/ask">问答</NavLink>
          </li>
        </ul>
        <Route component={Post} path="/post/:tab" />
        <Route component={Post} path="/" exact />
      </HomeContainer>
    );
  }
}

export default Home;
const HomeContainer = styled.div`
  border-radius: 3px;
  background: #fff;
  .topNav {
    display: flex;
    background: #f6f6f6;
    padding: 10px;
    list-style: none;
    border-radius: 3px;
    a {
      text-decoration: none;
      color: #80bd01;
      font-size: 14px;
      border-radius: 3px;
      margin-right: 10px;
      padding: 2px 10px;
    }
    .active {
      background: #80bd01;
      color: #fff;
    }
  }
`;
