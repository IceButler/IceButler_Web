import React, { useEffect, useState } from 'react';
import sendEmail from "assets/images/send.png";
import './Email.css'


const Email = () => {
  
  return (
    <div className='page'>
      <div className='emailManageContainer'>
        <div className='userManageTitle'>이메일 전송</div>
        <div className='emailManageContent'>
          <div className='userManageBar' />
          <div className='emailTitleBar'>
                <label className="emailTitleName">제목</label>
                <input type="text" className="emailTitle" placeholder='제목을 입력해주세요'/>
          </div>
            <textarea className="emailContent" rows="20" cols="50"></textarea>
            <button className="sendEmailBtn" onClick="sendEmail()">
            <img className='sendEmailIcon' src={sendEmail} alt="버튼 아이콘" />
                보내기
            </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
