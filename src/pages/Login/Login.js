import React, { useState } from "react";
import "./Login.css";
import hideIcon from "assets/images/login/hide.png";
import viewIcon from "assets/images/login/view.png";
import doneIcon from "assets/images/login/done.png";
import notDoneIcon from "assets/images/login/notDone.png";
import logo512 from "assets/images/whiteLogo512.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
    return cookies.get(name);
};

export const removeCookie = (name, option) => {
    return cookies.remove(name, { ...option });
};

function Login() {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/main_proxy';
    const movePage = useNavigate();
    // For email
    const [isEmail, setIsEmail] = useState(false);
    // For pw
    const [showPswd, setShowPswd] = useState(false);

    //email
    const emailRegEx =
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCheck = (email) => {
        // 이메일 공백 제거
        email = email.replace(/\s/g, "");
        if (!emailRegEx.test(email)) {
            setIsEmail(false);
            return false;
        } else {
            setIsEmail(true);
            return true;
        }
    };

    //password
    const showPw = (e) => {
        if (showPswd) {
            setShowPswd(false);
        } else {
            setShowPswd(true);
        }
    };

    // submit
    const onSubmitHandler = (e) => {
        const inputEmail = e.target.email.value;
        const inputPw = e.target.password.value;
        e.preventDefault();
        axios.post(`${PROXY}/admin/login`, {
            email: inputEmail,
            password: inputPw
        }).then((res) => {
            const accessToken = res.data.data.accessToken
            setCookie('Authorization', accessToken);
            console.log(accessToken);
            movePage('/foodManage');
        }).catch((error) => {
            alert("로그인에 실패했습니다. 정보를 다시 한 번 더 입력해주세요.")
        });

    }
    return (
        <div className="loginContainer">
            <div className="loginPage">
                <img src={logo512} alt="logo icon error" />
                <h2>냉집사 관리자 페이지</h2>
                <div className="loginForm">
                    <form method="post" id="login-form" onSubmit={onSubmitHandler}>
                        <input type="email" placeholder={"이메일"} name="email"
                            onChange={(e) => { emailCheck(e.target.value); }} />
                        <img src={isEmail ? doneIcon : notDoneIcon} alt="img icon error" />
                        <input type={showPswd ? "text" : "password"} id="inputPw" placeholder={"비밀번호"} name="password" />
                        <img onClick={showPw} src={showPswd ? viewIcon : hideIcon} alt="pw icon error" id="pwClick" />
                        <input className="submitBtn" id="submitBtn" type="submit" value="로그인" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
