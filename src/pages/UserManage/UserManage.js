import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './UserTr';
import Paging from 'components/Paging.js';
import { useNavigate } from "react-router-dom";

const UserManage = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [size, setSize] = useState(0);

  const movePage = useNavigate();

  // 데이터 호출
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    if(axios.defaults.headers.common['Authorization'] ==null){
      movePage('/');
    }
      axios.get(`/users?active=true&size=10&page=${page-1}`)
        .then(res => {
          setInfo(res.data.data.content);
          setTotalElements(res.data.data.totalElements);
          setSize(10)
        })
        .catch(err => console.log(err));
        console.log(page);
  };

  // 이메일 전송
  const onSendEmail = (item) => {
    movePage('/email', { item: item }); 
  };

  // 회원 탈퇴
  const withdrawUser = (idx) => {
    axios.delete(`/admin/users/${idx}`)
    .then(res => {
        console.log('HTTP 요청 성공');
        alert('성공적으로 탈퇴되었습니다.');
        fetchData(currentPage);
      })
      .catch(err => {
        console.error('HTTP 요청 실패:', err);
      });
  };

  // 페이징
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className='page'>
      <div className='userManageContainer'>
        <div className='userManageTitle'>일반 회원</div>
        <div className='userManageContent'>
          <div className='userManageBar' />
          <div className='userManageTable'>
            <table>
              <thead>
                <tr>
                  <th>닉네임</th>
                  <th>이메일</th>
                  <th>신고 누적 횟수</th>
                  <th>이메일 전송</th>
                  <th>회원 탈퇴</th>
                </tr>
              </thead>
              <tbody>
                <Tr info={info} onSendEmail={onSendEmail} withdrawUser={withdrawUser} />
              </tbody>
            </table>
          </div>
          <div className='userManagePaging'>
            <Paging currentPage={currentPage} size={size} count={totalElements} handlePageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
