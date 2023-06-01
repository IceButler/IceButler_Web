import React, { useRef, useState, useEffect } from 'react';
import sendEmailUrl from "assets/images/send.png";
import './Email.css'
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';


const Email = () => {
  const location = useLocation();
  const email = location.state.item.email;
  const nickname = location.state.item.nickname;

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {	
            email : email,
            title : e.target.elements.title.value,
            message : e.target.elements.message.value
               };

    emailjs.send("service_d0rcavp","template_ypn2nr6", templateParams, 'UMuQ-efYiV6XCJ6_R')
      .then((result) => {
          console.log(result.text);
          alert("전송되었습니다.");
      }, (error) => {
        alert("실패했습니다.");
          console.log(error.text);
      });
  };
  
  return (
    <div className='page'>
      <div className='emailManageContainer'>
        <div className='userManageTitle'>이메일 전송</div>
        <form ref={form} onSubmit={sendEmail}>
        <div className='emailManageContent'>
          <div className='userManageBar' />
          <div className='emailTitleBar'>
                <label className="emailTitleName">제목</label>
                <input type="text" className="emailTitle" name="title" placeholder='제목을 입력해주세요' value={`[냉집사] ${nickname}님, 안내 메일 드립니다.`}></input>
          </div>
            <textarea className="emailContent" name="message" rows="20" cols="50">
            {`${nickname}님, 안녕하세요.
냉장고 유통기한 관리 어플, 냉집사입니다.`}</textarea>
            <button className="sendEmailBtn" type='submit' value="Send">
            <img className='sendEmailIcon' src={sendEmailUrl} alt="버튼 아이콘" />
                보내기
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
