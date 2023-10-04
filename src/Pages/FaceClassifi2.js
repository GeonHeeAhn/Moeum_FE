import React from "react";
import { useNavigate } from "react-router-dom";

import BackgroundContainer from "../Components/BackgroundContainer";
import { Content, Question, PictureContainer, Face, FaceBox, BottomContainer, Btn } from "../Components/ClassifiContainer";

import dummy2 from "../Assets/dummy2.jpeg";

const FaceClassifi2 = () => {
  const navigate = useNavigate();

  const moveFunc = () => {
    navigate("/faceclassification");
  };

    return (
     <BackgroundContainer>
        <Content>
          <Question>
            이전에 등록한
            <br></br>
            친구인가요?
            </Question>
            <PictureContainer>
                <Face>
                    <img src={dummy2} style={{width: '90%'}}/>
                </Face>
                <FaceBox />
            </PictureContainer>
            <BottomContainer>
                <Btn>
                  네
                </Btn>
                <div onClick={moveFunc}>
                <Btn>
                  아니오
                </Btn>
                </div>
            </BottomContainer>
        </Content>
      </BackgroundContainer>
    );
};

export default FaceClassifi2;