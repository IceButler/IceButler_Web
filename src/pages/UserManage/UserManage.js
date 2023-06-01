import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './UserTr';
import Paging from 'components/Paging.js';
import { useNavigate } from "react-router-dom";
import searchIcon from "assets/images/food/search.png";

const UserManage = () => {
  const [info, setInfo] = useState([]);
  const [item, setItem] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [size, setSize] = useState(0);
  const [searchWord, setSearchWord] = useState("")

  const movePage = useNavigate();

  // 데이터 호출
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, searchWord]);

  const fetchData = (page) => {
    if(axios.defaults.headers.common['Authorization'] ==null){
      movePage('/');
    }
      axios.get(`/users?active=true&size=10&page=${page-1}&nickname=${searchWord}`)
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
    console.log(item.email);
    movePage('/email', { state: { item: item } }); 
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

  // 검색
  const onSearchClickHandler = (e) => {
    e.preventDefault();
}

  return (
    <div className='page'>
      <div className='userManageContainer'>
        <div className='userManageTitle'>일반 회원</div>
        <div className='userManageContent'>
        <div className='userManageSearch'>
                        <button>
                            <img src={searchIcon} alt='img error' onClick={onSearchClickHandler}/>
                        </button>
                        <input type="text" placeholder={"닉네임 검색"} onChange={(e) => {
                            setPage(1)
                            setSearchWord(e.target.value)}
                            } name="searchWord"/>
                    </div>
          <div className='userManageBar' />
          <div className='userManageTable'>
            <table>
              <thead>
                <tr>
                  <th width="30%">닉네임</th>
                  <th width="30%">이메일</th>
                  <th width="20%">신고 누적 횟수</th>
                  <th width="10%">이메일 전송</th>
                  <th width="10%">회원 탈퇴</th>
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
