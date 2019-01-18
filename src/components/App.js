import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import "./../constant/global.css";
import Main from "./Main";
import styled from "styled-components";
import RightMain from "./RightMain";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ background: "#e1e1e1" }}>
          <Header />
          <AppContainer>
            <Main />
            <RightMain />
          </AppContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  margin-top: 20px;
  .leftMain {
    width: 75%;
  }
  .rightMain {
    width: 23%;
    margin-left: 2%;
  }
`;
