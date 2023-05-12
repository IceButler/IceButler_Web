import React from 'react';
import './Login.css'
import hideIcon from 'assets/images/login/hide.png'
import viewIcon from 'assets/images/login/view.png'
import doneIcon from 'assets/images/login/done.png'
import notDoneIcon from 'assets/images/login/notDone.png'
import logo512 from 'assets/images/whiteLogo512.png'

function Login() {
    // For email
    const [isEmail, setIsEmail] = useState(false);

    // For pw
    const [showPswd, setShowPswd] = React.useState(false);

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCheck = (email) => {
        // 이메일 공백 제거
        email = email.replace(/\s/g, ""); 
        if(!emailRegEx.test(email)) {
            setIsEmail(false)
            return false;
        }else {
            setIsEmail(true)
            return true;
        }
    }

    const showPw = e => {
        if(showPswd) {
            setShowPswd(false)
        }else{
            setShowPswd(true)
        }
    }


    return (
            <img src = {logo512} alt='logo icon error'/>
            <h2>냉집사 관리자 페이지</h2>
            <div className='loginForm'>
            <form method="post" action="url" id="login-form">
            <div className="inputInfo">
            <input type="email" placeholder={"이메일"} onChange={(e) => {
                emailCheck(e.target.value)
            }}/>
            <img src={isEmail ? doneIcon : notDoneIcon} alt='img icon error'/>
            </div>
            <div className="inputInfo">
            <input type={showPswd ? "text":"password"} id = "inputPw" placeholder={"비밀번호"}/>
            <img onClick={showPw} src={showPswd ? viewIcon : hideIcon} alt='pw icon error' id='pwClick'/>
            </div>
            <div className="inputInfo">
            <input type='submit'/>
            </div>
            </form>
            </div>
        </div>
    );
}

export default Login;