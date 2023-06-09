import React, { useRef } from 'react';
import sendEmailUrl from "assets/images/send.png";
import './Email.css'
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { removeCookie, getCookie } from 'pages/Login/Login.js';


export const sendWithdrawEmailAuto = (item) => {
  
  const PROXY = window.location.hostname === 'localhost' ? '' : '/recipe_proxy';
  const defaultTitle = `[냉집사] ${item.nickname}님, 회원 정지 안내 메일 드립니다.`;
  const defaultMessage = `${item.nickname}님, 안녕하세요.
냉장고 유통기한 관리 어플, 냉집사입니다.
냉집사 회원 정지 안내입니다.
  
냉집사는 어플 사용 규칙에 따라 보다 나은 어플을 운영하기 위해
신고된 횟수가 3번 이상인 회원님의 계정을 정지 및 탈퇴 처리를 합니다.
  
현재 정지/탈퇴 계정으로 전환되었기 때문에 앞으로 저희 서비스를 이용하실 수 없습니다.
혹시, 정지/탈퇴를 원하지 않으시면 본 메일로 회신해 주시면 확인 후 처리해 드리겠습니다.`;
  const userIdx = item.userIdx;
  const token = getCookie('Authorization');
  axios.get(`${PROXY}/reports/users/${userIdx}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if (res.data.statusCode === 200) {
        const reportList1 = res.data.data.userRecipeReportResList[0];
      const reportList2 = res.data.data.userRecipeReportResList[1];
      const reportList3 = res.data.data.userRecipeReportResList[2];

      var templateParams = {
        nickname: item.nickname,
        email: item.email,
        title: defaultTitle,
        message: defaultMessage
      };
      if (reportList1) {
        templateParams.recipeName1 = reportList1.recipeName;
        templateParams.reason1 = reportList1.reason;
        templateParams.date1 = reportList1.reportDate;
      }
      if (reportList2) {
        templateParams.recipeName2 = reportList2.recipeName;
        templateParams.reason2 = reportList2.reason;
        templateParams.date2 = reportList2.reportDate;
      }
      if (reportList3) {
        templateParams.recipeName3 = reportList3.recipeName;
        templateParams.reason3 = reportList3.reason;
        templateParams.date3 = reportList3.reportDate;
      }

      emailjs.send("service_d0rcavp", "template_zf5i5q9", templateParams, 'UMuQ-efYiV6XCJ6_R')
        .then((result) => {
          alert("전송되었습니다.");
        }, (error) => {
          alert("실패했습니다.");
        });
      }else{
        alert('토큰이 만료되었습니다. 로그인 화면으로 이동합니다.');
      }
      
    })
    .catch(err => console.log(err));

};

const Email = () => {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/recipe_proxy';
  const location = useLocation();
  const email = location.state.item.email;
  const nickname = location.state.item.nickname;
  const userIdx = location.state.item.userIdx;
  const defaultTitle = `[냉집사] ${nickname}님, 회원 정지 안내 메일 드립니다.`;
  const defaultMessage = `${nickname}님, 안녕하세요.
냉장고 유통기한 관리 어플, 냉집사입니다.
냉집사 회원 정지 안내입니다.
  
냉집사는 어플 사용 규칙에 따라 보다 나은 어플을 운영하기 위해
신고된 횟수가 3번 이상인 회원님의 계정을 정지 및 탈퇴 처리를 합니다.
  
현재 정지/탈퇴 계정으로 전환되었기 때문에 앞으로 저희 서비스를 이용하실 수 없습니다.
혹시, 정지/탈퇴를 원하지 않으시면 본 메일로 회신해 주시면 확인 후 처리해 드리겠습니다.`;

  const form = useRef(null);
  const navigate = useNavigate();

  const sendWithdrawEmail = (e) => {
    e.preventDefault();

    const token = getCookie('Authorization');
    axios.get(`${PROXY}/reports/users/${userIdx}`, {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        if (res.data.statusCode === 200) {
          const reportList1 = res.data.data.userRecipeReportResList[0];
        const reportList2 = res.data.data.userRecipeReportResList[1];
        const reportList3 = res.data.data.userRecipeReportResList[2];

        var templateParams = {
          email: email,
          title: e.target.elements.title.value || defaultTitle,
          message: e.target.elements.message.value || defaultMessage,
        };

        if (reportList1) {
          templateParams.recipeName1 = reportList1.recipeName;
          templateParams.reason1 = reportList1.reason;
          templateParams.date1 = reportList1.reportDate;
        }
        if (reportList2) {
          templateParams.recipeName2 = reportList2.recipeName;
          templateParams.reason2 = reportList2.reason;
          templateParams.date2 = reportList2.reportDate;
        }
        if (reportList3) {
          templateParams.recipeName3 = reportList3.recipeName;
          templateParams.reason3 = reportList3.reason;
          templateParams.date3 = reportList3.reportDate;
        }

        emailjs.send("service_d0rcavp", "template_zf5i5q9", templateParams, 'UMuQ-efYiV6XCJ6_R')
          .then((result) => {
            alert("전송되었습니다.");
            navigate(-1);
          }, (error) => {
            alert("실패했습니다.");
          });
        }else if(res.data.statusCode === 404){
          alert('토큰이 만료되었습니다. 로그인 화면으로 이동합니다.');
          removeCookie('Authorization');
          navigate('/');
          window.location.reload();
        }
      })
      .catch(err => 
        console.log(err)
        );

  };

  return (
    <div className='page'>
      <div className='emailManageContainer'>
        <div className='userManageTitle'>탈퇴 이메일 전송</div>
        <form ref={form} onSubmit={sendWithdrawEmail}>
          <div className='emailManageContent'>
            <div className='userManageBar' />
            <div className='emailTitleBar'>
              <label className="emailTitleName">제목</label>
              <input type="text" className="emailTitle" name="title" placeholder='제목을 입력해주세요' value={defaultTitle}></input>
            </div>
            <textarea className="emailContent" name="message" rows="20" cols="50">
              {defaultMessage}</textarea>
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
