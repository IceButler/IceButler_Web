import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './WithdrawUserTr';
import Paging from 'components/Paging.js';
import { useNavigate } from "react-router-dom";

const WithdrawUserManage = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [size, setSize] = useState(0);

  const movePage = useNavigate();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    if(axios.defaults.headers.common['Authorization'] ==null){
      movePage('/');
    }
    axios.get(`/users?active=false&size=10&page=${page-1}`)
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

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className='page'>
      <div className='userManageContainer'>
        <div className='userManageTitle'>탈퇴 회원</div>
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
                </tr>
              </thead>
              <tbody>
                <Tr info={info} onSendEmail={onSendEmail} />
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

export default WithdrawUserManage;
