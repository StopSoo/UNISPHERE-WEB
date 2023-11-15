import React from 'react';
import Button from '../component/Button.jsx'
import logoRoot from "../resource/unisphere_logo.png";
import chRoot from "../resource/character_unisphere.png";

function MainScreen() {
    return (
        <div>
            <div><img id="logo" src={logoRoot} alt="logo"/></div>
            <div id = "buttons">
                <Button children='로그인 / 회원가입'></Button>
                <Button children='이용 안내'></Button>
                <Button children='뉴스 레터'></Button>
            </div>
            <img id="character" src={chRoot} alt="ch"/>
        </div>
    );
}

export default MainScreen;