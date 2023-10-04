import React, {useState, useEffect} from "react";

import BackgroundContainer from "../Components/BackgroundContainer";
import { Content, Question, PictureContainer, Face, FaceBox, BottomContainer, Btn } from "../Components/ClassifiContainer";

import dummy2 from "../Assets/dummy2.jpeg";

const FaceClassifi2 = () => {
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
                <FaceBox>
                      
                </FaceBox>
            </PictureContainer>
            <BottomContainer>
                <Btn>
                  네
                </Btn>
                <Btn>
                  아니오
                </Btn>
            </BottomContainer>
        </Content>
      </BackgroundContainer>
    );
};

export default FaceClassifi2;