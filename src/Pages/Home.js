import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import BackgroundContainer from "../Components/BackgroundContainer";
import Main from "../Components/Main";

const Home = () => {
  return (
    <div>
      <BackgroundContainer>
        <Main></Main>
        <NavBar />
      </BackgroundContainer>
    </div>
  );
};

export default Home;
