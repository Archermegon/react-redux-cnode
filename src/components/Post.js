import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "./../actions";
import styled from "styled-components";
import { Pagination } from "antd";

class Post extends Component {
  componentDidMount() {
    const { getPost } = this.props;
    getPost();
  }
  render() {
    // const { tab } = this.props.match.params;
    const { post } = this.props;
    console.log(post);
    const posts = post.map(ele => (
      <li key={ele.id}>
        <div className="img-sculp">
          <img src={ele.author.avatar_url} alt="" />
        </div>
        <p className="reply">
          <span>{ele.reply_count}</span>/<span>{ele.visit_count}</span>
        </p>
        <p
          className={`type ${
            this.isTop(ele.top, ele.tab) === "精华" ||
            this.isTop(ele.top, ele.tab) === "置顶"
              ? "type-active"
              : ""
          }`}
        >
          {this.isTop(ele.top, ele.tab)}
        </p>
        <p className="title">{ele.title}</p>
        <p className="time">1天前</p>
      </li>
    ));
    const postUl = post.length ? (
      <ul className="post">
        {posts}
        <Pagination
          className="page"
          current={1}
          // onChange={this.onChange}
          total={3240}
          pageSize={40}
        />
      </ul>
    ) : (
      "请稍等……"
    );
    return <PostContainer>{postUl}</PostContainer>;
  }
  isTop = (top, tab) => {
    let tabName;
    switch (tab) {
      case "share":
        tabName = "分享";
        break;
      case "ask":
        tabName = "问答";
        break;
      default:
        tabName = "精华";
        break;
    }
    return top ? "置顶" : tabName;
  };
}

const mapStatetoProps = state => ({
  post: state.post
});
export default connect(
  mapStatetoProps,
  { getPost }
)(Post);

const PostContainer = styled.div`
  .post {
    .page {
      padding: 10px;
      .ant-pagination-item-active {
        border-color: #80bd01;
      }
    }
  }
  .post > li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #f6f6f6;
    .img-sculp {
      width: 30px;
      height: 30px;
      border-radius: 2px;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    .reply {
      font-size: 14px;
      color: #b4b4b4;
      width: 70px;
      > span:nth-child(1) {
        color: #9e78c0;
        font-size: 15px;
      }
    }
    .type {
      background: #e5e5e5;
      color: #999;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 3px;
    }
    .type-active {
      background: #80bd01;
      color: #fff;
    }
    .title {
      margin-left: 10px;
      color: #333;
    }
    .time {
      position: absolute;
      right: 10px;
      color: #999;
      font-size: 13px;
    }
    :hover {
      background: #f6f6f6;
      .title {
        text-decoration: underline;
      }
    }
  }
`;
