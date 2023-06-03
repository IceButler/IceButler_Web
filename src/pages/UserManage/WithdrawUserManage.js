import React, { useEffect, useState } from 'react';
import './WithdrawUserManage.css';
import axios from 'axios';
import Tr from './WithdrawUserTr';
import Paging from 'components/Paging.js';
import { useNavigate } from "react-router-dom";
import searchIcon from "assets/images/food/search.png";

const WithdrawUserManage = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [size, setSize] = useState(0);
  const [searchWord, setSearchWord] = useState("")
  const [order, setOrder] = useState(false);

  const movePage = useNavigate();

  // 데이터 호출
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, searchWord, order]);

  const fetchData = (page) => {
    if(axios.defaults.headers.common['Authorization'] ==null){
      movePage('/');
    }
      axios.get(`/users?active=false&size=10&page=${page-1}&nickname=${searchWord}&order=${order}`)
        .then(res => {
          setInfo(res.data.data.content);
          setTotalElements(res.data.data.totalElements);
          setSize(10)
        })
        .catch(err => console.log(err));
  };

  // 이메일 전송
  const onSendEmail = (item) => {
    movePage('/email', { state: { item: item } }); 
  };

  // 페이징
  const handlePageChange = (page) => {
    setPage(page);
  };

  // 검색
  const onSearchClickHandler = (e) => {
    e.preventDefault();
  }

  // 신고 누적 횟수 정렬
  const handleReportCountClick = () => {
    setOrder(!order);
  };

  return (
    <div className='page'>
      <div className='userManageContainer'>
        <div className='userManageTitle'>탈퇴 회원</div>
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
                    <th width="20%" onClick={handleReportCountClick} style={{ cursor: 'pointer' }}>
                      {order ? '신고 누적 횟수 ▼' : '신고 누적 횟수 ―'}
                    </th>
                    <th width="20%">이메일 전송</th>
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