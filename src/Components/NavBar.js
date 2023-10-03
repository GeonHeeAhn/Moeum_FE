import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import home from "../Assets/icons/home.png";
import map from "../Assets/icons/map.png";
import friends from "../Assets/icons/friends.png";
import settings from "../Assets/icons/settings.png";

export const NavBar = () => {
  return (
    <NavigationBar>
      <NavBtn>
        <img src={home} alt="로고" />
      </NavBtn>
      <NavBtn>
        <img src={friends} alt="로고" />
      </NavBtn>
      <NavBtn></NavBtn>
      <NavBtn>
        <img src={map} alt="로고" />
      </NavBtn>
      <NavBtn>
        <img src={settings} alt="로고" />
      </NavBtn>
    </NavigationBar>
  );
};

export const NavigationBar = styled.div`
  bottom: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.07);
  background: white;
  !postiton: fixed;
`;
export const NavBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  aligin-content: center;
  border: none;
`;
