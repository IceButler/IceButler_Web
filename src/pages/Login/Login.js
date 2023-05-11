import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="loginPage">
            <h2>냉집사 관리자 페이지</h2>
            <div className='loginForm'>
            {/* todo: url 생성시 연결 진행 */}
            <form method="post" action="url" id="login-form">
            <input type="text" id = "inputId" placeholder={"이메일"} autoFocus/>
            <input type="text" id = "inputPw" placeholder={"비밀번호"}/>
            <input type='submit'/>
            </form>
            </div>
        </div>
    );
}

export default Login;