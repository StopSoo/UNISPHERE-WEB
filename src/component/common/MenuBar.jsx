import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";
import LeftSideBar from "./LeftSideBar";

// 화면 최상단에 위치한 전체 메뉴 바
function MenuBar({ EnterPrise }) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <Menus>
      <LeftNavigationBar />
      <RightNavigationBar />
    </Menus>
  );
}

const Menus = styled.div`
  width: auto;
  height: 8vh;
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
`;

// LNB
function LeftNavigationBar({}) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);  // 버튼 클릭 여부

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <LeftNavigationButton
        onMouseOver={() => setIsMenuHovered(true)}
        onMouseOut={() => setIsMenuHovered(false)}
        onClick={toggleSideBar}
      >
        <FiMenu 
            size='40px'
            color={ isMenuHovered ? 'white' : 'black' }
        />
      </LeftNavigationButton>
      <LeftSideBar isOpen={isSideBarOpen}/>
    </>
  );
}

const LeftNavigationButton = styled.button`
  width: 5vw;
  height: 8vh;
  background: none;
  border: none;
  position: relative;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 3000;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

function RightNavigationBar() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <Navs>
      <Logout>로그아웃</Logout>
      <Bar>|</Bar>
      <MyPage>마이 페이지</MyPage>
    </Navs>
  );
}

const Navs = styled.div`
  width: 20vw;
  height: 4vh;
  background: white;
  opacity: 50%;
  border: none;
  border-radius: 50px;
  margin: auto 1vw auto auto;
  box-shadow: 5px 5px 5px 0px gray;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Bar = styled.div`
  width: 0.5vw;
  height: 3vh;
  background: none;
  border: none;
  margin: 0.4vw;
`;

const Logout = styled.button`
  width: 9vw;
  height: 3vh;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Godo', sans-serif;
  font-size: 13px;
  text-decoration: underline;
  margin: 0.4vw 0 0.4vw 0;
  &:active,
  &:hover {
    transition: 0.7s;
  }
  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

const MyPage = styled.button`
  width: 9vw;
  height: 3vh;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Godo', sans-serif;
  font-size: 13px;
  text-decoration: underline;
  margin: 0.4vw;
  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default MenuBar;