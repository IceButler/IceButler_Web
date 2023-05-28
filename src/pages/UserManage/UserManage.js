import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './UserTr';
import Paging from 'components/Paging.js';

const UserManage = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    axios.get(`/users?active=true&size=10&page=${page-1}`)
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
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
              </tbody>
            </table>
          </div>
          <div className='userManagePaging'>
            <Paging currentPage={currentPage} count={totalElements} handlePageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
