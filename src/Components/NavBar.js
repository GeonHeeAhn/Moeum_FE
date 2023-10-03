import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import home from "../Assets/icons/home.png";
import map from "../Assets/icons/map.png";
import friends from "../Assets/icons/friends.png";
import settings from "../Assets/icons/settings.png";

import { ModalBack, ModalBox, ModalBtn, ExitBtn } from "./PhotoModal";

export const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <>
        <CenterBtn onClick={() => setModalOpen(true)} />
        {modalOpen && (
          <ModalBack
            ref={modalBackground}
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}
          >
            <ModalBox>
              <ModalBtnTop>카메라</ModalBtnTop>
              <ModalBtn>사진보관함</ModalBtn>
            </ModalBox>
            <ExitBtn onClick={() => setModalOpen(false)}>취소</ExitBtn>
          </ModalBack>
        )}
      </>
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
    </>
  );
};

export const NavigationBar = styled.div`
  bottom: 0;
  height: 94px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.07);
  background: white;
  !postition: fixed;
  z-index: 998;
`;
export const NavBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  aligin-content: center;
  border: none;
  margin: 0px 0px 10px 0px;
  padding: 0px;
`;

export const CenterBtn = styled.button`
  position: fixed;
  bottom: 50px;
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #ffc329;
  z-index: 999;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
`;

export const ModalBtnTop = styled(ModalBtn)`
  //왜인지 모르겠으나 적용이 안댐..
  border-bottom: 1px #dddddd;
`;
