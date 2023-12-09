import React from 'react';
import styled from 'styled-components';
import MenuBar from '../common/MenuBar.jsx';
import AlertBar from '../common/Alert.jsx';
import Avatar from '../common/Avatar.jsx';
import chRoot from '../resource/avatar_unisphere.png';
import logoRoot from '../resource/unisphere_logo.png';
import handiconRoot from '../resource/unisphere_logo_hand.png';

function IntroTemplate() {
    return (
      <HomepagePosition>
        <MenuBar/>
        <AlertBar/>
        <LogoPart>
          <img src={logoRoot} alt="logo"/>
        </LogoPart>
        <ButtonOne>플랫폼 소개</ButtonOne>
        <ButtonTwo>공지사항</ButtonTwo>
        <WhiteBox>
          <BubblePart>
            <text>
              UniSphere 홈페이지에 <br/>
              방문한 걸 환영해 ~
            </text>
            <BubbleBubble></BubbleBubble>
          </BubblePart>
          <Avatar 
            name='UniSphere' 
            src={chRoot}
            width='130vw'
            marginLeft='8vw'
            marginTop='22vh'
          />
          <TextPart>
            <icon><img src={handiconRoot} width='30px' style={{marginRight: '10px'}}/></icon>
            <h1>우리 플랫폼의 목적</h1>
            <main>개발도상국의 빈곤감소 및 삶의 질 향상, 여성, 아동, 장애인, 청소년의 인권향상, 성평등 실현, 지속가능한 발전 및 인도주의를 실현하고, 협력대상국과의 경제 협력 및 우호협력관계 증진, 국제사회의 평화와 번영에 기여함.</main>
            <icon><img src={handiconRoot} width='30px' style={{marginRight: '10px'}}/></icon>
            <h1>이렇게 사용해보세요!</h1>
            <main>홈페이지에 접속하면, 홈페이지 소개와 공지사항을 확인할 수 있습니다.</main>
          </TextPart>
        </WhiteBox>
      </HomepagePosition>
    );
  }
  
  const HomepagePosition = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      position: relative;
  `;
  
  const WhiteBox = styled.div`
    width: 77.5vw;
    height: 58.1vh;
    background-color: white;
    opacity: 90%;
    border-radius: 30px 30px 0 0;
    margin: auto auto 0 auto; // 가운데 하단 정렬 
    position: relative;
    z-index: 0;
  `;
  
  const LogoPart = styled.div`
    /* margin: auto; */
    display: flex;;
    align-items: center;
    justify-content: center;

    position: relative;
    height: 20vh;
    img {
        width:50%;
        height: 15vh;
        object-position: center;
        object-fit: cover;
    }
`;
  
  const BubblePart = styled.div`
    width: 140px;
    height: 50px;
    border: none;
    border-radius: var(--button-radius, 20px);
    background-color: var(--bubble-bg-color, #d9d9d9);
    margin-top: 11vh;
    margin-left: 10vw;
    padding: 3px 10px 3px 10px;
    box-shadow: 4px 4px 4px 0px gray;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    text {
      font-family: 'Godo', sans-serif;
      font-size: 10px;
    }
  `;
  
  const BubbleBubble = styled.div`
    position: absolute;
    border-style: solid;
    border-width: 22px 14px 0;
    border-color: #D9D9D9 transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -22px;
    left: 29px;
  `;
  
  const ButtonOne = styled.button`
    width: 8.5vw;
    height: 11vh;
    background: var(--button-bg-color, #FAFF00);
    opacity: 85%;
    border: none;
    border-radius: 20px 20px 0 0;
    position: absolute;
    z-index: 2; // 컴포넌트 상대적으로 배치
    top: 34vh;
    left: 17vw;
    font-family: 'Godo', sans-serif;
    font-size: 15px;
    box-shadow: 5px 5px 5px 0px gray;
  
    cursor: pointer;
    &:active,
    &:hover,
    &:focus {
      opacity: 100%;
      z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
    }
    // 고도체
    @font-face {  
      font-family: 'Godo';
      font-style: normal;
      font-weight: 700;
      src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
    }
  `;
  
  const ButtonTwo = styled.button`
    width: 8.5vw;
    height: 11vh;
    background: var(--button-bg-color, #0029FF);
    opacity: 85%;
    border: none;
    border-radius: 20px 20px 0 0;
    position: absolute;
    z-index: 0; // 컴포넌트 상대적으로 배치
    top: 34vh;
    left: 26.5vw;
    font-family: 'Godo', sans-serif;
    font-size: 15px;
    color: white;
    box-shadow: 5px 5px 5px 0px gray;
  
    cursor: pointer;
    &:active,
    &:hover,
    &:focus {
      opacity: 100%;
      z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
    }
  `;
  
  const TextPart = styled.div`
    width: 50vw;
    height: 50vh;
    border: none;
    position: relative;
    left: 26vw;
    top: 4vh;
  
    h1 {
      font-family: 'Malgun Gothic', sans-serif;
      font-weight: 700;
      font-size: 24px;
      margin-left: 36px;
      margin-top: 0;
    }
  
    main {
      font-family: 'Malgun Gothic', sans-serif;
      font-weight: 300;
      font-size: 18px;
      padding: 0 14px 40px 14px;
    }
  
    icon {
      width: 30px;
      position: absolute;
    }
  `;

export default IntroTemplate;