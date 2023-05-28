import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './UserTr';
import Paging from 'components/Paging.js';

const WithdrawUserManage = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    axios.get(`/users?active=false&size=10&page=${page-1}`)
      .then(res => {
        setInfo(res.data.data.content);
        setTotalElements(res.data.data.totalElements);
      })
      .catch(err => console.log(err));
      console.log(page);
  };

  const handleRemove = (id) => {
    console.log("성공");
    // TODO
  };

  const handleEdit = (id) => {
    console.log("성공2");
    // TODO
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className='page'>
      <div className='withdrawUserManageContainer'>
        <div className='withdrawUserManageTitle'>탈퇴 회원</div>
        <div className='withdrawUserManageContent'>
          <div className='withdrawUserManageBar' />
          <div className='withdrawUserManageTable'>
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
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
              </tbody>
            </table>
          </div>
          <div className='withdrawUserManagePaging'>
            <Paging currentPage={currentPage} count={totalElements} handlePageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawUserManage;
